import ElementWrapper from "./components/compound/ElementWrapper";
import Header from "./components/layout/Header";
import { ThemeProvider } from "./components/providers/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light">
        <Header />
        <ElementWrapper />
      </ThemeProvider>
    </>
  );
}

export default App;
