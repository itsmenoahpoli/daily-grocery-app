import React from "react";

export const useFetch = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  const fetchData = async () => {
    //
  };

  React.useEffect(() => {}, []);

  return {
    isError: error,
    isLoading: loading,
  };
};
