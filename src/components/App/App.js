import styles from "../App/App.module.css";
import Drum from "../Drum/drum";
import assets from "../../assets.js";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.app}>
      <h1>drum machine</h1>
      <div className={styles.drumkitButtonContainer}>
        <button
          className={
            toggle === false
              ? styles.drumkitButtonPressed
              : styles.drumkitButton
          }
          onMouseDown={() => setToggle(false)}
        >
          <h2>metal</h2>
        </button>

        <button
          className={
            toggle === true ? styles.drumkitButtonPressed : styles.drumkitButton
          }
          onMouseDown={() => setToggle(true)}
        >
          <h2>indie</h2>
        </button>
      </div>
      <div className={styles.container}>
        {assets.map((element) => (
          <Drum data={element} key={element.id} togglebool={toggle} />
        ))}
      </div>
    </div>
  );
}

export default App;
