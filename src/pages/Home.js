import React from "react";
import Header from "../components/Header";
import Uploader from "../components/Uploader";
import AnalysisResults from "../components/AnalysisResults";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-700">
      <Header />
      <Uploader />
      {/* <AnalysisResults /> */}
    </div>
  );
}
