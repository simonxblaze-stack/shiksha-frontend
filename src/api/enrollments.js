import api from "./apiClient";

export const getCoursePublic = (courseId) =>
  api.get(`/courses/${courseId}/public/`).then((r) => r.data);

export const submitEnrollmentRequest = (formData) =>
  api.post("/enrollments/requests/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  }).then((r) => r.data);

export const getMyEnrollmentRequests = () =>
  api.get("/enrollments/requests/mine/").then((r) => r.data);

// --- Free trial ---

export const getTrialStatus = (courseId) =>
  api.get(`/enrollments/courses/${courseId}/trial-status/`).then((r) => r.data);

export const startTrial = (courseId) =>
  api.post(`/enrollments/courses/${courseId}/start-trial/`).then((r) => r.data);
