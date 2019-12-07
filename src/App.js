import React, { useState } from "react";
import Hero from "./Components/Hero";
import Gallery from "./Components/Gallery";
import BackToTop from "react-back-to-top-button";
import ArrowUp from "./Assets/ArrowUp.svg";

function App() {
  const [city, setCity] = useState("Rome");
  const [items, setItems] = useState([]);
  const itemsToLoad = 25;

  const handleChange = event => {
    setItems([]);
    setCity(event.target.value);
  };

  const getLink = () => {
    let calcDims = () => Math.floor(Math.random() * 300 + 200);
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
        let newArray = items.concat(results);
        newArray = Array.from(new Set(newArray));
        setItems(newArray);
      })

  };

  return (
    <div className="items-center w-full">
      <Hero handleChange={handleChange} city={city} />
      <Gallery city={city} loadMore={loadMore} items={items} />
      <BackToTop showOnScrollUp showAt={1} speed={500} easing="easeInOutQuint">
        <img alt="arrow up" src={ArrowUp}></img>
      </BackToTop>
    </div>
  );
}

export default App;
