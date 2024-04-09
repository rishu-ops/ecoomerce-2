import React, { useState, useEffect } from 'react';
import { useNavigate , useLocation } from 'react-router-dom';

const Spinner = ({path = "login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    // Check if count is 0 inside the setInterval callback
    if (count === 0) {
      clearInterval(interval);
      navigate(`/${path}` , {
           state  : location.pathname ,
});
    }

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [count, navigate , path]);

  return (
    <>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="Text-center">redirecting to you in {count} second </h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </>
  
  );
};

export default Spinner;
