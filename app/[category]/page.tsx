import CategoryContent from '@/components/CategoryContent';

export async function generateStaticParams() {
  return [
    { category: 'boykot' },
    { category: 'para' },
    { category: 'manipulasyon' },
    { category: 'hukuksuzluk' },
    { category: 'guncel-haberler' },
    { category: 'halk-problemler' },
    // Add more categories here
  ];
}

export default function CategoryPage() {
  return <CategoryContent />;
}