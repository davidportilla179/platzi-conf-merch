import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const [error, setError] = useState(null);

  useEffect(async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        );
        setMap(response.data.results[0].geometry.location);
      } catch (err) {
        setError(err);
      }
  }, [address]);

  return {map, error};
};

export default useGoogleAddress;
