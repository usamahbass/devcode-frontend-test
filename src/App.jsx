import { Suspense } from "react";
import Routers from "./routes";
import Loading from "./components/General/Loading";

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routers />
    </Suspense>
  );
};

export default App;
