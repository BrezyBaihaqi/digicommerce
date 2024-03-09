"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function handleChangeInput(event) {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    const { email, password } = loginData;

    if (!email || !password) {
      console.log("all fields must be filed");
      return;
    }

    const res = await fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
    });

    if (res.status === 401 || res.status === 404) {
      const { errorMessage } = await res.json();
      console.log(errorMessage);
      toast.error(errorMessage);
      return;
    }

    const { data, message } = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
    toast.success(message);
    router.push("/");
    console.log(data);
  }

  return (
    <main className="space-y-4">
      <div className="text-center">
        <h1>Login</h1>
        <p>Welcome back!</p>
      </div>

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
      <button onClick={handleLogin}>Login</button>
    </main>
  );
};
