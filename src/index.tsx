import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const AppLoader = ({
  children
}: {
  children?: React.ReactNode | React.ReactNodeArray;
}) => <React.Suspense fallback="Loading...">{children}</React.Suspense>;

const App = React.lazy(() => import("./components/App"));

const AppThemeLoader = ({ theme }: { theme: string }) => {
  const LoadAppTheme = React.lazy(() => import(`./components/${theme}`));
  return <LoadAppTheme />;
};

async function loadApp() {
  // Load configuration first
  const config = await import("./config").then(module => module.default);

  ReactDOM.render(
    <AppLoader>
      <App />
      <AppThemeLoader theme={config.theme} />
    </AppLoader>,
    document.getElementById("root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

loadApp();
