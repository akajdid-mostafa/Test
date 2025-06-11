

import { useState, useEffect } from "react"

// Icon components with proper sizing
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
)

const TruckIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 17h4V5H2v12h3"></path>
    <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"></path>
    <circle cx="7.5" cy="17.5" r="2.5"></circle>
    <circle cx="17.5" cy="17.5" r="2.5"></circle>
  </svg>
)

const AlertTriangleIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    <line x1="12" y1="9" x2="12" y2="13"></line>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
)

const PackageIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
    <line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
)

const ClockIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

const ArrowRightIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
)

const LoaderIcon = ({ className = "w-12 h-12" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} animate-spin`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="2" x2="12" y2="6"></line>
    <line x1="12" y1="18" x2="12" y2="22"></line>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
    <line x1="2" y1="12" x2="6" y2="12"></line>
    <line x1="18" y1="12" x2="22" y2="12"></line>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
  </svg>
)

// Helper function to generate a placeholder image URL for skips
// This function now uses more "realistic" looking placeholders


// Skip Card component
function SkipCard({ skip, onSelect, isSelected }) {
  const totalPrice = Math.round(skip.price_before_vat * (1 + skip.vat / 100));

  return (
    <div
      className={`
        relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        bg-white rounded-xl shadow-lg border-2 cursor-pointer
        ${
          isSelected
            ? "border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-blue-200"
            : "border-gray-100 hover:border-gray-200"
        }
      `}
      onClick={() => onSelect(skip.id)}
    >
      {/* Skip Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center overflow-hidden rounded-t-xl">
        <img
          src="https://i.ibb.co/dwPMwNB7/Business-Skip-Hire.jpg"
          alt={`${skip.size} Yard Skip`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/300x200/B0BEC5/455A64?text=Image+Unavailable";
          }}
        />

        {/* Size Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white font-bold px-3 py-1.5 rounded-full text-sm shadow-md">
            {skip.size} Yards
          </span>
        </div>

        {/* Selection Indicator */}
        {isSelected && (
          <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2 shadow-md">
            <CheckIcon className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{skip.size} Yard Skip</h3>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <ClockIcon className="w-4 h-4 mr-2" />
            <span>{skip.hire_period_days} day hire period</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Road Placement</span>
            {skip.allowed_on_road ? (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <CheckIcon className="w-3 h-3 mr-1" />
                Allowed
              </span>
            ) : (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                <AlertTriangleIcon className="w-3 h-3 mr-1" />
                Not Allowed
              </span>
            )}
          </div>

          {skip.allows_heavy_waste && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Heavy Waste</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                <TruckIcon className="w-3 h-3 mr-1" />
                Accepted
              </span>
            </div>
          )}
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-3xl font-bold text-gray-900">£{totalPrice}</span>
            <span className="text-sm text-gray-500 ml-1">inc. VAT</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card's onClick from firing again
              onSelect(skip.id);
            }}
            className={`
              inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2
              ${
                isSelected
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg focus:ring-blue-500"
                  : "bg-white border-2 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 focus:ring-blue-500"
              }
            `}
          >
            {isSelected ? (
              <>
                <CheckIcon className="w-4 h-4 mr-2" />
                Selected
              </>
            ) : (
              "Select"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App component
export default function App() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSkipId, setSelectedSkipId] = useState(null);

  const API_URL = "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSkips(data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSelectSkip = (id) => {
    setSelectedSkipId(id);
    console.log(`Skip with ID ${id} selected!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="text-center">
          <LoaderIcon className="text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Skip Options</h2>
          <p className="text-gray-500">Finding the perfect skip sizes for you...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangleIcon className="w-12 h-12 text-red-500" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">We couldn't load the skip options. Please try again.</p>
          <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>
        </div>
      </div>
    );
  }

  const selectedSkip = skips.find((s) => s.id === selectedSkipId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <PackageIcon className="w-4 h-4 mr-2" />
              Skip Hire Service
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Choose Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Perfect Skip Size
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional waste disposal made simple. Select from our range of skip sizes, all with transparent pricing
              and flexible hire periods.
            </p>
          </div>
        </div>
      </div>

      {/* Skip Selection Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {skips.map((skip) => (
            <SkipCard key={skip.id} skip={skip} onSelect={handleSelectSkip} isSelected={selectedSkipId === skip.id} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      {selectedSkipId && selectedSkip && (
        <div className="bg-white border-t border-gray-200 sticky bottom-0 shadow-lg z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center">
                <div className="text-green-600 mr-2">
                  <CheckIcon className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium">
                  {selectedSkip.size} Yard Skip Selected - £
                  {Math.round(selectedSkip.price_before_vat * (1 + selectedSkip.vat / 100))}
                </span>
              </div>
              <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Continue to Booking
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
