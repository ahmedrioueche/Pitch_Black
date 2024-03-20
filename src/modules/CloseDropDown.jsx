import { React, useEffect, ref } from 'react';


function CloseDropDown(ref, callback) {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      console.log("CloseDropDown")
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);

}

export default CloseDropDown