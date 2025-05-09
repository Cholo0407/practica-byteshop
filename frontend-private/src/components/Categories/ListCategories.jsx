import React from "react";
import CardCategory from "./CardCategory";

const ListCategories = ({ categories, loading, deleteCategory, updateCategory }) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">Listado de Categorías</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Cargando...</div>}

        {categories?.map((category) => (
          <CardCategory
            key={category._id}
            category={category}
            deleteCategory={deleteCategory}
            updateCategory={updateCategory}
          />
        ))}
      </div>
    </>
  );
};

export default ListCategories;
