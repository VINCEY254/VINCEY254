export function NavBar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <span className="text-xl font-bold">Vincey Commerce</span>
        <div className="flex gap-4 text-sm">
          <a href="/">Shop</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/orders">Orders</a>
          <a href="/admin">Admin</a>
          <a href="/vendor">Vendor</a>
        </div>
      </nav>
    </header>
  );
}
