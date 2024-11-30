import Link from "next/link";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        I&apos;m a passionate software engineer with expertise in web
        development and a love for creating innovative solutions.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/about">Learn More About Me</Link>
        </Button>
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.linkedin.com/in/sagarkunwar">LinkedIn</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.github.com/sagarkunwarc">GitHub</Link>
        </Button>
      </div>
    </div>
  );
}
