import { Search, MapPin, Bed, Bath, Square, Star, Filter, SlidersHorizontal } from 'lucide-react';

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "Downtown, City Center",
      price: "$450,000",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.8,
      type: "Apartment",
      status: "For Sale"
    },
    {
      id: 2,
      title: "Luxury Family Home",
      location: "Suburban Heights",
      price: "$850,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.9,
      type: "House",
      status: "For Sale"
    },
    {
      id: 3,
      title: "Cozy Studio Loft",
      location: "Arts District",
      price: "$280,000",
      beds: 1,
      baths: 1,
      sqft: 750,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      rating: 4.7,
      type: "Studio",
      status: "For Sale"
    },
    {
      id: 4,
      title: "Waterfront Condo",
      location: "Harbor View",
      price: "$650,000",
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.6,
      type: "Condo",
      status: "For Sale"
    },
    {
      id: 5,
      title: "Spacious Townhouse",
      location: "Garden District",
      price: "$520,000",
      beds: 3,
      baths: 2.5,
      sqft: 2100,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      rating: 4.5,
      type: "Townhouse",
      status: "For Sale"
    },
    {
      id: 6,
      title: "Modern Penthouse",
      location: "Skyline Tower",
      price: "$1,200,000",
      beds: 4,
      baths: 4,
      sqft: 3200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      rating: 4.9,
      type: "Penthouse",
      status: "For Sale"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Properties</h1>
          <p className="text-gray-600">Find your perfect home from our extensive collection</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <div className="space-y-2">
                  {['All', 'House', 'Apartment', 'Condo', 'Townhouse', 'Studio', 'Penthouse'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="space-y-2">
                  {['$100k - $300k', '$300k - $500k', '$500k - $800k', '$800k - $1M', '$1M+'].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <div className="space-y-2">
                  {['Any', '1', '2', '3', '4+'].map((beds) => (
                    <label key={beds} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{beds}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Apply Filters Button */}
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="lg:w-3/4">
            {/* Search and Sort Bar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search properties..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest First</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">Showing {properties.length} properties</p>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                      {property.status}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-600 font-medium">{property.type}</span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 mb-3 flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {property.location}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        {property.beds} beds
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="h-4 w-4" />
                        {property.baths} baths
                      </span>
                      <span className="flex items-center gap-1">
                        <Square className="h-4 w-4" />
                        {property.sqft} sqft
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">
                        {property.price}
                      </span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


