import Swal from "sweetalert2";
import UseUser from "../../Hooks/UseUser";
import axios from "axios";
//---------- make user admin-------------------
const AdminUsers = () => {
  const handleMakeAdmin = (user) => {
    axios.patch(`http://localhost:5000/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  // ---------------make user volunteer----------------
  const handleMakeVolunteer = (user) => {
    axios
      .patch(`http://localhost:5000/users/volunteer/${user._id}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an volunteer Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const [users, loading, refetch] = UseUser();

  if (loading) {
    return <h2 className="loading-spinner"></h2>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user) => (
              <tr key={user._id}>
                <td key={user._id}>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user?.photoURL} alt="Avatar " />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.email}</td>
                <td>{user?.name}</td>
                <td>{user?.role}</td>
                <td>{user?.status}</td>
                <td>
                  <div className="dropdown dropdown-left dropdown-content">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn bg-red-800 text-white m-1"
                    >
                      ⚙️ Manage User
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li className="hover:bg-red-950 hover:text-white">
                        <a onClick={() => handleMakeVolunteer(user)}>
                          🏅 Make Volunteer
                        </a>
                      </li>
                      <li className="hover:bg-red-950 hover:text-white">
                        <a onClick={() => handleMakeAdmin(user)}>
                          🏆 Make Admin
                        </a>
                      </li>
                      <li className="hover:bg-red-950 hover:text-white">
                        <a>🔒 Block User</a>
                      </li>
                      <li className="hover:bg-red-950 hover:text-white">
                        <a>🔓 Unblock User</a>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
