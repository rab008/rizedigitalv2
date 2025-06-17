/**
 * TestimonialCard component for displaying client testimonials
 * @param {Object} props - Component props
 * @param {string} props.quote - Client testimonial text
 * @param {string} props.name - Client name
 * @param {string} props.position - Client position/title
 * @param {string} props.company - Client company
 * @param {string} props.image - Client image URL
 */
const TestimonialCard = ({ quote, name, position, company, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      {/* Quote Icon */}
      <div className="mb-4 text-accent-orange">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-600 mb-6 italic">{quote}</p>
      
      {/* Client Info */}
      <div className="flex items-center">
        {image && (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div>
          <h4 className="font-semibold text-dark-blue">{name}</h4>
          <p className="text-sm text-gray-500">
            {position}{company && `, ${company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
