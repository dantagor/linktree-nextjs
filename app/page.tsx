import Image from "next/image";
import data from "../data.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 rounded-md hover:scale-105 transition-all w-full border border-gray-300 mb-3 bg-slate-50"
    >
      <div className="flex text-center w-full">
        {image && (
          <Image
            className="rounded-sm"
            alt={title}
            src={image}
            width={40}
            height={40}
          />
        )}
        <h2 className="font-semibold text-lg w-full">{title}</h2>
      </div>
    </a>
  );
}
