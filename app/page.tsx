'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import ArticleCard from '@/components/ArticleCard';
import Button from '@/components/Button';
import AnimatedContainer from '@/components/AnimatedContainer';
import ClientOnlyChart from '@/components/ClientOnlyChart';

type Article = {
  id: number;
  title: string;
  content: string;
  imageUrl?: string;
};

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/articles`)
      .then((res) => setArticles(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <div className="z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Politik Analiz</h1>
          <p className="mt-4 text-lg text-[#cbd5e1] max-w-xl mx-auto">
            Türkiye’nin politik yapısına ve kişisel konumunuza objektif bir bakışa hazır mısınız?
          </p>
          <a
            href="/bireysel-analiz"
            className="mt-6 inline-block bg-[#1e60f5] hover:bg-[#4183ff] text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
          >
            Testi Başlat
          </a>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#102a43]/1000 to-black"></div>
      </section>

      {/* Main content */}
      <AnimatedContainer>
      <div className="container mx-auto p-4 bg-gradient-to-b from-[#0a0f1c]/60 via-[#1c2f4a]/50 to-black/60 text-white min-h-screen rounded-xl shadow-inner">
          {/* Featured Articles */}
          <section className="mt-12">
  <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Son Eklenenler</h2>
  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {articles.map((article) => (
      <ArticleCard
      key={article.id}
      title={article.title}
      content={article.content}
      imageUrl={article.imageUrl}
      link={`/articles/${article.id}`} // ✅ This is crucial
    />
    ))}
  </div>
</section>

          {/* Example Button & Chart */}
          <section className="mt-16">
            <h2 className="text-xl font-semibold mb-4">Deneme Butonu</h2>
            <Button onClick={handleSubmit}>Sonuçları Göster</Button>

            <div className="mt-8">
              <ClientOnlyChart
                data={[
                  { subject: 'Ekonomi', value: 7 },
                  { subject: 'Özgürlük', value: 8 },
                  { subject: 'Geleneksellik', value: 3 },
                ]}
              />
            </div>
          </section>
        </div>
      </AnimatedContainer>
    </>
  );
}