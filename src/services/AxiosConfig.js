import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://api-FBC2144A-9257-4C73-819B-60A6EA36F39E.sendbird.com/v3",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 1000,
});

axiosInstance.interceptors.request.use(async (config) => {
    return config;
});

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) =>
            Promise.reject(
                (error?.message || "").includes("timeout") ||
                    (error?.message || "").includes("Network Error")
                    ? "Please check your internet connection"
                    : error
            )
    );

export default axiosInstance;


// axiosInstance.interceptors.request.use(async (config) => {
//   const state = store.getState();
//   const _accessToken = await EncryptedStorage.getItem("token");
//   const accessToken =
//     state.authReducer.accessToken !== ""
//       ? state.authReducer.accessToken
//       : _accessToken;
//   const newConfig = { ...config };
//   newConfig.baseURL = state.appAdminReducer.appConfig.baseURL;
//   if (accessToken && newConfig.baseURL) {
//     newConfig.headers["Authorization"] = `Bearer ${accessToken}`;
//   }
//   return newConfig;
// });

//     axiosInstance.interceptors.response.use(
//         (response) => response,
//         (error) =>
//             Promise.reject(
//                 (error?.message || "").includes("timeout") ||
//                     (error?.message || "").includes("Network Error")
//                     ? "Please check your internet connection"
//                     : error
//             )
//     );

// export default axiosInstance;