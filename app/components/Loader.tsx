"use client"
import React, { useState, useEffect } from "react";
import { BarLoader } from 'react-spinners';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsLoading(false);
        observer.disconnect();
      }
    }, {
      threshold: 0,
    });
    observer.observe(document.body);
  }, []);

  return isLoading ? (
    <div className="flex justify-center items-center h-screen">
      <BarLoader color="#4A60A1" />
    </div>
  ) : null;
};

export default Loader;
