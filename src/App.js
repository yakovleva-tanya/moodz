import React, { useState } from "react";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";

function App() {
  const [city, setCity] = useState("London");

  const handleChange = event => {
    setCity(event.target.value);
    setItems(Array.from({ length: 0 }));
  };

  const loadMore = () => {
    setItems(items.concat(Array.from({ length: 2 })));
  };

  const [items, setItems] = useState(Array.from({ length: 1 }));

  return (
    <div className="items-center w-full">
      <Hero handleChange={handleChange} city={city} />
      <Gallery city={city} loadMore={loadMore} items={items} />
    </div>
  );
}

export default App;
