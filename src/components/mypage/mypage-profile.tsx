import { Camera } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface MypageProfileProps {
  img: StaticImageData;
}

const MypageProfile = ({ img }: MypageProfileProps) => {
  return (
    <div className="relative">
      <div className="size-36 rounded-full bg-sky-100 flex items-center justify-center overflow-hidden border-2 border-aniviolet2">
        <Image
          src={img}
          alt="comment image"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-full object-cover"
        />
      </div>
      <button className="absolute bottom-0.5 right-0.5 w-10 h-10 bg-gray-200 rounded-full border-2 border-aniviolet1 grid place-items-center">
        <Camera width="1.3rem" height="1.3rem" />
      </button>
    </div>
  );
};
export default MypageProfile;
