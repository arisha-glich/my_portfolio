// components/ProfileImage.tsx
import Image from 'next/image';
import { FC } from 'react';
import image from "@/assets/arisha.jpg"

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: FC<ProfileImageProps> = ({ alt }) => {
  return (
    <Image src={image} alt={alt} className="w-24 h-24 rounded-full border-4 border-gray-300 dark:border-gray-600" />
  );
};

export default ProfileImage;
