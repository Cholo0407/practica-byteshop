import React from "react";
import Button from "../Button";  // El componente Button ya está importado

const RegisterCategories = ({
  id,
  name,
  setName,
  description,
  setDescription,
  saveCategory,
  handleEdit,
}) => {
  return (
    <div>
      <form className="w-full max-w-lg mx-auto mt-10 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-xl font-bold mb-4 text-center">
          {id ? "Editar Categoría" : "Registrar Nueva Categoría"}
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Deportivo"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
            Descripción
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            placeholder="Tenis para hacer actividad física"
          />
        </div>

        {!id ? (
          <Button
            label="Registrar"
            actionButton={(e) => {
              saveCategory(e);
            }}
          />
        ) : (
          <Button
            label="Actualizar"
            actionButton={(e) => {
              handleEdit(e);
            }}
          />
        )}
      </form>
    </div>
  );
};

export default RegisterCategories;
