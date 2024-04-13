import React, { useState, useEffect } from "react";

const Router = ({ routes }) => {
  const [currentRoute, setCurrentRoute] = useState(getCurrentRoute());

  useEffect(() => {
    const handlePopState = () => setCurrentRoute(getCurrentRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function getCurrentRoute() {
    return window.location.pathname;
  }

  return routes[currentRoute] ? routes[currentRoute] : <NotFound />;
};

export default Router;
