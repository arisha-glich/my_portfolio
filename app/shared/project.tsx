import { FC } from 'react';

interface ProjectProps {
  title: string;          // Project name
  description: string[];  // Array of strings for project description
  tools: string;          // Key tools or technologies used
  date: string;           // Date of completion or release
}

const Project: FC<ProjectProps> = ({ title, description, tools, date }) => {
  return (
    <div className="mb-4 p-4 border rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      
      {/* Description list with error handling for empty description */}
      {description.length > 0 ? (
        <ul className="mb-2 text-sm list-inside list-disc space-y-1">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No description available.</p>
      )}

      {/* Tools/Technologies */}
      <p className="text-sm text-gray-500">
        <strong>Tools/Technologies:</strong> {tools}
      </p>

      {/* Date */}
      <p className="text-sm text-gray-500">
        <strong>Date:</strong> {date}
      </p>
    </div>
  );
};

export default Project;
