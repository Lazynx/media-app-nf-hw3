import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 pt-16">
      <section className="w-full bg-white text-black  md:py-32 lg:py-60 dark:bg-black dark:text-white">
        <div className="container space-y-11 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Human narratives and concepts.</h1>
            <p className="max-w-[700px] text-gray-600 text-lg md:text-xl">
              A platform for reading, writing, and enhancing your comprehension.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/posts" prefetch={false}>
                <Button>
                  Start reading
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
