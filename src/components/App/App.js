import styles from "../App/App.module.css";
import Drum from "../Drum/drum";
import assets from "../../assets.js";
import { useState } from "react";

function App() {
  return (
    <div className={styles.app}>
      <h1>drum machine</h1>
      <div>
        <h2 className={styles.toggleswitch}>change drumset</h2>
      </div>

      <div className={styles.container}>
        {assets.map((element) => (
          <Drum data={element} key={element.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
