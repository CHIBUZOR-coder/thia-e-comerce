// src/itemsData.js
import React, { useContext } from "react";
import { DataContext } from "../../../Components/DataContext";

export const AnkaraItems = () => {
  const [AnkaraProducts ] = useContext(DataContext);
  return AnkaraProducts;
};

export const AshebiItems = () => {
  const [AshebiProducts ] = useContext(DataContext);
  return AshebiProducts;
};

export const CoperateItems = () => {
  const [ BridalItems ] = useContext(DataContext);
  return BridalItems;
};

export const BridalItems = () => {
  const [ CoperateProducts ] = useContext(DataContext);
  return CoperateProducts;
};

export const KaftanItems = () => {
  const [CoperateProducts ] = useContext(DataContext);
  return CoperateProducts;
};

export const KidiesProducts = () => {
  const [ KidiesProducts ] = useContext(DataContext);
  return KidiesProducts;
};

export const MatchinProducts = () => {
  const [ MatchinProducts ] = useContext(DataContext);
  return MatchinProducts;
};
