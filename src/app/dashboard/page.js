export default function Page() {
  return (
    <main className="grid grid-cols-3 gap-6">
      <div className="card card-bordered py-8 px-12 col-span-2 flex flex-col justify-center">
        <h1 className="text-6xl font-bold">0</h1>
        <h1 className="tracking-tight">Total Products</h1>
      </div>
      <div className="space-y-4">
        <div className="card card-bordered p-8">
          <h1>0</h1>
          <p>Total Orders</p>
        </div>
        <div className="card card-bordered p-8">
          <h1>$0</h1>
          <p>Income</p>
        </div>
      </div>
    </main>
  );
}
