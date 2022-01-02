export default function Header() {
  return (  
    <header className="bg-dark-blue">
      <div className="max-w-7xl mx-auto p-5 flex justify-between items-center h-20 text-neutrals-white">
        <a href="/">
          <h1 className="text-sm md:text-2xl font-semibold">Where in the world?</h1>
        </a>

        <div>
          <p className="text-xs md:text-base">Dark mode</p>
        </div>
      </div>
    </header>
  );
}
 