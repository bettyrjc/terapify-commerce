import { toast } from "react-toastify";
import { BASE_PATH } from "./api";

export async function get() {
  try {
    const url = `${BASE_PATH}/products`;
    const params = {
      method: "GET",
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    toast.error("😞 Excuse me, an error has occurred, please try again later!");
    return null;
  }
}