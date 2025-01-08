import { toast } from "react-toastify";

interface ToastUtilsProps {
  message: string;
  type: "success" | "error"; // Menentukan tipe notifikasi
}

export const ToastUtils = ({
  message,
  type,
}: ToastUtilsProps): (() => void) => {
  const notify = () => {
    if (type === "success") {
      toast.success(message);
    } else if (type === "error") {
      toast.error(message);
    }
  };
  return notify;
};
