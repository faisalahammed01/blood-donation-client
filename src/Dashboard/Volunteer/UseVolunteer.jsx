import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Share/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
const UseVolunteer = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
    queryKey: [user?.email, "volunteer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/volunteer/${user.email}`);
      console.log(res.data);
      return res?.data.volunteer;
    },
  });
  return [isVolunteer, isVolunteerLoading];
};

export default UseVolunteer;
