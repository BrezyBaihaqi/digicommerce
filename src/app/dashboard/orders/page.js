import { ProductCard } from "@/components/dashboard/productCard";
import Image from "next/image";

export default function Page() {
  return (
    <main className="space-y-8">
      <section className="flex justify-between items-center">
        <div>
          <h1>All Orders</h1>
          <p>Here is all of your orders and Income</p>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-3 border border-b-0 bg-slate-100 divide-x">
          <div className="p-4">Product Name</div>
          <div className="p-4 text-right">Order date</div>
          <div className="p-4 text-right">Income</div>
        </div>
        <div className="grid grid-cols-3 border divide-x">
          <div className="p-4">Product 1</div>
          <div className="p-4 text-right">Feb 2nd, 2022</div>
          <div className="p-4 text-right">IDR 190000</div>
        </div>
      </section>
    </main>
  );
}
