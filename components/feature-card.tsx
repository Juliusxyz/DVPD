import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
}

export function FeatureCard({ title, description, icon, image }: FeatureCardProps) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:bg-gray-800/70 transition-all duration-300">
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}