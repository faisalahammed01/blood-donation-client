import Swal from "sweetalert2";
import UseUser from "../../Hooks/UseUser";
import axios from "axios";
//---------- make user admin-------------------
const AdminUsers = () => {
  const handleMakeAdmin = (user) => {
    axios
      .patch(
        `https://blood-donation-server-eta-eight.vercel.app/users/admin/${user._id}`
      )
      .then((res) => {
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
      .patch(
        `https://blood-donation-server-eta-eight.vercel.app/users/volunteer/${user._id}`
      )
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
  // -----------------Block and Unblock User----------------
  const handleStatusUp = (id, newStatus) => {
    if (!id) return;

    Swal.fire({
      title: `Are you sure you want to mark this as ${newStatus}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${newStatus}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://blood-donation-server-eta-eight.vercel.app/userStatus/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: newStatus }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Updated!",
                text: `The status has been changed to ${newStatus}`,
                icon: "success",
              });

              const updatedBlog = blogs.map((blog) =>
                blog._id === id ? { ...blog, status: newStatus } : blog
              );
              setBlogs(updatedBlog);
            }
          });
      }
    });
  };
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
                      {user?.status === "Active" && (
                        <li
                          onClick={() => handleStatusUp(user._id, "Blocked")}
                          className="hover:bg-red-950 hover:text-white"
                        >
                          <a>🔒 Block User</a>
                        </li>
                      )}
                      {user?.status === "Blocked" && (
                        <li
                          onClick={() => handleStatusUp(user._id, "Active")}
                          className="hover:bg-red-950 hover:text-white"
                        >
                          <a>🔓 Unblock User</a>
                        </li>
                      )}
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
