import  { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 2000);
  }, [])

  return (
    <div>
        <br />
        <h1>UseEffect Clock</h1>
        <p>{counter} seconds have passed.</p>
    </div>
  );
}