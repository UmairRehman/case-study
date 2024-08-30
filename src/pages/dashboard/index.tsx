import { columns } from "./columns";
import { DataTable } from "../../components/shared/table";
import { IPayment } from "./types.interface";
import { useEffect, useState } from "react";
import { getAllPayments } from "../../services/dashboard";
import {
  AddPayment,
  getPaymentFromStore,
} from "../../redux/features/dashboard";
import { useAppDispatch, useAppSelector } from "../../shared/hooks";

export default function PaymentsPage() {
  const dispatch = useAppDispatch();
  const paymentFromStore = useAppSelector(getPaymentFromStore) || {};
  const [payments, setPayments] = useState<IPayment[]>([]);

  const getPayments = async () => {
    try {
      const { data: res } = await getAllPayments();
      if (res.success) {
        const { data } = res;
        setPayments(data)
        dispatch(AddPayment(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPayments();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <DataTable columns={columns} data={payments} />
    </div>
  );
}
