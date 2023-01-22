import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { FC } from "react";
import { firestore } from "../firebase";

export const FirestorePlayground: FC = () => {
  const run = async () => {
    const ref = doc(collection(firestore, "tests"));
    await setDoc(ref, { hello: "world" });
    const snapshot = await getDoc(ref);
    console.log(snapshot.ref.path, snapshot.data());
  };

  return <button onClick={() => void run()}>Click</button>;
};
