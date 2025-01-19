import { useEffect, useState } from "react";

const UseUser = () => {
  const [User, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  return [User, loading];
};

export default UseUser;
