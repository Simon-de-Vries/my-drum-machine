import styles from "../App/App.module.css";
import Drum from "../Drum/drum";
import assets from "../../assets.js";
import { useState } from "react";

function App() {
  // const [isToggled, setIsToggled] = useState(false);
  // const onToggle = () => setIsToggled(!isToggled);
  const metalDrumkit = () => {
    <Drum togglebool={true} />;
  };
  const indieDrumkit = () => {
    <Drum togglebool={false} />;
  };

  return (
    <div className={styles.app}>
      <h1>drum machine</h1>
      <div className={styles.drumkitButtonContainer}>
        <div className={styles.drumkitButton} onClick={metalDrumkit}>
          <h2>metal</h2>
        </div>
        <div className={styles.drumkitButton} onClick={indieDrumkit}>
          <h2>indie</h2>
        </div>
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
