import React, { useState } from "react";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";

function App() {
  const [city, setCity] = useState("London");
  const [items, setItems] = useState([]);
  const itemsToLoad = 25;

  const handleChange = event => {
    setItems([]);
    setCity(event.target.value);
  };

  const getLink = () => {
    let calcDims = () => Math.floor(Math.random() * 300 + 300);
    let x = calcDims();
    let link = `https://source.unsplash.com/${x}x300/?${city}`;
    return link;
  };

  const getLinks = () => {
    let links = [];
    for (let i = 0; i < itemsToLoad; i++) {
      let newLink = getLink();
      links.push(newLink);
    }
    return links;
  };

  const loadMore = () => {
    const links = getLinks();
    Promise.all(
      links.map(link => {
        return fetch(link).then(res => res.url);
      })
    )
      .then(results => {
        setItems(items.concat(results));
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="items-center w-full">
      <Hero handleChange={handleChange} city={city} />
      <Gallery city={city} loadMore={loadMore} items={items} />
    </div>
  );
}

export default App;
