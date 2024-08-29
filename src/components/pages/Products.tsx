import React from "react";
import Cards from "../Cards";
import Filter from "../Filter";

const Products = () => {

  return (
    <section className="products_container p-[4rem]">
      <Filter />
      <Cards />
    </section>
  );
};

export default Products;
