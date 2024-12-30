import Image from "next/image";
import Link from "next/link";

export const BlogNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-200 mb-4">
          Blog Not Found
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          {
            "Oops! The blog you're looking for doesn't exist or has been moved."
          }
        </p>
        <Image
          src="/not-found.png"
          alt="Blog Not Found"
          width={400}
          height={300}
          className="mx-auto mb-6"
        />
        <Link href="/blog">
          <p className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-all">
            Go to Blogs
          </p>
        </Link>
        <Link href="/">
          <p className="mt-4 block text-blue-500 hover:underline">
            Back to Home
          </p>
        </Link>
      </div>
    </div>
  );
};
