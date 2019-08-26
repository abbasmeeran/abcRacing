import React from "react";
import "./Spinner.css";
import { useTranslation } from "react-i18next";

const Spinner = (props) => {
  const { t } = useTranslation();
  return <div className="loader">{t('Loading...')}</div>;
};

export default Spinner;
