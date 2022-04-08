import { createMemo } from "solid-js";
import { HopeProvider, Container } from "@hope-ui/solid";

import Table from "./Components/Table";
import NextDay from "./Components/NextDay";

const config = {
  initialColorMode: "system",
};

function App() {
  const currentDayIndex = createMemo(() => new Date().getDay());
  const nextDay = createMemo(() => {
    const today = currentDayIndex();

    if (today > 4 || today < 1) return 1;
    return today + 1;
  });

  return (
    <HopeProvider config={config}>
      <Container p="$4">
        <Table currentDayIndex={currentDayIndex} nextDay={nextDay} />
        <NextDay nextDay={nextDay} />
      </Container>
    </HopeProvider>
  );
}

export default App;
