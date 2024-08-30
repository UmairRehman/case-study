import axios from "axios";
import { Status } from "../shared/constant";
import { setupCache } from "axios-cache-interceptor";
import { Config } from "../config";

const axiosInstance = axios.create({
  baseURL: Config.apiBaseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const Api = setupCache(axiosInstance, {
  methods: [],
});

Api.interceptors.request.use(
  async (config: any) => {
    config.headers["access-key"] = Config.apiAccessKey;
    return config;
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  async (response: any) => {
    const { meta } = response.data;
    if (
      meta?.statusCode == Status.CREATED ||
      meta?.statusCode == Status.SUCCESS
    ) {
      response.data.success = true;
    }
    return response;
  },
  async (error: any) => {
    // Check if the user is offline
    if (!navigator.onLine) {
      // Show alert when offline
      alert("Your data connection is not connected. Please check your internet connection.");
    }

    const res = error?.response;
    const AUTH_DISABLED_NOTIFICATION_ENDPOINTS = [
      "users/me",
      "users/verify-hash",
    ];
    let message = res.data.message || res.data.meta?.message || res.meta?.error;
    if (Array.isArray(res.data.meta?.message)) {
      message = res.data.meta?.message[0];
    }
    if (
      !(
        window.location.href.includes("auth") &&
        AUTH_DISABLED_NOTIFICATION_ENDPOINTS.some((endpoint) =>
          res.request.responseURL.includes(endpoint)
        )
      )
    ) {
      console.log("error");
    }
    res.data = { ...res.data, success: false };
    if (res?.status === 401 && !window.location.href.includes("auth")) {
      window.location.href = "/auth";
      return res;
    } else if (res?.status === 410) {
      window.location.href = "/dashboard";
      return res;
    }
    return res;
  }
);

export default Api;
