import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Customer from "../../interface/customer.interface";
import { CustomerApi } from "../../api/CustomerApi";
import Button from "../../components/ui/Button";
import { toast, ToastContainer } from "react-toastify";

type Params = {
  id: string;
};

export default function DetailCustomer() {
  const navigate = useNavigate();
  const params = useParams<Params>();
  const [data, setData] = useState<Customer>();

  useEffect(() => {
    (async () => {
      const response = await CustomerApi.getById(params.id || "");
      if (response) {
        setData(response);
      }
    })();
  }, [params]);

  const handleDelete = async (id: string) => {
    try {
      const response = await CustomerApi.delete(id);

      if (response) {
        toast.success("Success delete Customer", {
          onClose: () => {
            clearTimeout(show);
            navigate("/customers");
          },
          hideProgressBar: true,
        });
        const show = setTimeout(() => {
          navigate("/customers");
        }, 1000);
      } else {
        toast.error("Failed delete Customer", {
          onClose: () => {
            clearTimeout(show);
            navigate("/customers");
          },
          hideProgressBar: true,
        });
        const show = setTimeout(() => {
          navigate("/customers");
        }, 1000);
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex w-full h-[80vh] justify-center items-center flex-col">
      <h1 className="text-3xl text-secondary-800 font-bold mb-8">
        Detail Customer
      </h1>

      <div className="bg-white rounded-lg p-5 w-1/2 flex-wrap overflow-auto">
        <table className="table-auto">
          <tbody>
            <tr className="text-left text-xl">
              <th className="align-top w-[160px]">Name</th>
              <td className="px-2 align-top">:</td>
              <td className="align-top">{data?.name}</td>
            </tr>
            <tr className="text-left text-xl">
              <th className="align-top">Phone Number</th>
              <td className="px-2 align-top">:</td>
              <td className="align-top">{data?.phoneNumber}</td>
            </tr>
            <tr className="text-left text-xl">
              <th className="align-top">Address</th>
              <td className="px-2 align-top">:</td>
              <td className="text-wrap align-top break-words whitespace-normal">
                {data?.address}
              </td>
            </tr>
          </tbody>
        </table>

        <hr className="mt-5" />

        <div className="flex gap-2 mt-3 justify-end">
          <Button
            dataTest="cancel-delete-button"
            className="swal2-cancel"
            variant="secondary"
            onClick={() => navigate("/customers")}
          >
            Back
          </Button>
          <Button
            dataTest="confirm-delete-button"
            variant="danger"
            onClick={() => handleDelete(params.id || "")}
            className="swal2-confirm"
          >
            Delete
          </Button>
        </div>
      </div>
      <ToastContainer closeOnClick />
    </div>
  );
}
