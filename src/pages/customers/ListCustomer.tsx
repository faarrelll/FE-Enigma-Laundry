import { ReactNode } from "react";

interface Variants {
  [key: string]: string;
}

// component button
const Button = ({children, variant = 'primary', onClick}: {children: ReactNode, variant?: string,onClick: () => void}) => {
  
  const variants: Variants = {
    primary: 'bg-primary-500 text-white p-1 px-3 rounded-md hover:bg-primary-400 m-0',
    secondary: 'bg-secondary-700 text-white p-1 px-3 rounded-md hover:bg-secondary-600 m-0'
  }

  return (
    <button className={`${variants[variant]}`} onClick={onClick}>{children}</button>
  )
}

export default function ListCustomer() {

  const handleClickDetails = (data: string) => {
    alert(data)
  }

  const handhandleClickEdit = () => {

  }

  return (
    <div className="container mx-auto w-full">
      <div className="p-2">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-primary-500 text-white">
              <th className="border border-white p-2">No</th>
              <th className="border border-white">Name</th>
              <th className="border border-white">Phone Number</th>
              <th className="border border-white">Address</th>
              <th className="border border-white">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-200 hover:bg-primary-100/20">
              <td className="p-2 text-center">1</td>
              <td className="p-2">Yanto Subidi</td>
              <td className="p-2">828292992</td>
              <td className="p-2">Jakarta Selatan</td>
              <td className="p-2 flex justify-center items-center gap-2">
                <Button onClick={() => handleClickDetails('oke')}>Details</Button> |
                <Button onClick={handhandleClickEdit} variant="secondary">Edit</Button>
              </td>
            </tr>
            <tr className="border-b border-slate-200 hover:bg-primary-100/20">
              <td className="p-2 text-center">2</td>
              <td className="p-2">Yanto Subidi</td>
              <td className="p-2">828292992</td>
              <td className="p-2">Jakarta Selatan</td>
              <td className="p-2 flex justify-center items-center gap-2">
                <Button onClick={() => handleClickDetails('oke')}>Details</Button> |
                <Button onClick={handhandleClickEdit} variant="secondary">Edit</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}