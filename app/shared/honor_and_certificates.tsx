// components/HonorsAndCertifications.tsx
import { FC } from 'react';

const HonorsAndCertifications: FC = () => {
  return (
    <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Honors and Certifications</h3>
      
      <ul className="list-inside list-disc space-y-3">
        <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
          Participated in Coding Competition at IBIT, PU - April 2023
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
          Business Analytics with Excel: Elementary to Advanced (Coursera) - July 2023
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
          Introduction to Generative AI (Coursera) - July 2023
        </li>
        <li className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300">
          Advanced Coding Competitions at CosmiCode - April 2024
        </li>
      </ul>
    </div>
  );
};

export default HonorsAndCertifications;
