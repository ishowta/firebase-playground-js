import * as functions from "firebase-functions";

export const helloWorld = functions.https.onCall(() => {
  functions.logger.info("Hello logs!", { structuredData: true });
  return "Hello from Firebase!";
});
