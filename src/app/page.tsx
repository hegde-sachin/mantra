import Link from "next/link";

import { routes } from "@/constants/route";

export default async function Home() {
  return (
    <div className="flex flex-col gap-4 h-full justify-center">
      {routes.map((link) => (
        <Link
          key={link.url}
          href={link.url}
          className="bg-accent-3 text-accent-11 hover:bg-accent-4 px-6 rounded-lg text-base h-mainLink flex items-center justify-center"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
