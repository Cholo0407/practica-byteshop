import React, { useState, useEffect } from "react";
import RegisterCategories from "../components/Categories/RegisterCategories";
import ListCategories from "../components/Categories/ListCategories";

const Categories = () => {
  const [activeTab, setActiveTab] = useState("list");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const API = "http://localhost:4000/api/categories";

  // Limpiar los campos del formulario
  const cleanData = () => {
    setName("");
    setDescription("");
    setId("");
    setError(null);
    setSuccess(null);
  };

  // Obtener las categorías
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("Hubo un error al obtener las categorías");
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Guardar una nueva categoría
  const saveCategory = async (e) => {
    e.preventDefault();

    const newCategory = { name, description };

    try {
      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });

      if (!response.ok) {
        throw new Error("Hubo un error al registrar la categoría");
      }

      const data = await response.json();
      alert("Categoría registrada correctamente");
      fetchCategories();
      cleanData();
    } catch (error) {
      setError(error.message);
    }
  };

  // Actualizar categoría existente
  const handleEdit = async (e) => {
    e.preventDefault();

    const updatedCategory = { name, description };

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedCategory),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la categoría");
      }

      const data = await response.json();
      alert("Categoría actualizada correctamente");
      fetchCategories();
      cleanData();
      setActiveTab("list");
    } catch (error) {
      setError(error.message);
    }
  };

  // Eliminar una categoría
  const deleteCategory = async (id) => {
    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Hubo un error al eliminar la categoría");
      }

      const data = await response.json();
      alert("Categoría eliminada correctamente");
      fetchCategories();
    } catch (error) {
      setError(error.message);
    }
  };

  // Función para editar una categoría
  const updateCategory = (category) => {
    setId(category._id);
    setName(category.name);
    setDescription(category.description);
    setActiveTab("form");
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Categorías</h1>
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className={`px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
                activeTab === "list" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("list")}
            >
              Lista de Categorías
            </button>
            <button
              className={`px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none ${
                activeTab === "form" ? "border-b-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveTab("form")}
            >
              Gestionar Categoría
            </button>
          </div>
          <div>
            {activeTab === "list" && (
              <ListCategories
                categories={categories}
                loading={loading}
                deleteCategory={deleteCategory}
                updateCategory={updateCategory}
              />
            )}
            {activeTab === "form" && (
              <RegisterCategories
                saveCategory={saveCategory}
                handleEdit={handleEdit}
                setName={setName}
                setDescription={setDescription}
                name={name}
                description={description}
                error={error}
                success={success}
                cleanData={cleanData}
                id={id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
