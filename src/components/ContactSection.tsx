import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Optional: prevent page reload & show alert
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you! Your message is on its way 🚀');
    // Submit the form normally so Netlify picks it up
    e.currentTarget.submit();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-20 bg-black text-gray-300" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-heading text-center text-white text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Get In <span className="text-tech-purple">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              Feel free to reach out for collaborations, opportunities, or just a friendly chat.
            </p>

            <div className="space-y-6">
              <ContactItem
                title="Email"
                value="2200032668cseh@gmail.com"
                href="mailto:2200032668cseh@gmail.com"
                icon="mail"
              />
              <ContactItem
                title="Phone"
                value="+91 9963400955"
                href="tel:+919963400955"
                icon="phone"
              />
              <ContactItem
                title="Location"
                value="Avanigadda, Andhra Pradesh, India"
                icon="map-pin"
              />
            </div>

            <div className="mt-8 flex space-x-4">
              <SocialIcon href="https://www.linkedin.com/in/batchuvenkatadharmaramateja" icon="linkedin" />
              <SocialIcon href="https://github.com/RamaTeja99" icon="github" />
            </div>
          </motion.div>

          {/* Right: Netlify Form */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-2xl shadow-lg"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
              </p>

              <InputField
                label="Name"
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />

              <InputField
                label="Email"
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-gray-300 focus:ring-2 focus:ring-tech-purple focus:border-tech-purple transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-tech-purple text-white rounded-lg font-medium hover:bg-tech-dark-purple transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

/* Helper components */

const InputField = ({
  label,
  id,
  name,
  type,
  placeholder,
  value,
  onChange
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-gray-400 font-medium mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black text-gray-300 focus:ring-2 focus:ring-tech-purple focus:border-tech-purple transition-colors"
    />
  </div>
);

const ContactItem = ({
  title,
  value,
  href,
  icon
}: {
  title: string;
  value: string;
  href?: string;
  icon: 'mail' | 'phone' | 'map-pin';
}) => {
  const icons: Record<string, JSX.Element> = {
    mail: (
      <>
        <rect x="2" y="6" width="20" height="16" rx="2" ry="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.11.64.27 1.25.48 1.84a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.59.21 1.2.37 1.84.48a2 2 0 0 1 1.72 2z" />
    ),
    'map-pin': (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    )
  };

  return (
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 rounded-full bg-tech-purple/20 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          className="text-tech-purple"
        >
          {icons[icon]}
        </svg>
      </div>
      <div>
        <h4 className="text-sm text-gray-400">{title}</h4>
        {href ? (
          <a href={href} className="text-tech-purple font-medium hover:text-tech-teal">{value}</a>
        ) : (
          <p className="text-tech-purple font-medium">{value}</p>
        )}
      </div>
    </div>
  );
};

const SocialIcon = ({
  href,
  icon
}: {
  href: string;
  icon: 'linkedin' | 'github';
}) => {
  const paths: Record<string, JSX.Element> = {
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    github: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1 12.63 12.63 0 0 0 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    )
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-tech-purple flex items-center justify-center text-white hover:bg-tech-dark-purple transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        {paths[icon]}
      </svg>
    </a>
  );
};
