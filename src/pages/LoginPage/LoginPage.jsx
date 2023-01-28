import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Form submitted!");
  };

  return (
    <div className="my-8 flex flex-col gap-12 p-4">
      <h1 className="flex justify-center text-2xl font-extrabold uppercase tracking-widest">
        Login
      </h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Username</label>
        <input
          className="rounded-lg border-2 border-gray-300 bg-green-400 p-2"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          className="rounded-lg border-2 border-gray-300 bg-green-400 p-2"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button
          type="submit"
          className="mt-4 rounded-lg bg-orange-300 px-12 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
