import React from 'react';
import { store } from "../reducer/store";
import { useNavigate } from "react-router-dom";

const Logout = props => {
    const { dispatch, state } = React.useContext(store);
    const navigate = useNavigate();

    React.useEffect(()=>{
        localStorage.removeItem('arosaje-token');
        dispatch({ type: "SET_AUTH", payload: false });
        navigate("/sign-in");
    },[])
    return (
        <>
          Logout  
        </>
    );
};
export default Logout;