import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import * as jose from "jose";

export const Header = async () => {
  let isLoggedIn = false;

  const jwtSecret = process.env.JWT_SECRET;
  const encodedJwtSecret = new TextEncoder().encode(jwtSecret);
  const token = cookies().get("token")?.value;

  try {
    await jose.jwtVerify(token, encodedJwtSecret);
    isLoggedIn = true;
  } catch (error) {
    console.log(error);
    isLoggedIn = false;
  }

  return (
    <header className="py-4 flex justify-between">
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="font-medium tracking-tight text-base">
            Digicommerce.
          </div>
        </Link>
        {/* <SearchBox /> */}
      </div>
      <div className="flex gap-6 items-center">
        <div>Products</div>
        <div>Best-selling</div>
        {isLoggedIn ? (
          <Link href="/dashboard">
            <button className="w-fit">Dashboard</button>
          </Link>
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/login">
              <div>Login</div>
            </Link>
            <Link href="/register">
              <button className="w-fit">Get Started</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
