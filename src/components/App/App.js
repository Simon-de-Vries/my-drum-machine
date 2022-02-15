import styles from "../App/App.module.css";
import Drum from "../Drum/drum";
import assets from "../../assets.js";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={styles.app}>
      <h1>drum machine</h1>
      <div className={styles.drumkitButtonContainer}>
        <div
          className={styles.drumkitButton}
          onClick={() => setToggle(false)}
          onTouchStart={() => setToggle(false)}
        >
          <h2>metal</h2>
        </div>
        <div
          className={styles.drumkitButton}
          onClick={() => setToggle(true)}
          onTouchStart={() => setToggle(true)}
        >
          <h2>indie</h2>
        </div>
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
