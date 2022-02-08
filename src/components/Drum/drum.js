import styles from "../Drum/drum.module.css";

function Drum({ data, togglebool }) {
  const play = () => {
    if (togglebool === true) {
      new Audio(`./assets/${data.indie_src}`).play();
    } else {
      new Audio(`./assets/${data.metal_src}`).play();
    }
  };

  if (data.type === "img") {
    return (
      <div className={styles.container}>
        <div className={styles.drum} onClick={play}>
          <img
            //Icons
            className={styles.image}
            src={`./assets/icons/${data.src}`}
            alt="Fehler beim Laden"
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Drum;
