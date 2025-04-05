interface ArticleCardProps {
  title: string;
  content: string;
  imageUrl?: string;
  link?: string;
}

export default function ArticleCard({ title, content, imageUrl, link }: ArticleCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="bg-[#1e1e2f]/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
        {imageUrl && (
          <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        )}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300 mt-2">{content.slice(0, 100)}...</p>
        </div>
      </div>
    </a>
  );
}