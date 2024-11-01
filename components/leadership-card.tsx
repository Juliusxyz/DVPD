import Image from "next/image";

interface LeadershipCardProps {
  name: string;
  position: string;
  image: string;
  description: string;
}

export function LeadershipCard({ name, position, image, description }: LeadershipCardProps) {
  return (
    <div className="bg-gray-900/50 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-full border-2 border-blue-400"
        />
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
      <div className="text-blue-400 mb-3">{position}</div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}