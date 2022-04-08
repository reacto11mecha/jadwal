import { createMemo } from "solid-js";
import { HStack, Text, Button, useColorMode } from "@hope-ui/solid";

import data from "../Misc/data";
import styles from "./NextDay.module.css";

function NextDay({ nextDay }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const next = createMemo(() => data[nextDay() - 1]);

  return (
    <HStack>
      <div className={styles.nextDay}>
        <Text size={"2xl"} mb={"$2"}>
          Mata Pelajaran Selanjutnya
        </Text>
        <Text>
          Hari Belajar Selanjutnya adalah hari <b>{next().hari}</b>
        </Text>
        <Text>
          Mapel:{" "}
          {next()
            .mapel.filter((x) => x !== undefined)
            .filter((x) => x !== null)
            .join(", ")}
          .
        </Text>
      </div>
      <div className={styles.buttonDiv}>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode() === "light" ? "dark" : "light"}
        </Button>
      </div>
    </HStack>
  );
}

export default NextDay;
