import { AxiosResponse } from "axios";

export const successResponse = (response: AxiosResponse<any>) => {
  console.log("TODO OKEY: ", response);
  if (response.config.method !== "get") alert("succes !=get");
  return response;
};

export const failedResponse = (error: any) => {
  alert("Error");
  console.log("#ERROR IN RESPINSE:", error);
  throw error;
};
