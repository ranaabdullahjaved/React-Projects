import { useEffect, useState } from "react";
import Card from "./Components/Card";
import ThemeBtn from "./Components/ThemeBtn";
import { ThemeProvider } from "./Context/theme";

function App() {
  const [themeMode, setTheme] = useState("light");

  // we are defining lightTheme funtionality here it will go in
  // theme.js automatically where we just provide the intialization
  const lightTheme = () => {
    setTheme("light");
  };
  const darkTheme = () => {
    setTheme("dark");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
      ;
    </ThemeProvider>
  );
}

export default App;
