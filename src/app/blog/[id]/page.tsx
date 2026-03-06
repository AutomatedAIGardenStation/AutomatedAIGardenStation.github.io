import { getAllPostIds, getPostData } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-8">
        <Link href="/blog" className="text-primary hover:underline font-medium">
          &larr; Back to blog
        </Link>
      </div>
      <article>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          {postData.title}
        </h1>
        <div className="text-gray-500 text-sm mb-8 pb-8 border-b border-gray-200">
          <time dateTime={postData.date}>{new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
        </div>
        <div
          className="prose prose-lg prose-primary max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  );
}
