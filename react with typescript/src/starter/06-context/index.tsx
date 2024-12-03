import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);  
  return (
    <div>
      <h2>React & TypeScript</h2>
      <h3>Context API</h3>
      <button
        onClick={() => {
          if (context.theme === "dark") {
            context.setTheme("system");
          } else if (context.theme === "system") {
            context.setTheme("light");
          } else {
            context.setTheme("dark");
          }
        }}
        className="btn btn-center"
      >
        Toggle Mode
      </button>
      <p>Current theme: {context.theme}</p>
    </div>
  );
}

export default ParentComponent;


// 19:17
