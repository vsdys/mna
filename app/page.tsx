'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

import ArticleCard from '@/components/ArticleCard';
import Button from '@/components/Button';
import AnimatedContainer from '@/components/AnimatedContainer';
import ClientOnlyChart from '@/components/ClientOnlyChart'; // ✅ Correctly imported

type Article = {
  id: number;
  title: string;
  content: string;
};

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5000/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <AnimatedContainer>
      <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
        <nav className="flex justify-between bg-gray-800 p-3 rounded-lg shadow-md">
          <div className="font-bold text-lg">Tarafsız Bakış</div>
          <ul className="flex space-x-4 text-sm items-center">
            <li><Link href="/">Güncel Haberler</Link></li>
            <li><Link href="/halk-ici-problemler">Halk İçi Problemler</Link></li>
            <li><Link href="/devlet-halka-borcludur">Devlet Halka Borçludur</Link></li>
            <li><Link href="/hukuksuzluk">Hukuksuzluk</Link></li>
            <li><Link href="/manipulasyon-araclari">Manipülasyon Araçları</Link></li>
            <li><Link href="/para">Para</Link></li>
            <li><Link href="/boykot">Boykot</Link></li>
            <li><Link href="/bireysel-analiz">Bireysel Analiz</Link></li>
          </ul>
        </nav>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">Öne Çıkan Haberler</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => (
              <ArticleCard key={article.id} title={article.title} content={article.content} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold mb-4">Deneme Butonu</h2>
          <Button onClick={handleSubmit}>Sonuçları Göster</Button>

          <div className="mt-8">
            <ClientOnlyChart data={[
              { subject: 'Ekonomi', value: 7 },
              { subject: 'Özgürlük', value: 8 },
              { subject: 'Geleneksellik', value: 3 }
            ]} />
          </div>
        </section>
      </div>
    </AnimatedContainer>
  );
}