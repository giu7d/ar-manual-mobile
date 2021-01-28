import "dotenv/config";

export default {
  expo: {
    name: "ar-manual",
    slug: "ar-manual",
    entryPoint: "./src/index.tsx",
    version: "1.0.0",
    orientation: "landscape",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.msc.manual",
      versionCode: 1,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      LOGIN_USERNAME: process.env.LOGIN_USERNAME,
      LOGIN_PASSWORD: process.env.LOGIN_PASSWORD,
      API_URL: process.env.API_URL,
      RENDER_URL: process.env.RENDER_URL,
      RENDER_MODE: process.env.RENDER_MODE,
      SURVEY_URL: process.env.SURVEY_URL,
      SURVEY_ENABLE: process.env.SURVEY_ENABLE,
    },
  },
};
