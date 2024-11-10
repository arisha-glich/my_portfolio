"use client"
import { FC } from 'react';
import ProfileImage from './profile_image';
import SectionTitle from './section_tittle';
import Project from './project';
import Skills from './skills';
import HonorsAndCertifications from './honor_and_certificates';
import ExperienceSection from './experience';
import My_Education from './my_education';

const Education: FC = () => {
 return (
  <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
   {/* Profile Header */}
   <div className="mb-8 flex items-center space-x-6">
    <ProfileImage src="/profile.jpg" alt="Arisha Nawaz" />
    <div>
     <h1 className="text-3xl font-bold">Arisha Nawaz</h1>
     <p className="text-xl text-gray-400">FRONTEND DEVELOPER </p>
     <p>+92 310 0441602 • arishanawaz2002@gmail.com</p>
     <p>
      <a
       href="https://www.linkedin.com/in/arisha-nawaz262078283/"
       target="_blank"
       rel="noopener noreferrer"
       className="text-blue-600"
      >
       LinkedIn
      </a>{' '}
      |
      <a
       href="https://github.com/arisha-glich"
       target="_blank"
       rel="noopener noreferrer"
       className="text-blue-600"
      >
       {' '}
       GitHub
      </a>
     </p>
    </div>
   </div>

   {/* Education Section */}

   <ExperienceSection />
   <SectionTitle title="Education" />
   <My_Education />

   <SectionTitle title="Projects" />
   <Project
  title="Task Manager System"
  description={["Developed a Task Manager System using React JS and Tailwind CSS. This web application allows users to create, read, update, and delete tasks. It features task categorization, deadlines, and priority settings. Data is handled using JSON Server for a mock backend, enabling efficient task management."]}
  tools="React JS, Tailwind CSS, JSON Server (CRUD Operations, Task Management)"
  date="June 2024"
/>

   <Project
    title="Warehouse Management Website"
    description={[
     'Developed a Warehouse Management System using PHP, MySQL, HTML, CSS, and JavaScript.',
     'Streamlined warehouse operations including inventory management, stock tracking, and order fulfillment.',
     'Utilized MySQL for database management to store product details and transactions.',
     'Implemented CRUD operations for order processing and report generation.',
     'Done during University.',
    ]}
    tools="PHP, MySQL, HTML, CSS, JavaScript (Inventory Management, CRUD Operations)"
    date="March 2024"
   />
   <Project
    title="Hospital Management System and Student Information System"
    description={[
     'Built a Hospital Management System using HTML, CSS, and JavaScript.',
     'Tracks patient details, doctor availability, schedules appointments, and stores medical records.',
     'Developed a Student Information System to manage student registrations, academic progress, and course details.',
     'Implemented form validation and DOM manipulation for enhanced user experience.',
     'Done during University.',
    ]}
    tools="HTML, CSS, JavaScript (Form Validation, DOM Manipulation)"
    date="April 2024"
   />
   <Project
    title="MANZI.SHOP - WordPress Ecommerce Fashion Store"
    description={["Developed an eCommerce Fashion Store using WordPress. This online store features a user-friendly interface for browsing fashion items, managing product categories, and handling secure transactions. Integrated payment gateways and optimized the website for performance and mobile responsiveness."]}
    tools="WordPress, WooCommerce, PHP, CSS, JavaScript (Ecommerce, Payment Gateway Integration)"
    date="June 2024"
   />

   <Project
    title="Student Registration Portal & Chess Game"
    description={[
     'Developed a Student Registration Portal using C++.',
     'Allow students to register, update personal details, and track course selections.',
     'Built a console-based Chess Game allowing two players to play.',
     'Implemented rules for moving pieces, validating legal moves, and detecting check/checkmate.',
     'Done during University.',
    ]}
    tools="C++ (Object-Oriented Programming, File Handling)"
    date="January 2023"
   />

   <Project
    title="Tic-Tac-Toe & Encryption and Decryption Module"
    description={[
     'Developed a classic Tic-Tac-Toe game using C programming.',
     'Implemented arrays and loops for game logic and board management.',
     'Created an Encryption and Decryption module using C++.',
     'Applied cryptographic methods like the Caesar Cipher and basic encryption algorithms.',
     'Done during University.',
    ]}
    tools="C, C++ (Caesar Cipher, Basic Cryptography)"
    date="March 2022"
   />

   <SectionTitle title="Skills" />
   <Skills />

   <SectionTitle title="Certification  & Extracurricular Activities " />

   <HonorsAndCertifications />
   <div className="mb-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
    <h3 className="mb-3 text-2xl font-semibold text-gray-800 dark:text-white">
     Event Management Society
    </h3>

    <p className="mb-3 text-gray-700 dark:text-gray-300">
     Head Executive Member: Event Planning, Coordination, Promotion and
     Marketing, Program Development in IBIT
    </p>

    <p className="italic text-gray-600 dark:text-gray-400">
     Oct 2023 - Present
    </p>
   </div>
  </div>
 );
};

export default Education;
