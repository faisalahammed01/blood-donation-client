import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Share/useAxiosSecure";

const UseUser = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return [users, loading, refetch];
};

export default UseUser;
