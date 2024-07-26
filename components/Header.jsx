import Link from "next/link";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import MobileNab from "./MobileNab";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container max-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Amit <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact" className="text-white">
            <Button>Hire Me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNab />
        </div>
      </div>
    </header>
  );
};
