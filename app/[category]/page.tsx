'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import ArticleCard from '@/components/ArticleCard';
import AnimatedContainer from '@/components/AnimatedContainer';

type Article = {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
};

// app/[category]/page.tsx

export async function generateStaticParams() {
  return [
    { category: 'boykot' },
    { category: 'para' },
    { category: 'manipulasyon' },
    { category: 'hukuksuzluk' },
    { category: 'guncel-haberler' },
    { category: 'halk-problemler' },
    // Add all categories you want pre-rendered
  ];
}

export default function CategoryPage() {
  const { category } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles/${category}`)
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, [category]);

  

  return (
    <AnimatedContainer>
      <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold capitalize">{category}</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              content={article.content}
              imageUrl={article.imageUrl}
            />
          ))}
        </div>
      </div>
    </AnimatedContainer>
  );
}