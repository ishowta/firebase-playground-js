import { httpsCallable } from "firebase/functions";
import { FC } from "react";
import { functions } from "../firebase";

export const FunctionsPlayground: FC = () => {
  const run = async () => {
    const res = await httpsCallable(functions, "helloWorld")();
    console.log(res);
  };

  return <button onClick={() => void run()}>Click</button>;
};
