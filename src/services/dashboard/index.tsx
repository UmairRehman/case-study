import Api from "../../network/axiosClient";
import { AxiosResponse } from "axios";

export const getAllPayments = async (): Promise<AxiosResponse> => {
  return Api.get(`/payments`);
};
