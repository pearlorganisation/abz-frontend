import axios from "axios";
// // Assuming 'store' and 'injectStore' are set up correctly elsewhere

// let store;
// export const injectStore = (_store) => {
//   store = _store;
// };

const url =
  process.env.NEXT_WORKING_ENV === "development"
    ? `${process.env.NEXT_PUBLIC_DEV_API_BASE_URL}/api/v1`
    : `${process.env.NEXT_PUBLIC_PROD_API_BASE_URL}/api/v1`;

// const REFRESH_TOKEN_URL = "/auth/refresh"; // Define refresh URL constant

// const getErrorMessage = (status, defaultMessage) => {
//   const errorMessages = {
//     400: "Bad Request",
//     401: "Unauthorized Access", // Keep this for general 401s
//     403: "Forbidden", // Keep this for general 403s
//     404: "Resource Not Found",
//     500: "Internal Server Error",
//     429: "Too Many Requests",
//   };
//   // Prioritize server message, then specific status, then generic fallback
//   return (
//     defaultMessage || errorMessages[status] || "An unknown error occurred."
//   );
// };

export const instance = axios.create({
  withCredentials: true,
  baseURL: url,
});

// instance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     const status = error?.response?.status;

//     // --- Condition to attempt token refresh ---
//     // 1. Status is 401 or 403
//     // 2. The request hasn't already been retried (to prevent infinite loops on persistent failures)
//     // 3. IMPORTANT: The failed request was *NOT* the token refresh request itself
//     if (
//       (status === 401 || status === 403) &&
//       !originalRequest._retry &&
//       originalRequest.url !== REFRESH_TOKEN_URL // <-- The key fix
//     ) {
//       originalRequest._retry = true; // Mark that we are attempting a retry
//       try {
//         console.log("Axios Interceptor: Attempting token refresh...");
//         await instance.post(REFRESH_TOKEN_URL); // Use the constant
//         console.log(
//           "Axios Interceptor: Token refresh successful. Retrying original request:",
//           originalRequest.url
//         );
//         // Refresh successful, retry the original request with the new token (Axios handles cookies/headers)
//         return instance(originalRequest);
//       } catch (refreshError) {
//         console.error(
//           "Axios Interceptor: Token refresh failed after initial 401/403.",
//           refreshError?.response?.data || refreshError?.message // Log more details
//         );
//         // Logout user ONLY if the refresh attempt fails
//         if (store) {
//           // Check if store is injected
//           store.dispatch({ type: "auth/logoutUser" });
//         } else {
//           console.error(
//             "Axios Interceptor: Store not available for logout dispatch."
//           );
//           // Maybe redirect manually? window.location.href = '/login';
//         }
//         // Reject the *original* request's promise with a specific error
//         return Promise.reject(
//           new Error("Session expired. Please log in again.")
//         ); // Use Error object
//       }
//     }

//     // --- Handle errors where refresh should NOT be attempted ---
//     // This includes:
//     // - Non-401/403 errors
//     // - 401/403 errors that were already retried (_retry = true)
//     // - 401/403 errors originating FROM the refresh endpoint itself

//     // If the refresh endpoint itself failed with 401/403, log out immediately
//     if (
//       (status === 401 || status === 403) &&
//       originalRequest.url === REFRESH_TOKEN_URL
//     ) {
//       console.error(
//         "Axios Interceptor: Refresh token endpoint returned 401/403. Logging out."
//       );
//       if (store) {
//         store.dispatch({ type: "auth/logoutUser" });
//       } else {
//         console.error(
//           "Axios Interceptor: Store not available for logout dispatch."
//         );
//         // Maybe redirect manually? window.location.href = '/login';
//       }
//       // Reject with a specific message indicating session failure
//       return Promise.reject(
//         new Error("Invalid session or refresh token. Please log in again.")
//       );
//     }

//     // For all other errors, extract the message and reject
//     const errorMessage = getErrorMessage(
//       status,
//       error?.response?.data?.message
//     );
//     console.error("Axios Interceptor: Request failed.", {
//       url: originalRequest.url,
//       status,
//       message: errorMessage,
//     });
//     return Promise.reject(new Error(errorMessage)); // Use Error object for better stack traces
//   }
// );
