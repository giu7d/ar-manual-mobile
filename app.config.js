import "dotenv/config";

export default {
  expo: {
    name: "mobile",
    slug: "mobile",
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
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      username: process.env.DEV_USERNAME,
      password: process.env.DEV_PASSWORD,
    },
  },
};
