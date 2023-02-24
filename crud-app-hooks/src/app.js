import { useState } from "react";

function Crud() {
  const [users, setUsers] = useState([]);

  return (
    <section className="mx-auto w-2/4">
      <div className="">
        <form
          className="w-1/4 mx-auto"
          onSubmit={(event) => {
            event.preventDefault();
            let name = document.getElementById("name");
            let username = document.getElementById("username");
            setUsers([
              ...users,
              { name: name.value, username: username.value },
            ]);
            name.value = "";
            username.value = "";
          }}
        >
          <h1 className="text-3xl center m-4">Add user</h1>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full m-2 px-2 py-1 rounded-md border-2 border-blue-800"
            placeholder="enter name"
          ></input>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full m-2 px-2 py-1 rounded-md border-2 border-blue-800"
            placeholder="enter username"
          ></input>
          <button
            className="w-full m-2 px-2 capitalize bg-blue-200 py-1 rounded-md border-2 border-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-center text-red-600 m-4 text-2xl">List of Users</h2>
        <ul>
          {users.map((user, i) => {
            return (
              <li className="flex relative justify-between m-2 border-2 border-blue-800 rounded-md px-2 py-0.5">
                <address className="text-xl capitalize">{user.name}</address>
                <address className="text-lg capitalize">
                  {user.username}
                </address>
                <span className="text-base cursor-pointer text-blue-700">
                  edit
                </span>
                <span
                  onClick={() => {
                    setUsers(users.filter((user, index) => i !== index));
                  }}
                  className="text-base cursor-pointer text-red-700"
                >
                  delete
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Crud;
