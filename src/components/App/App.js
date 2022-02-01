import styles from "../App/App.module.css";
import { useState } from "react";
import Drum from "../Drum/drum";
import assets from "../../assets.js";

function App() {
  return (
    <div className={styles.app}>
      <h1>Drum</h1>
      <h1>Machine</h1>

      <div className={styles.container}>
        {assets.map((element) => (
          <Drum data={element} key={element.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
