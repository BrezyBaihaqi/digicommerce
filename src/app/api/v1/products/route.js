import prisma from "@/utils/prisma";
import { NextResponse } from "next/server";
import slugify from "slugify";

export async function POST(req) {
  const formData = await req.formData();

  const name = formData.get("name");
  const description = formData.get("description");
  const category = formData.get("category");

  const price = formData.get("price");
  const featuredImage = formData.get("featureImage");
  const productImages = formData.getAll("productImages");
  const authorId = formData.get("authorId");

  const slug = slugify(name, { lower: true });
  const images = productImages.map((file) =>
    slugify(file.name, { lower: true })
  );

  try {
    const createProduct = await prisma.product.create({
      data: {
        name,
        slug,
        description,
        featuredImage: slugify(featuredImage.name, { lower: true }),
        price: Number(price),
        category,
        images: JSON.stringify(images),
        authorId,
      },
    });
    console.log(createProduct);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({});
}
