import styles from "../Drum/drum.module.css";

function Drum({ data }) {
  // const play = () => {
  //   new Audio(data.sound).play();
  // onClick={play}
  // };

  if (data.type === "img") {
    return (
      <div className={styles.container}>
        <div className={styles.drum}>
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
