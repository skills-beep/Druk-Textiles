
import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <motion.div
          initial={{ rotate: -45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Sun className="h-5 w-5" />
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotate: 45 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Moon className="h-5 w-5" />
        </motion.div>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
