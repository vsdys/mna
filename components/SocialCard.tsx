import { ReactNode } from 'react';

interface SocialCardProps {
  platform: string;
  link: string;
  icon: ReactNode;
}

export default function SocialCard({ platform, link, icon }: SocialCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#1a2539]/80 border border-[#2c3e50] text-white flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
    >
      <div className="text-2xl">{icon}</div>
      <span className="font-medium">{platform}</span>
    </a>
  );
}