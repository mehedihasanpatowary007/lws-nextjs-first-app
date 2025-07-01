import { blogs } from "@/data/blogs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover"
            height={48}
            width={100}
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {blog.title}
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              By {blog.author} — {new Date(blog.published).toLocaleDateString()}
            </p>
            <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-green-600 font-semibold hover:underline"
            >
              Read more →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export function generateMetadata() {
  return {
    title: "Home",
    description: "This is home page",
  };
}
