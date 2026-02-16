'use client';

import Image from 'next/image';

type Product = { id: string; name: string; price: number; image: string };

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-xl border bg-white p-4 shadow-sm">
      <Image src={product.image} alt={product.name} width={300} height={300} className="h-48 w-full rounded object-cover" />
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-slate-600">${product.price.toFixed(2)}</p>
      <button className="mt-3 rounded bg-indigo-600 px-3 py-2 text-sm text-white">Add to cart</button>
    </article>
  );
}
