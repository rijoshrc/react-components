import { Button } from "../atoms/button";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "../providers/ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="fixed inset-0 z-50 flex items-center h-20 px-10 bg-secondary dark:bg-secondary-dark">
      <div>
        <h2 className="text-2xl font-bold text-primary dark:text-primary-dark">
          React Components
        </h2>
      </div>
      <div className="flex items-center ml-auto">
        {theme === "dark" ? (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("light")}
          >
            <CiLight size={20} />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme("dark")}
          >
            <CiDark size={20} />
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
