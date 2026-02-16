import { ProductCard } from '../components/ProductCard';

const products = [
  { id: '1', name: 'Wireless Headphones Pro', price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e' },
  { id: '2', name: 'Smart Watch X', price: 149.0, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30' },
  { id: '3', name: '4K Action Camera', price: 249.0, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32' }
];

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Featured Products</h1>
      <p className="mt-2 text-slate-600">AI-powered recommendations, secure checkout, and global shipping.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
