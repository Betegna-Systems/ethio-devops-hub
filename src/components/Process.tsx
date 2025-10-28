import { Search, Zap, Rocket, Repeat } from 'lucide-react';

const steps = [
  { icon: <Search className='h-8 w-8' />, title: '1. Discovery & Assessment', description: 'We start by understanding your current infrastructure, workflows, and goals.' },
  { icon: <Zap className='h-8 w-8' />, title: '2. Strategy & Roadmap', description: 'A tailored DevOps strategy and a clear implementation roadmap are crafted.' },
  { icon: <Rocket className='h-8 w-8' />, title: '3. Implementation & Automation', description: 'We execute the plan, building and automating your cloud infrastructure and pipelines.' },
  { icon: <Repeat className='h-8 w-8' />, title: '4. Optimization & Support', description: 'Continuous monitoring, optimization, and dedicated support to ensure peak performance.' },
];

const Process = () => {
  return (
    <section id='process' className='py-20 sm:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>Our Proven Process</h2>
          <p className='mt-4 text-lg text-gray-400'>A streamlined journey to operational excellence.</p>
        </div>
        <div className='relative'>
          <div className='hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700' aria-hidden='true'></div>
          <div className='relative grid grid-cols-1 md:grid-cols-4 gap-16'>
            {steps.map((step, index) => (
              <div key={index} className='text-center'>
                <div className='flex items-center justify-center mb-6'>
                  <div className='bg-blue-500 text-white rounded-full p-4 ring-8 ring-gray-900'>
                    {step.icon}
                  </div>
                </div>
                <h3 className='text-lg font-bold text-white mb-2'>{step.title}</h3>
                <p className='text-gray-400'>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;