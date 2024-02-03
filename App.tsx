import React from "react";
import withFontLoad from "@components/HOC/withFontLoad";
import Router from "@/routes/Router";

const App: React.FC = () => {
  return <Router />;
};

export default withFontLoad(App);
