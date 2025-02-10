import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import { GlobalProvider } from "../context/GlobalContext";

const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/details" Component={Details} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
