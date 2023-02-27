import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./widgets/layout/navbar";
import routes from "./routes";

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
