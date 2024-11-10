// components/SectionTitle.tsx
import { FC } from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-2xl font-semibold my-4">{title}</h2>;
};

export default SectionTitle;
