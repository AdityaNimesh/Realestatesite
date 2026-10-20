import { Users, Award, Target, Heart, CheckCircle, Star } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      experience: "15+ years"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Lead Agent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      experience: "8+ years"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      experience: "10+ years"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "We prioritize our clients' needs and satisfaction above everything else."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every transaction and interaction."
    },
    {
      icon: Users,
      title: "Community",
      description: "We're committed to building strong relationships within our community."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We conduct business with the highest ethical standards and transparency."
    }
  ];

  const achievements = [
    { number: "500+", label: "Properties Sold" },
    { number: "1000+", label: "Happy Clients" },
    { number: "50+", label: "Cities Covered" },
    { number: "15+", label: "Years Experience" },
    { number: "4.9", label: "Client Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About RealEstateApp</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're passionate about helping people find their perfect home and making 
            the real estate journey as smooth and enjoyable as possible.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At RealEstateApp, we believe everyone deserves to find their dream home. 
              Our mission is to simplify the real estate process by providing innovative 
              technology, expert guidance, and personalized service to help our clients 
              make informed decisions about their most important investment.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationships with clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Over the years, we've built a reputation for excellence and trust in the real estate industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of real estate professionals is dedicated to providing 
              exceptional service and expertise to help you achieve your real estate goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RealEstateApp?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technology with human expertise to deliver the best real estate experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Expert Guidance</h3>
              </div>
              <p className="text-gray-600">
                Our experienced agents provide personalized guidance throughout your real estate journey.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Advanced Technology</h3>
              </div>
              <p className="text-gray-600">
                Cutting-edge tools and platforms to streamline your property search and transactions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Transparent Process</h3>
              </div>
              <p className="text-gray-600">
                Complete transparency in all our dealings with clear communication and honest pricing.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Local Expertise</h3>
              </div>
              <p className="text-gray-600">
                Deep knowledge of local markets and neighborhoods to help you make informed decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">24/7 Support</h3>
              </div>
              <p className="text-gray-600">
                Round-the-clock support to answer your questions and address your concerns.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900">Proven Track Record</h3>
              </div>
              <p className="text-gray-600">
                Years of successful transactions and satisfied clients speak to our reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experienced team help you navigate the real estate market and find the perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Properties
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


