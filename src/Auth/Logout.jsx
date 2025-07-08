import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout(prop) {
  const navigate = useNavigate();
  useEffect(() => {
    sessionStorage.clear();
    prop.setAuth(false)
    navigate("/");
  }, []);

  return null;
}

export default Logout;
