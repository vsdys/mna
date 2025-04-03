interface ArticleCardProps {
  title: string;
  content: string;
  imageUrl?: string; // Optional prop
}

export default function ArticleCard({ title, content, imageUrl }: ArticleCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
      {imageUrl && <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{content.slice(0, 120)}...</p>
      </div>
    </div>
  );
}