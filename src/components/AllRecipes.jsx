import React from "react";
import MediaCard from "./MediaCard";

const AllRecipes = ({ data }) => {
  console.log(data, "data from all recipes");
  return (
    <div className="all">
      {data.map(({ recipe }) => {
        return (
          <MediaCard
            label={recipe.label}
            image={recipe.image}
            cuisineType={recipe.cuisineType}
            dishType={recipe.dishType}
          />
        );
      })}
    </div>
  );
};

export default AllRecipes;
