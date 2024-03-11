import React from "react";
import { Header } from "./Header";
import Image from "next/image";
import { EyeIcon, EyeOff } from "lucide-react";
import { HomeProductCard } from "./ProductCard";

export const Home = () => {
  return (
    <div className="max-w-7xl m-auto space-y-6">
      <Header />
      <section className="h-[320px] flex flex-col justify-center text-center ">
        <div className="space-y-4">
          <h1 className="max-w-3xl m-auto text-5xl font-medium tracking-tight">
            8,754 curated design resources to speed up your creative workflow.
          </h1>
          <h3>
            Join a growing family of 746,594 designers and makers from around
            the world.
          </h3>
        </div>
      </section>
      <section className="grid grid-cols-3 gap-10">
        <HomeProductCard />
        <HomeProductCard />
        <HomeProductCard />
        <HomeProductCard />
        <HomeProductCard />
        <HomeProductCard />
      </section>
    </div>
  );
};
