import { Link } from 'react-router-dom';

/**
 * ServiceCard component for displaying service information
 * @param {Object} props - Component props
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 * @param {string} props.icon - SVG icon for the service
 * @param {string} props.link - URL to the service detail page
 */
const ServiceCard = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg border border-gray-100 h-full flex flex-col hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-4 text-accent-orange">
        {/* Render the icon */}
        <div dangerouslySetInnerHTML={{ __html: icon }} className="w-12 h-12" />
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-dark-blue">{title}</h3>
      
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <Link 
        to={link} 
        className="text-navy-blue font-medium hover:text-accent-orange transition-colors flex items-center mt-auto"
      >
        See How It Works
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
