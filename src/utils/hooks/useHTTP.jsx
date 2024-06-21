import axios from "axios";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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

  const handleError = (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          toast.error("Unauthorized access. Please login again.");
          break;
        case 404:
          toast.error("Resource not found.");
          break;
        case 500:
          toast.error("Internal server error. Please try again later.");
          break;
        default:
          toast.error(`An error occurred: ${error.response.statusText}`);
          break;
      }
    } else if (error.request) {
      toast.error("No response received from the server.");
    } else {
      toast.error(`Request error: ${error.message}`);
    }
  };

  const getRequest = async (url) => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        config
      );
      return res.data;
    } catch (error) {
      handleError(error);
    }
  };

  const login = async (value) => {
    try {
      const result = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/user/login`,
        value
      );
      Cookies.set("token", result.data.data);
      return result.data.data;
    } catch (error) {
      handleError(error);
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
      handleError(error);
    }
  };

  const updateRequest = async (url, value) => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        value,
        config
      );
      return res.data;
    } catch (error) {
      handleError(error);
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
      handleError(error);
    }
  };

  const uploadImage = async (url, value) => {
    try {
      const formData = new FormData();
      formData.append("file", value);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}${url}`,
        formData,
        configMultiForm
      );
      return res.data;
    } catch (error) {
      handleError(error);
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
