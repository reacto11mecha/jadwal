import { For } from "solid-js";
import { VStack, Text, Table, Thead, Tbody, Tr, Th, Td } from "@hope-ui/solid";

import styles from "./Table.module.css";
import data, { columnRemap } from "../Misc/data";

const TableComponent = ({ currentDayIndex, nextDay }) => (
  <VStack spacing="$6" alignItems="flex-center">
    <Text size="4xl" className={styles.center}>
      Jadwal Pelajaran Kelas XI Bahasa
    </Text>
    <div className={styles.scrollableHorizontal}>
      <Table className={styles.table}>
        <Thead>
          <Tr>
            <For each={data.map(({ hari }) => hari)}>
              {(item) => <Th className={styles.center}>{item}</Th>}
            </For>
          </Tr>
        </Thead>
        <Tbody>
          <For each={data.map((_, idx) => idx)}>
            {(index) => (
              <Tr className={styles.center}>
                <For each={columnRemap[index]}>
                  {(mataPelajaran) => (
                    <Td
                      bg={
                        mataPelajaran.index === currentDayIndex()
                          ? "$primary8"
                          : mataPelajaran.index === nextDay()
                          ? "$primary9"
                          : ""
                      }
                    >
                      {mataPelajaran.mapel === null ? "" : mataPelajaran.mapel}
                    </Td>
                  )}
                </For>
              </Tr>
            )}
          </For>
        </Tbody>
      </Table>
    </div>
  </VStack>
);

export default TableComponent;
