import Link from "next/link";

export const HeaderComponent = () => {
  return (
    <header className="flex items-center justify-center bg-brand-color text-background sticky top-0 p-4 h-header lg:px-9 lg:py-2 dark:text-foreground">
      <div className="flex items-center justify-between w-full max-w-container">
        <h1 className="font-medium text-3xLarge lg:text-5xLarge">ಮಂತ್ರ</h1>
        <Link
          href="/"
          className="bg-accent-3 text-accent-11 hover:bg-accent-4 px-6 rounded-lg text-base h-navLink flex items-center justify-center"
        >
          Menu
        </Link>
      </div>
    </header>
  );
};
