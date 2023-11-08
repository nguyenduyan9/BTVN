import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import { About } from "./Pages/About";
import { router } from "./Utils/router";
import { DefaultLayout } from "./Layouts/DefaultLayout";
function App() {
  return router(DefaultLayout);
}

export default App;
