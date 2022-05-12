import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  name: string;
  description: string;
}

export default function Feature({ icon, name, description }: Props) {
  return (
    <div className="bg-gray-200 rounded-md w-[25rem] h-fit px-3 py-2 hover:scale-95">
      <div className="flex flex-col items-center space-y-3">
        {icon}
        <div className="flex flex-col items-center space-y-1">
          <p className="text-lg text-gray-700 font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
}
