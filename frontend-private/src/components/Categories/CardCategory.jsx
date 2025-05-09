import React from "react";

const CardCategory = ({ category, deleteCategory, updateCategory }) => {
  if (!category) {
    return <div className="text-center text-gray-500">Cargando...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          {category.name}
        </h2>
        <p className="text-gray-600">
          <span className="font-semibold">Descripción:</span> {category.description || "Sin descripción"}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
          onClick={() => deleteCategory(category._id)}
        >
          Eliminar
        </button>
        <button
          className="ml-2 mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600"
          onClick={() => updateCategory(category)}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default CardCategory;
