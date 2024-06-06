import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";

const useHTTP = () => {
  const token =
    Cookies.get("token") || useSelector((state) => state.session.token);
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const configMultiForm = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const getRequest = async (url) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        config
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (value) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/user/login`,
        value
      );
      Cookies.set("token", result.data.data);
      return result.data.data
    } catch (error) {
      console.error(error);
    }
  };

  const postRequest = async (url, value) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        value,
        config
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateRequest = (url, value) => {
    try {
      const res = axios.put(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        value,
        config
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRequest = async (url) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        config
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const uploadImage = async (url, value) => {
    try {
      const formData = new FormData();
      formData.append("image", value);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        formData,
        configMultiForm
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    getRequest,
    postRequest,
    updateRequest,
    deleteRequest,
    login,
    uploadImage,
  };
};

export default useHTTP;
