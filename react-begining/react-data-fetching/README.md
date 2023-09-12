# React + Vite

# Image loading and Error catching as react element

```js
import { useEffect, useState } from "react";

const Image = () => {

    const [imageURL, setImageURL] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
        .then((response) => response.json())
        .then((response) => setImageURL(response[0].url))
        .catch((error) => setError(error));
    }, []);


    if (error) return <p>A network error was encountered</p>
    return (
        imageURL && (
        <>
            <h1>An image</h1>
            <img src={imageURL} alt={"placeholder text"} />
        </>
        )
    );
};

export default Image;
```: dataImage.jsx

```js
import Image from './dataImage'
import './App.css'

function App() {

  return (
    <>
      < Image/>
    </>
  )
}

export default App

```

# Loading state

```js
const Image = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>A network error was encountered</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};
```
