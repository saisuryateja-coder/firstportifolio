import Link from "next/link";

export default function NavBar() {
  return (
    <div className="max-[1434px]:flex  max-[1434px]:justify-center max-[1434px]:mb-10">
      <Link className="mr-5" href="#home">
        HOME
      </Link>
      <Link className="mx-5" href="#portfolio">
        PORTFOLIO
      </Link>
      <Link className="mx-5" href="#contact">
        CONTACT
      </Link>
    </div>
  );
}
