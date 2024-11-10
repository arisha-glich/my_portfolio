// components/Education.tsx
import { FC } from 'react';

const My_Education: FC = () => {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        Institute of Business and Information Technology, University of the Punjab
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Lahore, Pakistan</p>
      <p className="text-base text-gray-700 dark:text-gray-300 mt-2">
        Bachelor of Business & Information Technology | IT - Specialization | 7th Semester | CGPA 3.45
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Dec 2021 - June 2025</p>
    </div>
  );
};

export default My_Education;
