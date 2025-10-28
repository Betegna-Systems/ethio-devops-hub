const Hero = () => {
  return (
    <section id='home' className='relative bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/34955754-845c-48e8-82d1-1c234a866adf/hero-background-buncm3r-1761668294351.webp')" }}>
      <div className='absolute inset-0 bg-black/60'></div>
      <div className='relative container mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)] flex items-center justify-center'>
        <div className='text-center max-w-3xl'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight'>
            Premium DevOps & Cloud Solutions for Ambitious African Startups
          </h1>
          <p className='mt-6 text-lg sm:text-xl text-gray-300'>
            Focus on your product, we handle the infrastructure. Expert DevOps outsourcing to scale your vision.
          </p>
          <div className='mt-10'>
            <a
              href='#contact'
              className='bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105'
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;