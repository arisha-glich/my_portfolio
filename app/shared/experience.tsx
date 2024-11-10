// components/Experience.tsx
import { FC } from 'react';
import SectionTitle from './section_tittle';

interface ExperienceProps {
 company: string;
 location: string;
 role: string;
 duration: string;
 responsibilities: string[];
}

const Experience: FC<ExperienceProps> = ({
 company,
 location,
 role,
 duration,
 responsibilities,
}) => {
 return (
  <div className="mb-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
   <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
    {company}
   </h3>
   <p className="text-gray-600 dark:text-gray-400">{location}</p>
   <p className="mt-2 font-semibold text-gray-700 dark:text-gray-300">{role}</p>
   <p className="text-gray-600 dark:text-gray-400">{duration}</p>

   <ul className="mt-4 list-inside list-disc text-gray-700 dark:text-gray-300">
    {responsibilities.map((responsibility, index) => (
     <li key={index}>{responsibility}</li>
    ))}
   </ul>
  </div>
 );
};

const ExperienceSection: FC = () => {
 return (
  <div className="mb-6">
   <SectionTitle title="Experience" />

   <Experience
    company="DDYNAMICS"
    location="Remote"
    role="Frontend Developer"
    duration="Sept 2024 – Present"
    responsibilities={[
     'Learned and implemented Next.js for building server-side rendered React applications.',
     'Used SHADCN for designing beautiful UI components and Zustan for state management.',
     'Applied new tools and frameworks to existing projects to enhance their scalability and maintainability.',
     'Collaborated with cross-functional teams to integrate new features and improve UI/UX across projects.',
    ]}
   />
   <Experience
    company="OPTIMUSFOX"
    location="Lahore, Pakistan"
    role="Frontend Developer (Internship)"
    duration="June 2024 – August 2024"
    responsibilities={[
     'Developed a Task Manager project (like Jira) using React.js and Tailwind CSS.',
     'Utilized Redux for state management and real-time updates.',
     'Collaborated with teams to kick start new projects, ensuring the application of frontend best practices.',
    ]}
   />
  </div>
 );
};

export default ExperienceSection;
