import { FC } from "react";
import { FirestorePlayground } from "./playgrounds/firestore";
import { FunctionsPlayground } from "./playgrounds/functions";

const App: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Firebase Playground</h1>
      <h2>Firestore</h2>
      <div>
        <FirestorePlayground />
      </div>
      <h2>Functions</h2>
      <div>
        <FunctionsPlayground />
      </div>
    </div>
  );
};

export default App;
