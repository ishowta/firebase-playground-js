/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_FIREBASE_APIKEY: string;
  readonly VITE_FIREBASE_AUTHDOMAIN: string;
  readonly VITE_FIREBASE_DATABASEURL: string;
  readonly VITE_FIREBASE_PROJECTID: string;
  readonly VITE_FIREBASE_STORAGEBUCKET: string;
  readonly VITE_FIREBASE_MESSAGINGSENDERID: string;
  readonly VITE_FIREBASE_APPID: string;
  readonly VITE_FIREBASE_MEASUREMENTID: string;
  readonly VITE_FIREBASE_RECAPTCHAV3_SITEKEY: string;
  readonly VITE_FIREBASE_EMULATOR_ENABLED: "true" | "false";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
