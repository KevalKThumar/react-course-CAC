import { useState } from 'react';


function App() {

  let [count, setCount] = useState(0)

  function increment() {
    /**
        setCount(count = count + 1)
        setCount(count = count + 1)
        setCount(count = count + 1) 
     */
    // what is the output without run  
    // ans is : only one increment or decrement because when state wiil be change react pass complate bandal of ui that change together in the user fiber algoritham before this react wiil use vitual DOM in this it will create seprete DOM like window dom and only change will be add in window dom rather than update whole ui or DOM that to see which is update or not their will be a fiber algorithm it is use in git or github also. 

    // what if we run like this only then we use one hidden perameter of useState's method which is accepting one callback function 

    setCount(prevCounter => prevCounter + 1)
    // setCount(prevCounter => prevCounter + 1)
    // setCount(prevCounter => prevCounter + 1)

  }
  function decrement() {
    /**
     * setCount(count = count - 1)
     * setCount(count = count - 1)
     * setCount(count = count - 1) 
     */
    // what is the output without run
    // ans is : only one increment or decrement because when state wiil be change react pass complate bandal of ui that change together in the user fiber algoritham before this react wiil use vitual DOM in this it will create seprete DOM like window dom and only change will be add in window dom rather than update whole ui or DOM that to see which is update or not their will be a fiber algorithm it is use in git or github also. 

    // what if we run like this only then we use one hidden perameter of useState's method which is accepting one callback function 

    setCount(prevCounter => prevCounter - 1)
    // setCount(prevCounter => prevCounter - 1)
    // setCount(prevCounter => prevCounter - 1)

  }

  return (
    <>
      <button onClick={increment}>+</button>
      <h1>
        {count}
      </h1>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
