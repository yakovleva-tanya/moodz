import React from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroller";

const Gallery = ({ city, loadMore, items }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={true}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <div className="flex flex-wrap justify-center">
        {items.map((item, key) => (
          <Card key={key} city={city} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
