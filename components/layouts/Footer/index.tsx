export default function Footer() {
  return (
    <footer className="mb-16 flex flex-col flex-wrap items-center justify-center gap-2 border-t-2 border-gray-900 bg-gradient-to-t from-black to-gray-custom py-5 md:mb-0">
      <div className="">Copyright &#169; 2023 All rights reserved.</div>
      <div className="flex flex-row gap-4">
        <a
          href="https://github.com/sknk1"
          target="_blank"
          className="transition-all hover:text-yellow-custom"
        >
          <i className="lab la-github text-3xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/gregorius-yuuki/"
          target="_blank"
          className="transition-all hover:text-yellow-custom"
        >
          <i className="lab la-linkedin text-3xl"></i>
        </a>
        <a
          href="https://www.instagram.com/rickygregorius/"
          target="_blank"
          className="transition-all hover:text-yellow-custom"
        >
          <i className="lab la-instagram text-3xl"></i>
        </a>
      </div>
    </footer>
  );
}
