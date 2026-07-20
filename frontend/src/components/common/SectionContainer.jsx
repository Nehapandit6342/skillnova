export default function SectionContainer({ children, className = "", id }) {
  return (
    <section id={id} className={`py-14 lg:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}
