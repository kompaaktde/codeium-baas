import React from "react";
/**
 * Renders a component that allows editing and saving content.
 *
 * @return {JSX.Element} The JSX representation of the component.
 */
const ProductEditor = () => {
  const [content, setContent] = React.useState("");
  const [isEditing, setIsEditing] = React.useState(false);
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSaveClick = () => {
    // Save the content
    localStorage.setItem("content", content);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    // Switch between edit and view mode
    setIsEditing(!isEditing);
  };

  React.useEffect(() => {
    const savedContent = localStorage.getItem("content");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  return (
    <div className=" border-b-2 border-gray-300 p-4">
      <div className="w-full h-200 border-2 border-gray-300 p-4">
        {isEditing ? (
          <textarea
            value={content}
            onChange={handleContentChange}
            className="w-full h-full outline-none"
          />
        ) : (
          <div>{content}</div>
        )}
      </div>
      <div className="flex flex-col justify-between pt-10">
        {isEditing ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
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
        <ProductEditor />
      </div>
    </div>
  );
}

export default App;
