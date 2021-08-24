import { createMemo } from "solid-js";

import styles from "./App.module.css";

import Table from "./Components/Table";
import NextDay from "./Components/NextDay";

function App() {
  const currentDayIndex = createMemo(() => new Date().getDay());
  const nextDay = createMemo(() => {
    const today = currentDayIndex();

    if (today > 4 || today < 1) return 1;
    return today + 1;
  });

  return (
    <div className={`flex one ${styles.App}`}>
      <Table currentDayIndex={currentDayIndex} nextDay={nextDay} />
      <NextDay nextDay={nextDay} />
    </div>
  );
}

export default App;
