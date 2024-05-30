import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <h1 className="title">Our tours</h1>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
