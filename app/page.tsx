import Link from "next/link";
import { Button } from "./components/ui/button";

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
          <Link href="https://www.linkedin.com/in/sagarkunwar">LinkedIn</Link>
        </Button>
        <Button asChild>
          <Link href="https://www.github.com/sagarkunwarc">GitHub</Link>
        </Button>
        <Button asChild>
          <Link href="https://partner.cloudskillsboost.google/public_profiles/f0d3c4be-0bcb-43a5-8665-bbdaa63b022e">
            Googel Cloud Skills Boost
          </Link>
        </Button>
      </div>
    </div>
  );
}
