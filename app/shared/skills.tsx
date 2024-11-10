// components/Skills.tsx
import { FC } from 'react';

const Skills: FC = () => {
  return (
    <div className="mb-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {/* Technical Skills Section */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Technical Skills</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">C</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">C++</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">Java</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">Python</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">HTML</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">React.js</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">Tailwind CSS</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">JavaScript</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">PHP</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">MySQL</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">Next.js</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">ShadCN</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">Zustand</span>
          <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-sm">TypeScript</span>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Soft Skills</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">Critical Thinking</span>
          <span className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">Adaptability</span>
          <span className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">Time Management</span>
          <span className="bg-green-500 text-white py-1 px-3 rounded-full text-sm">Communication</span>
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Tools</h3>
        <div className="flex flex-wrap gap-3 mt-2">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm">Visual Studio Code</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm">Oracle</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm">MS Office</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-full text-sm">Canva</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
