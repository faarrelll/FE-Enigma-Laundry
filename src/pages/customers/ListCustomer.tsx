import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { useEffect, useState } from "react";
import { CustomerApi } from "../../api/CustomerApi";
import Customer from "../../interface/customer.interface";

export default function ListCustomer() {
    const navigate = useNavigate()
    const [data, setData] = useState<Customer[]>([])

  const handleClickDetails = (id: string) => {
    navigate(`${id}/detail`)
  }

  const handhandleClickEdit = (id: string) => {
    navigate(`${id}/edit`)
  }

  useEffect(() => {
    (async () => {
        const response = await CustomerApi.getAll()
        if(response) {
            setData(response)
        }
    })()
  }, [])

  return (
    <div className="container mx-auto w-full overflow-hidden">
        <div className="p-1 pe-5 flex justify-end w-full">
            <Button onClick={() => navigate('create')} variant="secondary">Create Customer</Button>
        </div>
      <div className="p-2">
        <table className="table-auto w-full bg-white">
          <thead>
            <tr className="bg-primary-500 text-white">
              <th className="border border-white p-2">No</th>
              <th className="border border-white">Name</th>
              <th className="border border-white">Phone Number</th>
              <th className="border border-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? data.map((item, index) => (
                <tr key={item.id} className="border-b border-slate-200 hover:bg-primary-100/20">
                    <td className="p-2 text-center">{ index+1 }</td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">{item.phoneNumber}</td>
                    <td className="p-2 flex justify-center items-center gap-2">
                        <Button onClick={() => handleClickDetails(item.id || '')}>Details</Button> |
                        <Button onClick={() => handhandleClickEdit(item.id || '')} variant="secondary">Edit</Button>
                    </td>
                </tr>
            )) : <p className="absolute left-1/2 m-3">Data Customer is Empty</p>}
          </tbody>
        </table>
      </div>
    </div>
  );
}