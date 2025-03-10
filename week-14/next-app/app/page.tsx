import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="text-3xl font-bold">Welcome to home page</div>
        <div>
          <Link href="/interactive">
            client page: Interactive client-side rendering in action
          </Link>
        </div>
        <div>
          <Link href="/static">
            server page: optimized static content for SEO
          </Link>
        </div>
      </div>
    </div>
  );
}

