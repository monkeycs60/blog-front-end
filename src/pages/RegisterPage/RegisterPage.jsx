import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
    await fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
      }),
    });
    alert("Registration successful! You can now log in.");
  } catch (error) {
    alert(`Registration failed! Erreur = ${error}}`);
  }
  }

  return (
    <div className="my-8 flex flex-col gap-12 p-4">
      <h1 className="flex justify-center text-2xl font-extrabold uppercase tracking-widest">
        Register
      </h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email">Email</label>
        <input
          className="rounded-lg border-2 border-gray-300 bg-green-400 p-2"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
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
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          className="rounded-lg border-2 border-gray-300 bg-green-400 p-2"
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <br />
        <button
          type="submit"
          className="mt-4 rounded-lg bg-orange-300 px-12 py-2"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
