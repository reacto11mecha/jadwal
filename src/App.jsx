import styles from "./App.module.css";

import Table from "./Components/Table";

function App() {
  return (
    <div className={`flex one ${styles.App}`}>
      <div>
        <h1>Jadwal Pelajaran Kelas X Bahasa</h1>
      </div>
      <Table />
    </div>
  );
}

export default App;
