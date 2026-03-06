import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">Blog</h1>
      <div className="space-y-8">
        {allPostsData.map(({ id, date, title, excerpt }) => (
          <article key={id} className="border-b border-gray-200 pb-8 last:border-0">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${id}`} className="text-primary hover:underline">
                {title}
              </Link>
            </h2>
            <div className="text-gray-500 text-sm mb-4">
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
            {excerpt && <p className="text-gray-600">{excerpt}</p>}
            <div className="mt-4">
              <Link href={`/blog/${id}`} className="text-primary hover:underline font-medium">
                Read more &rarr;
              </Link>
            </div>
          </article>
        ))}
        {allPostsData.length === 0 && (
          <p className="text-gray-600">No blog posts found.</p>
        )}
      </div>
    </div>
  );
}
