import { EyeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export const HomeProductCard = () => {
  return (
    <div className="space-y-3">
      <div className="relative flex justify-center items-center group">
        <div className="absolute top-0 right-0 group:hover:opacity-100 opacity-0 transition duration-200">
          <EyeIcon size={26} />
        </div>
        <Image
          alt="Placeholder"
          src="https://fakeimg.pl/600x400"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center">
        <h3>Product Title</h3>
        <h3>$ 20</h3>
      </div>
    </div>
  );
};
