import { notFound } from 'next/navigation';

type Article = {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
};

async function getArticle(id: string): Promise<Article | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${id}`, {
      cache: 'no-store'
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ✅ Remove custom interface — this is how App Router expects props
export default async function ArticleDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticle(params.id);

  if (!article) return notFound();

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      {article.imageUrl && (
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full max-h-[400px] object-cover rounded-lg mb-6"
        />
      )}
      <div className="prose prose-invert text-[#cbd5e1]">
        <p>{article.content}</p>
      </div>
    </div>
  );
}
