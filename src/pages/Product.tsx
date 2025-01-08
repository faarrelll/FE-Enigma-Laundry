import ListProduct from "../components/ui/ListProduct"
import CreateButton from "../components/ui/CreateButton"

export default function Product() {
  return (
    <div className="ml-56 flex min-h-screen bg-secondary-500 gap-5 flex-col">
      <div className="bg-white ml-4 mt-4 flex gap-4 flex-col">
        <div className="ml-4 mt-4">
          <h1 className="text-3xl font-bold text-primary-500">Product</h1>
        </div>
        <div className="ml-4">
          <CreateButton />
        </div>
        <div className="ml-4 ">
          <ListProduct />
        </div>
      </div>
    </div>
  )
}
