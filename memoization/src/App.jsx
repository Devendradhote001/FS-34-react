import React, { use, useCallback, useMemo, useRef, useState } from "react";

const App = () => {
  console.log(inpRef);

  return (
    <div>
      <h1 ref={inpRef}>Hello </h1>
      <input
        onChange={() => console.log(inpRef)}
        type="text"
        placeholder="enter your name"
      />
      <button>Submit</button>
    </div>
  );
};

export default App;

// React.memo hota hai Component ko memoize rerender hone se bachane k liye
// useCallback hota hai function ko memoize or same ref save rakhne k liye
// usememo hota hai kissi bhi value ko memoize karne k liye
