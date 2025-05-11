import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  href,
  title,
  description,
  image,
}: {
  href: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Link href={href} className="flex flex-col gap-4">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-full aspect-[3/2]"
      />
      <div className="inline-flex gap-1">
        <h3 className="font-bold">{title}</h3>
        <p className="font-serif italic">{description}</p>
      </div>
    </Link>
  );
}
