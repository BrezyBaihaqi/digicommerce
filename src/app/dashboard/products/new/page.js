"use client";

export default function Page() {
  async function handleSubmitProduct(formData) {
    const user = JSON.parse(localStorage.getItem("user"));
    const authorId = user.id;

    formData.append("authorId", authorId);

    const res = await fetch("/api/v1/products", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    // console.log(data);
  }

  return (
    <main className="space-y-8">
      <section className="flex justify-between items-center">
        <div>
          <h1>Create Product</h1>
          <p>Fill your product details</p>
        </div>
      </section>
      <form action={handleSubmitProduct}>
        <section className="space-y-3">
          <section className="grid grid-cols-2 gap-4">
            <div>
              <label>Product name</label>
              <input name="name" placeholder="Product name" />
            </div>
            <div className="flex flex-col">
              <label>Product category</label>
              <select name="category" className="border rounded-md h-full">
                <option value="ILLUSTRATION">Illustration</option>
                <option value="FONTS">Fonts</option>
                <option value="UIKIT">UI kit</option>
                <option value="TEMPLATE">Template</option>
                <option value="MOCKUPS">Mockups</option>
              </select>
            </div>
          </section>
          <div className="flex flex-col">
            <label>Product description</label>
            <textarea
              name="description"
              placeholder="Product description"
              rows={6}
              className="border rounded-md"
            ></textarea>
          </div>
          <div>
            <label>Price</label>
            <input name="price" placeholder="0" type="number" />
          </div>
          <div>
            <label>Featured Image</label>
            <input
              name="featuredImage"
              type="file"
              className="file-input file-input-bordered"
            />
          </div>
          <div>
            <label>Product Images</label>
            <input
              name="productImages"
              type="file"
              multiple
              className="file-input file-input-bordered"
            />
          </div>
          <button>Submit Product</button>
        </section>
      </form>
    </main>
  );
}
