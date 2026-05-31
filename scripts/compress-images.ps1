Add-Type -AssemblyName System.Drawing

$assetsDir = Join-Path $PSScriptRoot "..\src\assets"
$assetsDir = (Resolve-Path $assetsDir).Path

$MAX_WIDTH   = 1920
$JPEG_QUALITY = 82

# Collect all image files
$images = Get-ChildItem -Recurse -Path $assetsDir -Include "*.jpg","*.jpeg","*.png" |
          Where-Object { $_.Name -ne "Shiksha.png" }   # logo already resized

$jpegEncoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
               Where-Object { $_.MimeType -eq "image/jpeg" }
$pngEncoder  = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
               Where-Object { $_.MimeType -eq "image/png"  }

$jpegParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$jpegParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, [long]$JPEG_QUALITY)

$totalBefore = 0
$totalAfter  = 0
$count       = 0

foreach ($file in $images) {
    $before = $file.Length

    try {
        # Load into a MemoryStream so the file handle is released immediately
        $bytes  = [System.IO.File]::ReadAllBytes($file.FullName)
        $ms     = New-Object System.IO.MemoryStream(,$bytes)
        $srcImg = [System.Drawing.Image]::FromStream($ms)

        $w = $srcImg.Width
        $h = $srcImg.Height

        # Resize only if wider than MAX_WIDTH
        if ($w -gt $MAX_WIDTH) {
            $ratio  = $MAX_WIDTH / $w
            $newW   = $MAX_WIDTH
            $newH   = [int]($h * $ratio)
            $bmp    = New-Object System.Drawing.Bitmap($newW, $newH)
            $g      = [System.Drawing.Graphics]::FromImage($bmp)
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.DrawImage($srcImg, 0, 0, $newW, $newH)
            $g.Dispose()
            $srcImg.Dispose()
            $srcImg = $bmp
        }

        $tmp = $file.FullName + ".tmp"
        $ext = $file.Extension.ToLower()

        if ($ext -eq ".png") {
            $srcImg.Save($tmp, $pngEncoder, $null)
        } else {
            $srcImg.Save($tmp, $jpegEncoder, $jpegParams)
        }
        $srcImg.Dispose()
        $ms.Dispose()

        $after = (Get-Item $tmp).Length

        # Only replace if the new file is actually smaller
        if ($after -lt $before) {
            Remove-Item $file.FullName -Force
            Rename-Item $tmp $file.FullName
            $saved = $before - $after
            $pct   = [math]::Round(($saved / $before) * 100, 1)
            $rel   = $file.FullName.Replace($assetsDir + "\", "")
            Write-Host ("OK  {0,-55} {1,6}KB -> {2,5}KB  (-{3}%)" -f $rel, [math]::Round($before/1KB,0), [math]::Round($after/1KB,0), $pct)
            $totalBefore += $before
            $totalAfter  += $after
            $count++
        } else {
            Remove-Item $tmp -Force
        }
    } catch {
        Write-Host ("ERR $($file.Name): $_") -ForegroundColor Red
    }
}

if ($count -gt 0) {
    $saved = $totalBefore - $totalAfter
    Write-Host ""
    Write-Host ("Done. Compressed {0} images." -f $count)
    Write-Host ("Total: {0}KB -> {1}KB  (saved {2}KB / {3} MB)" -f `
        [math]::Round($totalBefore/1KB,0), `
        [math]::Round($totalAfter/1KB,0), `
        [math]::Round($saved/1KB,0), `
        [math]::Round($saved/1MB,1))
} else {
    Write-Host "No images needed compression."
}
