import ListProduct from "../components/ui/ListProduct";
import CreateButton from "../components/ui/CreateButton";
import DeleteButton from "../components/ui/DeleteButton";
import Modal from "../components/ui/Modal";
import { useState } from "react";

export default function Product() {
  const [products, setProducts] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="ml-56 flex min-h-screen bg-secondary-500 gap-5 flex-col">
      <div className="bg-white ml-4 mt-4 flex gap-4 flex-col">
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedId={selectedId}
          setProducts={setProducts}
        />
        <div className="ml-4 mt-4">
          <h1
            className="text-3xl font-bold text-primary-500"
            data-testid="product-title"
          >
            Product
          </h1>
        </div>
        <div className="ml-4 flex gap-2">
          <CreateButton />
          <DeleteButton />
        </div>
        <div className="ml-4 ">
          <ListProduct
            setIsOpen={setIsOpen}
            setSelectedId={setSelectedId}
            products={products}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
}
