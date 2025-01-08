import { deleteProduct } from "../../api/ProductApi";

export default function Modal({
  isOpen = false,
  setIsOpen,
  selectedId,
  setProducts,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedId: string | null;
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const handleDelete = async (productId: string) => {
    try {
      await deleteProduct(productId);
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      setIsOpen(false);
    } catch (error) {
      console.log("Error while deleting product", error);
    }
  };

  return (
    <div
      className={`${isOpen ? "" : "hidden"} absolute top-1/2 left-1/2 z-50 `}
    >
      {/* Confirmation Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8 relative swal2-popup">
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            ✕
          </button>
          <h1 className="text-2xl font-bold text-primary-500 mb-6 text-center">
            Confirmation
          </h1>
          <p className="text-lg text-gray-600">
            Are you sure you want to delete this product?
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handleDelete(selectedId as string)}
              className="h-10 flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 transition-colors text-2xl px-2 rounded swal2-confirm"
              data-testid="confirm-delete-button"
            >
              Yes
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="h-10 flex items-center justify-center bg-primary-500 text-white hover:bg-primary-600 transition-colors text-2xl px-2 rounded swal2-cancel"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
