export default function ArticleCard({ title, content }: { title: string, content: string }) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{content.slice(0, 120)}...</p>
        <button className="mt-3 text-sm text-blue-400 hover:underline">Devamını Oku →</button>
      </div>
    );
  }