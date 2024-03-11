import React, { useState } from "react";

interface FilterSidebarProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  brand: string[];
  size: number[];
  color: string[];
}

const initialFilters: Filters = {
  brand: [],
  size: [],
  color: [],
};

const Filters = () => {
  const [filters, setFilters] = useState<Filters>(initialFilters);

  const handleFilterChange = (filterType: string, value: string | number) => {
    setFilters((prevFilters:any) => ({
      ...prevFilters,
      [filterType]: prevFilters[filterType].includes(value)
        ? prevFilters[filterType].filter((v:any) => v !== value)
        : [...prevFilters[filterType], value],
    }));
  };

//   const applyFilters = () => {
//     onFilterChange(filters);
//   };

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-semibold border-solid border-black border-b-2 py-4">Filter by:</h2>
    
      <div className="mt-4">
        <h3 className="text-md font-semibold">Brands</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Nike"
            onChange={(e) => handleFilterChange("brand", e.target.value)}
            className="mr-2"
          />
          Nike
        </label>
        <label className="flex items-center">
            <input type="checkbox"
            value="Converse"
            onChange={(e)=>handleFilterChange("brand", e.target.value)}
            className="mr-2"
            />
            Converse
        </label>
        <label className="flex items-center">
            <input type="checkbox"
            value="Adidas"
            onChange={(e)=>handleFilterChange("brand", e.target.value)}
            className="mr-2"
            />
            Adidas
        </label>
        <label className="flex items-center">
            <input type="checkbox"
            value="Puma"
            onChange={(e)=>handleFilterChange("brand", e.target.value)}
            className="mr-2"
            />
            Puma
        </label>
        {/* More brand options */}
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold">Sizes</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            value={10}
            onChange={(e) => handleFilterChange("size", parseInt(e.target.value))}
            className="mr-2"
          />
          10
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value={9}
            onChange={(e) => handleFilterChange("size", parseInt(e.target.value))}
            className="mr-2"
          />
          9
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value={8}
            onChange={(e) => handleFilterChange("size", parseInt(e.target.value))}
            className="mr-2"
          />
          8
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value={7}
            onChange={(e) => handleFilterChange("size", parseInt(e.target.value))}
            className="mr-2"
          />
          7
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value={6}
            onChange={(e) => handleFilterChange("size", parseInt(e.target.value))}
            className="mr-2"
          />
          6
        </label>
        {/* More size options */}
      </div>
      <div className="mt-4">
        <h3 className="text-md font-semibold">Colors</h3>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Red"
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="mr-2"
          />
          Red
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Red"
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="mr-2"
          />
          White
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Red"
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="mr-2"
          />
          Black
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            value="Red"
            onChange={(e) => handleFilterChange("color", e.target.value)}
            className="mr-2"
          />
          Brown
        </label>
        {/* More color options */}
      </div>
      <button  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
