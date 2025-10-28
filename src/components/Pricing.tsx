import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Team Augmentation',
    price: 'Flexible', 
    description: 'Embed our DevOps experts directly into your team to fill gaps and accelerate your projects.',
    features: [
      'Dedicated Engineers',
      'Flexible Contracts',
      'Seamless Integration',
      'Scale Up or Down',
    ],
    cta: 'Discuss Your Needs',
  },
  {
    name: 'Managed Service',
    price: 'Subscription',
    description: 'A complete, hands-off solution where we manage your entire DevOps lifecycle for a flat monthly fee.',
    features: [
      '24/7 Monitoring & Support',
      'Proactive Optimization',
      'Security & Compliance Management',
      'Predictable Costing',
    ],
    cta: 'Get a Quote',
  },
  {
    name: 'Project-Based',
    price: 'Fixed Scope',
    description: 'A fixed-price engagement for specific projects like a cloud migration or CI/CD pipeline setup.',
    features: [
      'Defined Scope & Deliverables',
      'Clear Timelines',
      'Milestone-based Payments',
      'Ideal for one-off needs',
    ],
    cta: 'Scope a Project',
  },
];

const Pricing = () => {
  return (
    <section id='pricing' className='py-20 sm:py-32 bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl sm:text-4xl font-extrabold text-white'>Pricing & Engagement Models</h2>
          <p className='mt-4 text-lg text-gray-400'>Flexible models designed to fit your needs and budget.</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {tiers.map((tier) => (
            <div key={tier.name} className='bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col'>
              <h3 className='text-2xl font-bold text-white'>{tier.name}</h3>
              <p className='mt-2 text-gray-400 flex-grow'>{tier.description}</p>
              <div className='my-8'>
                <span className='text-4xl font-extrabold text-white'>{tier.price}</span>
              </div>
              <ul className='space-y-4 mb-8 flex-grow'>
                {tier.features.map((feature) => (
                  <li key={feature} className='flex items-start'>
                    <Check className='h-6 w-6 text-green-400 mr-3 flex-shrink-0' />
                    <span className='text-gray-300'>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href='#contact' className='mt-auto w-full text-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors'>
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;