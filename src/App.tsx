import { BrowserRouter } from "react-router-dom";

import { AppContextProvider } from "./context/AppContext";
import { Router } from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Router />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
