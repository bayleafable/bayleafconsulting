export function SiteFooter() {
  return (
    <footer className="bg-brand-charcoal text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row md:px-12">
        <p>© {new Date().getFullYear()} Bayleaf Consulting LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
