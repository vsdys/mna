import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  content: string;
  imageUrl?: string;
  link?: string;
}

export default function ArticleCard({ title, content, imageUrl, link }: ArticleCardProps) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-t-xl"
        />
      )}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-[#cbd5e1] mt-2 flex-grow">{content.slice(0, 120)}...</p>
        {link && (
          <div className="mt-4">
            <Link href={link}>
              <span className="text-[#60a5fa] hover:underline font-medium">
                Makaleye Git →
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}