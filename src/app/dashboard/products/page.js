import { ProductCard } from "@/components/dashboard/productCard";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-8">
      <section className="flex justify-between items-center">
        <div>
          <h1>All Products</h1>
          <p>Here is all of your products</p>
        </div>
        <Link href="/dashboard/products/new">
          <button className="w-fit">Create Product</button>
        </Link>
      </section>
      <section className="grid grid-cols-2 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
