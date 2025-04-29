import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-4 py-7 bg-secondary-background text-foreground">
      <Link href={"/"}>
        <Image
          src="/images/logo.png"
          alt="Juliana Ortegón"
          width={150}
          height={24}
        />
      </Link>

      <Link href="/" className="uppercase text-sm">
        Contact
      </Link>
    </nav>
  );
}
