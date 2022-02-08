import axios, { AxiosRequestConfig } from "axios";
import { failedResponse, successResponse } from "./response";
const domain = "https://rp-back.herokuapp.com/api/";
const getToken = async () => {
  let localData: any = sessionStorage.getItem("user");
  const user = JSON.parse(localData);
  const Token = user?.access_Token;
  return Token;
};
export const axiosChallenge = axios.create({
  baseURL: `${domain}`,
  headers: {
    "content-type": "application/json",
  },
  timeout: 3000, //timeout 3 seconds
});
axiosChallenge.interceptors.request.use(async (req: any) => {
  let Token = await getToken();
  req.headers.Authorization = `Bearer ${Token}`;
  return req;
});
axiosChallenge.interceptors.response.use(
  (response) => successResponse(response),
  (error) => failedResponse(error)
);
