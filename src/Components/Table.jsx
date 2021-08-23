import { createMemo, createSignal } from "solid-js";

import data, { columnRemap } from "../Misc/data";

function Table() {
  const currentDayIndex = createMemo(() => new Date().getDay());

  return (
    <table className="primary">
      <thead>
        <tr>
          <For each={data.map(({ hari }) => hari)}>
            {(item) => <th>{item}</th>}
          </For>
        </tr>
      </thead>
      <tbody>
        {/*<tr>
          <td>Francisco</td>
          <td>Valencia, Spain</td>
        </tr>
        <tr>
          <td>Eve</td>
          <td>San Francisco, USA</td>
        </tr>
        <tr>
          <td>Martin</td>
          <td>New York, USA</td>
        </tr>
        <tr>
          <td>Sarah</td>
          <td>London, UK</td>
        </tr>*/}
      </tbody>
    </table>
  );
}

export default Table;
