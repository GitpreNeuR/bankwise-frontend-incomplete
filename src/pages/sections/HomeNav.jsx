import { Link } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";

const links = [
  { text: "About", link: "/about" },
  { text: "Services", link: "/services" },
  { text: "Contact", link: "/contact" },
{text: "Features", link: "/features" }
];

export default function  HomeNav(){
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 sticky top-0 bg-transparent max-w-[1600px] mx-auto flex items-center justify-between">
      <Link href="/" className="flex items-center ">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-800 to-gray-400 bg-clip-text text-transparent">
          BankWise
        </h1>
      </Link>

      <div className="flex items-center text-zinc-50 justify-center gap-x-5">
        {links.map((link, index) => (
          <Link
            to={link.link}
            key={index}
            className=" font-semibold px-2 py-1"
          >
            {link.text}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
      <Link to={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="rounded-full">
          {isSignedIn ? "Dashboard" : "Get Started"}
            
          </Button>
        </Link>
      </div>
    </nav>
  );
};
