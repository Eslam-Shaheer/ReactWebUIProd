import React, { useEffect, useState } from "react";
import axiosInstance from "../axiosConfig/axiosInstance";
import { useParams } from "react-router-dom";

const useFetch = (endpoint, dependancies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(endpoint);
      setData(response.data);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, dependancies);

  return { data, isError, isLoading };
};

export default useFetch;
