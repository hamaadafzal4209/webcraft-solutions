"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully responsive e-commerce platform built with Next.js and Tailwind CSS. Features include product listings, cart functionality, and secure checkout process.',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?fit=crop&w=600&q=60',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe'],
    details: {
      challenges: 'Implementing a smooth and secure checkout flow with Stripe integration and ensuring mobile responsiveness for all devices.',
      features: [
        'Responsive design for various screen sizes',
        'Secure payment integration with Stripe',
        'Real-time product availability checks',
        'User-friendly navigation and search functionality'
      ],
      impact: 'Enabled a small business to increase online sales by 30% in the first quarter after launch, with a noticeable improvement in customer retention and satisfaction.'
    }
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates. Users can create projects, assign tasks, and track progress efficiently.',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRoZSUyMEltcGFjdCUyMG9mJTIwQUklMjBvbiUyMERpZ2l0YWwlMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    details: {
      challenges: 'Creating a real-time experience for users while ensuring data consistency across multiple clients.',
      features: [
        'Real-time task updates using WebSockets',
        'Role-based access control for team collaboration',
        'Notification system for task assignments and updates',
        'User-friendly Kanban-style board for easy task tracking'
      ],
      impact: 'Helped a project management company reduce task completion time by 20%, enhancing productivity for teams of all sizes.'
    }
  },
  {
    id: 3,
    title: 'AI-powered Chatbot',
    description: 'An intelligent chatbot leveraging natural language processing to provide customer support and answer queries in real-time.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=600&q=60',
    technologies: ['Python', 'TensorFlow', 'Flask', 'React'],
    details: {
      challenges: 'Training the chatbot to understand a wide variety of user queries while maintaining response accuracy.',
      features: [
        'Natural language processing with TensorFlow',
        'Context-aware conversation handling',
        'Real-time response system with Flask backend',
        'Customizable responses and FAQ integration'
      ],
      impact: 'Reduced customer service response time by 60%, significantly improving user experience and enabling 24/7 support.'
    }
  },
  {
    id: 4,
    title: 'Fitness Tracking Mobile App',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and personal fitness goals. Includes integration with wearable devices.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFRoZSUyMEltcGFjdCUyMG9mJTIwQUklMjBvbiUyMERpZ2l0YWwlMjBNYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D',
    technologies: ['React Native', 'Redux', 'Firebase', 'HealthKit'],
    details: {
      challenges: 'Seamlessly integrating with various wearable devices and handling large amounts of real-time fitness data.',
      features: [
        'Cross-platform compatibility with React Native',
        'Integration with Apple HealthKit and Google Fit',
        'Personalized workout and nutrition tracking',
        'In-depth analytics and progress tracking'
      ],
      impact: 'Received high user engagement with over 10,000 active users, and a 4.8-star rating on app stores, helping users track and achieve their fitness goals effectively.'
    }
  }
];

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const projectId = Number(entry.target.id);
          setActiveProject(projects.find((p) => p.id === projectId) || projects[0]);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-8 overflow-y-auto">
          <h1 className="text-4xl font-bold mb-8">Our Projects</h1>
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id.toString()}
              ref={(el) => (projectRefs.current[index] = el)}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <h3 className="font-semibold text-lg">Challenges</h3>
              <p className="text-gray-600 mb-4">{project.details.challenges}</p>
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                {project.details.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <h3 className="font-semibold text-lg">Impact</h3>
              <p className="text-gray-600">{project.details.impact}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen">
          <div className="h-full flex items-center justify-center p-8">
            <div className="relative w-full h-full max-w-2xl max-h-[600px]">
              <Image
                src={activeProject.image}
                alt={`${activeProject.title} preview`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg shadow-lg transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
