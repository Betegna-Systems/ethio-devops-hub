import { Users, Zap, Award, Target } from 'lucide-react';

const features = [
  {
    icon: <Users className='h-10 w-10 text-blue-400' />,
    title: 'Expert African Talent',
    description: 'Access a pool of vetted, world-class DevOps engineers from across the continent with deep expertise in modern cloud technologies.',
  },
  {
    icon: <Zap className='h-10 w-10 text-blue-400' />,
    title: 'Accelerated Time-to-Market',
    description: 'We streamline your operations and automate your pipelines, enabling you to deploy features faster and gain a competitive edge.',
  },
  {
    icon: <Award className='h-10 w-10 text-blue-400' />,
    title: 'Cost-Effective Excellence',
    description: 'Get premium, agency-level DevOps expertise at a fraction of the cost of hiring and training an in-house team.',
  },
  {
    icon: <Target className='h-10 w-10 text-blue-400' />,
    title: 'Dedicated Partnership',
    description: 'We integrate seamlessly with your team, acting as a true partner dedicated to your success and long-term growth.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id='why-us' className='py-20 sm:py-32 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>Why Choose Leba?</h2>
          <p className='mt-4 text-lg text-gray-400'>The strategic advantage for your startup.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-start'>
              <div className='flex-shrink-0 mr-6'>
                <div className='bg-gray-800 p-4 rounded-full'>{feature.icon}</div>
              </div>
              <div>
                <h3 className='text-xl font-bold text-white'>{feature.title}</h3>
                <p className='mt-2 text-gray-400'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;