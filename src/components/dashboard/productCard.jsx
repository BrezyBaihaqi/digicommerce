import Image from "next/image";
import React from "react";

export const ProductCard = () => {
  return (
    <div className="space-y-4">
      <Image
        alt="Placeholder"
        src="https://fakeimg.pl/600x400"
        width={600}
        height={400}
        className="rounded-lg"
      />
      <h2>Product Title</h2>
      <div className="flex gap-2">
        <button className="btn-secondary btn-sm w-fit inline-block">
          View
        </button>
        <button className="btn-secondary btn-sm w-fit inline-block">
          Edit
        </button>
      </div>
    </div>
  );
};
