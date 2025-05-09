import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400 transition duration-300">
            Modelos
        </Link>
        </li>
        <li>
        <Link to="/Employees" className="hover:text-gray-400 transition duration-300">
            Empleados
        </Link>
        </li>
        <li>
        <Link to="/Categories" className="hover:text-gray-400 transition duration-300">
            Categorías
        </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
