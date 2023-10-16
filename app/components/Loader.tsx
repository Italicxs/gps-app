import React from "react";
import { BarLoader } from 'react-spinners'

const Loader = () => {
  return (
  <div className="flex justify-center items-center h-screen">
  <BarLoader color="#4A60A1" />    
</div>
  );
};

export default Loader;  