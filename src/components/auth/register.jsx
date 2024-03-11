"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    const { firstName, lastName, username, email, password } = registerData;

    if (!firstName || !lastName || !username || !email || !password) {
      console.log("all fields must be filed");
      return;
    }

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(registerData),
    });

    if (res.status === 500) {
      const { errorMessage } = await res.json();
      console.log(errorMessage);
      toast.error(errorMessage);
      return;
    }

    const { data, message } = await res.json();
    toast.success(message);

    console.log(data);
  }

  return (
    <main className="space-y-4">
      <div className="text-center">
        <h1>Register</h1>
        <p>Create an account for digicommerce</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          name="firstName"
          placeholder="First name"
          onChange={handleChangeInput}
        />
        <input
          name="lastName"
          placeholder="Last name"
          onChange={handleChangeInput}
        />
      </div>
      <input
        name="username"
        placeholder="username"
        onChange={handleChangeInput}
      />
      <input
        name="email"
        type="email"
        placeholder="email@domain.com"
        onChange={handleChangeInput}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        onChange={handleChangeInput}
      />
      <button onClick={handleRegister}>Register</button>
    </main>
  );
};
