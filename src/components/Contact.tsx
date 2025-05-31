import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);

    const data = {
      access_key: '74e379d2-47f0-43e5-89fd-aabf19aee5e7', // Replace with your Web3Forms key
      ...formData,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
        setSubmitError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out to me for any inquiries, project discussions, or just to say hello.
            </p>
            <div className="space-y-6">
              <ContactInfo icon={<Mail size={20} />} title="Email" value="zedoyetefe@gmail.com" link="mailto:zedoyetefe@gmail.com" />
              <ContactInfo icon={<Phone size={20} />} title="Phone" value="+251986377366" link="tel:+251986377366" />
              <ContactInfo icon={<MapPin size={20} />} title="Location" value="Bahir Dar, Ethiopia" />
            </div>
            <div className="mt-10">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Connect With Me</h4>
             <a
  href="https://github.com/Zolayetefe"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my GitHub profile"
  className="inline-flex items-center justify-center p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 0.297C5.372 0.297 0 5.67 0 12.297c0 5.291 3.438 9.77 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.239 1.84 1.239 1.07 1.834 2.809 1.304 3.495.996.108-.775.418-1.305.762-1.604-2.665-.303-5.466-1.332-5.466-5.932 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.521.117-3.172 0 0 1.008-.322 3.3 1.23a11.495 11.495 0 0 1 3.003-.403c1.018.005 2.045.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.654 1.651.242 2.869.12 3.172.77.84 1.233 1.911 1.233 3.221 0 4.61-2.803 5.625-5.475 5.921.429.37.823 1.1.823 2.219v3.293c0 .319.192.694.801.576C20.565 22.063 24 17.586 24 12.297 24 5.67 18.627.297 12 .297z" />
  </svg>
</a>

            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
            {submitSuccess && (
              <p className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-200 rounded">
                Your message has been sent successfully!
              </p>
            )}
            {submitError && (
              <p className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-200 rounded">
                Failed to send message. Please try again.
              </p>
            )}

            {['name', 'email', 'subject'].map((field) => (
              <div className="mb-6" key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
                  {field}
                </label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  id={field}
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                  placeholder={`Enter your ${field}`}
                />
                {errors[field] && <p className="text-sm text-red-500 mt-1">{errors[field]}</p>}
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500`}
                placeholder="Write your message here..."
              />
              {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  title,
  value,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}) => (
  <div className="flex items-start">
    <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-600 dark:text-blue-400 mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
      {link ? (
        <a
          href={link}
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;
