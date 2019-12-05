import React from "react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "./Loader";
import Fade from "react-reveal/Fade";

const Gallery = ({ loadMore, items }) => {
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={true}
      threshold={1500}
      loader={<Loader />}
    >
      <div className="flex flex-wrap justify-center">
        {items.map((item, index) => (
          <Fade
            bottom
            duration={2000}
            delay={
              Math.random() *
              200 *
              index
                .toString()
                .split("")
                .pop()
            }
          >
            <Card key={index} link={item} />
          </Fade>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
