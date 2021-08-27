import { createMemo } from "solid-js";

import data from "../Misc/data";
import styles from "./NextDay.module.css";

function NextDay({ nextDay }) {
  const next = createMemo(() =>
    data[nextDay() - 1].mapel
      .filter((x) => x !== undefined)
      .filter((x) => x !== null)
  );

  return (
    <div className={styles.nextDay}>
      <h3>Mata Pelajaran Selanjutnya</h3>
      <p>
        Hari Belajar Selanjutnya adalah hari <b>{next().hari}</b>
      </p>
      <p>Mapel: {next().join(", ")}.</p>
    </div>
  );
}

export default NextDay;
