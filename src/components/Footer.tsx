import { useState, FormEvent } from 'react';
import { Mail, Phone, Linkedin, Twitter, Globe } from 'lucide-react';
import { toast } from 'sonner';

const Footer = () => {
  const year = new Date().getFullYear();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log({ name, email, subject, message });

    // Show a success toast
    toast.success('Message sent successfully!');

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };


  return (
    <footer id='contact' className='bg-gray-950 text-gray-400 py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          <div className='md:text-left'>
            <h3 className='text-2xl font-bold text-white mb-6'>Betegna DevOps Solutions</h3>
            <p className='mb-8'>Your trusted partner in DevOps and Cloud innovation. Based in the heart of Africa, serving the world.</p>
            <div className='space-y-4'>
                <h4 className='text-lg font-semibold text-white mb-4'>Get in Touch</h4>
                 <a href='mailto:contact@betegnasolutions.com' className='flex items-center group'>
                    <Mail className='h-5 w-5 mr-3 text-blue-400' />
                    <span className='group-hover:text-blue-400 transition-colors'>contact@betegnasolutions.com</span>
                </a>
                <a href='tel:+251912345678' className='flex items-center group'>
                    <Phone className='h-5 w-5 mr-3 text-blue-400' />
                    <span className='group-hover:text-blue-400 transition-colors'>+251 912 345 678</span>
                </a>
                <a href='https://www.betegnasolutions.com' target='_blank' rel='noopener noreferrer' className='flex items-center group'>
                    <Globe className='h-5 w-5 mr-3 text-blue-400' />
                    <span className='group-hover:text-blue-400 transition-colors'>www.betegnasolutions.com</span>
                </a>
            </div>
            <div className='mt-8'>
                <h4 className='text-lg font-semibold text-white mb-4'>Follow Us</h4>
                <div className='flex space-x-6'>
                <a href='#' className='hover:text-white'><Linkedin /></a>
                <a href='#' className='hover:text-white'><Twitter /></a>
                </div>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-bold text-white mb-6'>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='name' className='sr-only'>Name</label>
                <input 
                  type='text' 
                  id='name' 
                  placeholder='Your Name' 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  required 
                />
              </div>
              <div>
                <label htmlFor='email' className='sr-only'>Email</label>
                <input 
                  type='email' 
                  id='email' 
                  placeholder='Your Email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  required 
                />
              </div>
              <div>
                <label htmlFor='subject' className='sr-only'>Subject</label>
                <input 
                  type='text' 
                  id='subject' 
                  placeholder='Subject' 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className='w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  required 
                />
              </div>
              <div>
                <label htmlFor='message' className='sr-only'>Message</label>
                <textarea 
                  id='message' 
                  placeholder='Your Message' 
                  rows={5} 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  required
                ></textarea>
              </div>
              <button 
                type='submit' 
                className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className='mt-12 pt-8 border-t border-gray-800 text-center text-sm'>
          <p>&copy; {year} Betegna DevOps Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
