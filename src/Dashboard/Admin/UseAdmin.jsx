import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Share/useAxiosSecure";

const UseAdmin = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res?.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
