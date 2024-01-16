export default function Header() {
  return (
    <>
      {/* Mobile Header */}
      <header className="fixed bottom-0 z-50 block w-screen border-t-2 border-gray-900 bg-gradient-to-b from-gray-light-custom to-gray-custom md:top-0 md:hidden">
        <div className="container mx-auto flex flex-row justify-center gap-3 p-3 text-white">
          <a
            href="#home-section"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white p-2 text-center text-black"
          >
            <i className="las la-home text-2xl"></i>
          </a>
          <a
            href="#about-section"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white p-2 text-center text-black"
          >
            <i className="las la-info-circle text-2xl"></i>
          </a>
          <a
            href="#contact-section"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white p-2 text-center text-black"
          >
            <i className="las la-phone text-2xl"></i>
          </a>
          <a
            href="#portofolios-section"
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white p-2 text-center text-black"
          >
            <i className="las la-terminal text-2xl"></i>
          </a>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="fixed top-0 z-50 hidden w-screen border-b-2 border-gray-900 bg-gradient-to-b from-black to-gray-custom md:block">
        <div className="container mx-auto flex flex-row justify-center gap-20 p-4 text-white">
          <a href="#home-section">Home</a>
          <a href="#about-section">About</a>
          <a href="#contact-section">Contact</a>
          <a href="#portofolios-section">Portofolios</a>
        </div>
      </header>
    </>
  );
}
