import Axios from "axios";
import { apiUrl } from "./Constants";

export const addItem = item => Axios.post(apiUrl, item);

export const getItems = () => Axios.get(apiUrl);
