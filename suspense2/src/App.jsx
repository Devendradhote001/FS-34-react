import React, { lazy, Suspense } from "react";
let About = lazy(() => import("./components/About"));


const App = () => {
  return (
    <div>
      <h1>App</h1>

      <Suspense fallback={<h1>Loading...</h1>}>
        <About />
      </Suspense>
    </div>
  );
};

export default App;
