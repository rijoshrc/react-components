import ElementWrapper from "./components/compound/ElementWrapper";
import { ThemeProvider } from "./components/providers/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <ElementWrapper />
      </ThemeProvider>
    </>
  );
}

export default App;
