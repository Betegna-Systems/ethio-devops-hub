import { Cloud, Server, ShieldCheck, Code, Zap } from 'lucide-react';

const services = [
  {
    icon: <Cloud className='h-10 w-10 text-blue-400' />,
    title: 'Cloud Infrastructure Management',
    description: 'Design, deployment, and management of scalable and resilient cloud infrastructure on AWS, Azure, and GCP.',
  },
  {
    icon: <Server className='h-10 w-10 text-blue-400' />,
    title: 'CI/CD & Automation',
    description: 'Automating your build, test, and deployment pipelines to accelerate development cycles and improve reliability.',
  },
  {
    icon: <ShieldCheck className='h-10 w-10 text-blue-400' />,
    title: 'DevSecOps & Compliance',
    description: 'Integrating security into the DevOps lifecycle to protect your applications and ensure compliance from day one.',
  },
  {
    icon: <Code className='h-10 w-10 text-blue-400' />,
    title: 'Infrastructure as Code (IaC)',
    description: 'Manage and provision your infrastructure through code using tools like Terraform and CloudFormation for consistency and repeatability.',
  },
  {
    icon: <Zap className='h-10 w-10 text-blue-400' />,
    title: 'Kubernetes & Containerization',
    description: 'Leverage Docker and Kubernetes to build, ship, and run your applications anywhere with scalability and efficiency.',
  },
];

const Services = () => {
  return (
    <section id='services' className='py-20 sm:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>Our Core Service Offerings</h2>
          <p className='mt-4 text-lg text-gray-400'>Comprehensive solutions to streamline your development and operations.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div key={index} className='bg-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300'>
              <div className='mb-6'>{service.icon}</div>
              <h3 className='text-xl font-bold text-white mb-3'>{service.title}</h3>
              <p className='text-gray-400'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;