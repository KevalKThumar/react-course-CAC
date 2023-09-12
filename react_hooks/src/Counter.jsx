import { useState } from "react";

// const Counter = () => {
//   let count = 4;

//   function decrement() {
//     count = count - 1;
//     console.log(count);
//   }
//   function increment() {
//     count = count + 1;
//     console.log(count);
//   }

//   return (
// <>
//   <button type="button" onClick={decrement}>
//     Click me for (-)
//   </button>
//   <h1>Count is {count} </h1>
//   <button type="button" onClick={increment}>
//     Click me for (+)
//   </button>
// </>
//   );
// };

const Counter = () => {
  let [count, setCount] = useState(0);

  function decrement() {
    count <= 0 ? setCount(0) : setCount((count = count - 1));
    console.log(count);
  }
  function increment() {
    count > 100 ? setCount(100) : setCount((count = count + 1));
    console.log(count);
  }
  return (
    <>
      <button type="button" onClick={decrement}>
        Click me for (-)
      </button>
      <h1>Count is {count} </h1>
      <button type="button" onClick={increment}>
        Click me for (+)
      </button>
    </>
  );
};

export default Counter;
