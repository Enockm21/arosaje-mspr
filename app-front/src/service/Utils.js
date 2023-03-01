const checkToken = () => {
    return localStorage.getItem("arosaje-token") ? true : false;
  };
  
  const Utils = {
    checkToken,
  };
  
  export default Utils;