import Image from "next/image";

interface NewsCardProps {
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export function NewsCard({ title, date, image, excerpt }: NewsCardProps) {
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-blue-400 mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{excerpt}</p>
      </div>
    </div>
  );
}