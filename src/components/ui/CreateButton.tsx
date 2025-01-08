import { useNavigate } from "react-router";

const CreateButton = () => {
  const navigate = useNavigate() ?? (() => {});

  const handleCreate = () => {
    try {
      navigate("/products/create");
    } catch (error) {
      console.error("Error while navigating to /create", error);
    }
  };

  return (
    <button
      className="w-32 h-10 bg-primary-500 text-white rounded-md"
      onClick={handleCreate}
      data-testid="add-product-button"
    >
      Create
    </button>
  );
};

export default CreateButton;
