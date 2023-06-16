import React from "react";

const ProductList = () => {
  return (
    <div className="flex flex-row justify-between border-b-2 border-gray-300 p-4">
      <div className="w-1/6 h-200 border-2 border-gray-300 p-4">
        {/* Block content */}
      </div>
      <div className="w-1/6 h-200 border-2 border-gray-300 p-4">
        {/* Block content */}
      </div>
      <div className="w-1/6 h-200 border-2 border-gray-300 p-4">
        {/* Block content */}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-1/2 border-b-2 border-gray-300 p-4">
        <img
          src="https://media.douglas.de/medias/11S1D-73062-DE-Teaser-Rabatt-Platin-XL-2672x900-NNH.jpg?context=bWFzdGVyfGltYWdlc3wyNTY3NTB8aW1hZ2UvanBlZ3xoYzkvaDQ0LzMxODgzNTIwOTk5NDU0LzExUzFELTczMDYyX0RFX1RlYXNlcl9SYWJhdHRfUGxhdGluX1hMXzI2NzJ4OTAwX05OSC5qcGd8OWRiYWUyMGIwYmRmNTc1MjA3NzQ5MjRkZjdjMTYyOWVjNmViMmNjOGM3YmU4MzBkOTQ3OTZjMTllMmJlNDdjNg"
          alt="Teaser Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 p-4">
        <ProductList />
      </div>
      <div className="w-1/2 p-4">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
