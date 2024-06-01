import { useState, useEffect } from "react";
import useFetch from "../Usefetch"; // Adjust the path as needed

const useData = () => {
  const [ashoebiItems, setAshoebiItems] = useState([]);
  const [Ankara, setAnkara] = useState([]);
  const [bridalsItems, setBridalsItems] = useState([]);
  const [coperateItems, setCoperateItems] = useState([]);
  const [kaftanItems, setKaftanItems] = useState([]);
  const [kidesItems, setKidesItems] = useState([]);
  const [matchingItems, setMatchingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    data: ashoebiData,
    isLoading: ashoebiLoading,
    error: ashoebiError,
  } = useFetch("http://localhost:8000/Ashoebi");
  const {
    data: ankaraData,
    isLoading: ankaraLoading,
    error: ankaraError,
  } = useFetch("http://localhost:8000/Ankara");
  const {
    data: bridalsData,
    isLoading: bridalsLoading,
    error: bridalsError,
  } = useFetch("http://localhost:8000/Bridals");
  const {
    data: coperateData,
    isLoading: coperateLoading,
    error: coperateError,
  } = useFetch("http://localhost:8000/Coperate");
  const {
    data: kaftanData,
    isLoading: kaftanLoading,
    error: kaftanError,
  } = useFetch("http://localhost:8000/Kaftan");
  const {
    data: kidesData,
    isLoading: kidesLoading,
    error: kidesError,
  } = useFetch("http://localhost:8000/Kides");
  const {
    data: matchingData,
    isLoading: matchingLoading,
    error: matchingError,
  } = useFetch("http://localhost:8000/Matching");

  useEffect(() => {
    if (!ashoebiLoading) setAshoebiItems(ashoebiData);
    if (ashoebiError) setError(ashoebiError);
  }, [ashoebiData, ashoebiLoading, ashoebiError]);

  useEffect(() => {
    if (!ankaraLoading) setAnkara(ankaraData);
    if (ankaraError) setError(ankaraError);
  }, [ankaraData, ankaraLoading, ankaraError]);

  useEffect(() => {
    if (!bridalsLoading) setBridalsItems(bridalsData);
    if (bridalsError) setError(bridalsError);
  }, [bridalsData, bridalsLoading, bridalsError]);

  useEffect(() => {
    if (!coperateLoading) setCoperateItems(coperateData);
    if (coperateError) setError(coperateError);
  }, [coperateData, coperateLoading, coperateError]);

  useEffect(() => {
    if (!kaftanLoading) setKaftanItems(kaftanData);
    if (kaftanError) setError(kaftanError);
  }, [kaftanData, kaftanLoading, kaftanError]);

  useEffect(() => {
    if (!kidesLoading) setKidesItems(kidesData);
    if (kidesError) setError(kidesError);
  }, [kidesData, kidesLoading, kidesError]);

  useEffect(() => {
    if (!matchingLoading) setMatchingItems(matchingData);
    if (matchingError) setError(matchingError);
  }, [matchingData, matchingLoading, matchingError]);

  useEffect(() => {
    const loadingStates = [
      ashoebiLoading,
      ankaraLoading,
      bridalsLoading,
      coperateLoading,
      kaftanLoading,
      kidesLoading,
      matchingLoading,
    ];
    setIsLoading(loadingStates.some((loading) => loading));
  }, [
    ashoebiLoading,
    ankaraLoading,
    bridalsLoading,
    coperateLoading,
    kaftanLoading,
    kidesLoading,
    matchingLoading,
  ]);

  return {
    ashoebiItems,
    Ankara,
    bridalsItems,
    coperateItems,
    kaftanItems,
    kidesItems,
    matchingItems,
    isLoading,
    error,
  };
};

export default useData;
