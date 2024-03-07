import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    // find user
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // jika user belum ditemukan, kirim pesan error
    if (!findUser) {
      return NextResponse.json(
        {
          errorMessage: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    // Bandingkan password yang diinput dengan password di database
    const comparePassword = await bcrypt.compare(password, findUser.password);

    if (!comparePassword) {
      return NextResponse.json(
        {
          errorMessage: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    // jika password cocok,kirim data user
    const payload = {
      id: findUser.id,
      firstName: findUser.firstName,
      lastName: findUser.lastName,
      username: findUser.username,
      email: findUser.email,
    };

    const token = sign(payload, process.env.JWT_SECRET, { expiresIn: "30d" });
    const res = NextResponse.json(
      {
        data: payload,
        message: "login successfully",
      },
      { status: 200 }
    );
    res.cookies.set("token", token);

    return res;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        errorMessage: "Something went wrong, please try again later",
      },
      {
        status: 500,
      }
    );
  }
}
