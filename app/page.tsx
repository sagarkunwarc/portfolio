import Link from "next/link";
import { Button } from "./components/ui/button";
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMedium,FaHashnode } from "react-icons/fa6";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        I&apos;m a passionate software engineer with expertise in web
        development and a love for creating innovative solutions.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link
            href="https://www.linkedin.com/in/sagarkunwar"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </Link>
        </Button>
        <Button asChild>
          <Link href="https://www.github.com/sagarkunwarc" aria-label="GitHub">
            <FaGithub size={24} />
          </Link>
        </Button>
        <Button asChild>
          <Link href="https://hashnode.com/@sagarkunwar" aria-label="Hashnode">
            <FaHashnode size={24} />
          </Link>
        </Button>
        <Button asChild>
          <Link href="https://dev.to/sagarkunwar" aria-label="Dev">
            <FaDev size={24} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
