import Link from "next/link";

export default async function Home() {
  const links = [{
    name: 'ಸಂಧ್ಯಾವಂದನೆ',
    url: 'sandhyavandane'
  }];

  return <div className="flex flex-col gap-4 h-full justify-center">
    {links.map(link => <Link key={link.url} href={link.url} className="bg-accent-3 text-accent-11 hover:bg-accent-4 px-6 rounded-lg text-base h-mainLink flex items-center justify-center"> {link.name} </Link>)}
  </div>; 
}
