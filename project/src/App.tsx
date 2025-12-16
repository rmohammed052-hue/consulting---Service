import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle, 
  Users, 
  Shield, 
  Globe, 
  Briefcase, 
  ArrowRight,
  ChevronDown,
  Building2,
  Scale,
  UserCheck,
  TrendingUp,
  Navigation
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-nexablue">NexaBridge</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-nexablue hover:text-nexagold transition-colors">About</button>
              <button onClick={() => scrollToSection('founder')} className="text-nexablue hover:text-nexagold transition-colors">Founder</button>
              <button onClick={() => scrollToSection('services')} className="text-nexablue hover:text-nexagold transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="text-nexablue hover:text-nexagold transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
          <div className="absolute top-20 left-10 w-32 h-32 bg-nexagreen/10 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-nexagold/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-nexagreen/5 rounded-full blur-xl"></div>
          
          {/* Bridge-like geometric elements */}
          <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1200 800">
            <path d="M0,400 Q300,200 600,400 T1200,400" stroke="#1F6357" strokeWidth="2" fill="none"/>
            <path d="M0,450 Q300,250 600,450 T1200,450" stroke="#D4AF37" strokeWidth="1" fill="none"/>
            <path d="M0,350 Q300,150 600,350 T1200,350" stroke="#0A2342" strokeWidth="1" fill="none"/>
          </svg>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-nexablue mb-6 leading-tight">
            NexaBridge
            <span className="block text-nexagold">Consulting</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            Connecting people, opportunities, and resources with integrity
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center px-8 py-4 bg-nexagold text-white font-semibold rounded-lg hover:bg-nexagold/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-nexablue" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-nexablue mb-6">About Us</h2>
            <div className="w-24 h-1 bg-nexagold mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                NexaBridge Consulting is an international advisory and facilitation firm. We specialize in building trusted bridges between suppliers, clients, and institutions. Our expertise lies in compliance, due diligence, and sustainable business facilitation across sectors including commodities such as gold and special minerals, migration, and leadership.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Globe className="h-12 w-12 text-nexagreen mx-auto mb-4" />
                  <h3 className="font-semibold text-nexablue">Global Reach</h3>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <Shield className="h-12 w-12 text-nexagreen mx-auto mb-4" />
                  <h3 className="font-semibold text-nexablue">Trusted Partners</h3>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-nexagreen/10 to-nexagold/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="NexaBridge Consulting Logo" 
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-nexablue mb-6">Meet the Founder</h2>
            <div className="w-24 h-1 bg-nexagold mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Founder photo placeholder */}
              <div className="relative mx-auto max-w-sm">
                <img 
                  src="/DSC030984.jpg" 
                  alt="Martine Marjorie Fiedler, Founder of NexaBridge Consulting"
                  className="aspect-square object-cover rounded-2xl border-4 border-white shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-nexagold/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-nexagreen/10 rounded-full blur-xl"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-nexablue">Martine Marjorie Fiedler</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Martine Marjorie Fiedler is the Founder of NexaBridge Consulting. With expertise in international relations, asylum law, and AI innovation, she has advised on global projects spanning migration, leadership, and business development.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Known for her ability to connect diverse stakeholders with integrity, she brings over a decade of experience in building sustainable and transparent partnerships. Her vision is to empower businesses and communities by bridging people, opportunities, and resources worldwide.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-nexagreen/10 text-nexagreen rounded-full text-sm font-medium">International Relations</span>
                <span className="px-3 py-1 bg-nexagold/10 text-nexagold rounded-full text-sm font-medium">AI Innovation</span>
                <span className="px-3 py-1 bg-nexablue/10 text-nexablue rounded-full text-sm font-medium">Business Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-nexablue mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-nexagold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive advisory and facilitation services across multiple sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nexagreen/20">
              <div className="w-16 h-16 bg-nexagreen/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nexagreen/20 transition-colors">
                <Briefcase className="h-8 w-8 text-nexagreen" />
              </div>
              <h3 className="text-xl font-semibold text-nexablue mb-4">Business Facilitation & Compliance</h3>
              <p className="text-gray-600">Comprehensive advisory services ensuring regulatory compliance and sustainable business practices.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nexagold/20">
              <div className="w-16 h-16 bg-nexagold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nexagold/20 transition-colors">
                <Scale className="h-8 w-8 text-nexagold" />
              </div>
              <h3 className="text-xl font-semibold text-nexablue mb-4">Gold & Special Minerals Advisory</h3>
              <p className="text-gray-600">Expert guidance in compliance and trusted sourcing for precious metals and mineral commodities.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nexagreen/20">
              <div className="w-16 h-16 bg-nexagreen/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nexagreen/20 transition-colors">
                <Users className="h-8 w-8 text-nexagreen" />
              </div>
              <h3 className="text-xl font-semibold text-nexablue mb-4">Buyer-Supplier Connections</h3>
              <p className="text-gray-600">Facilitating trusted relationships between buyers and licensed suppliers across global markets.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nexagold/20">
              <div className="w-16 h-16 bg-nexagold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nexagold/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-nexagold" />
              </div>
              <h3 className="text-xl font-semibold text-nexablue mb-4">Leadership & Strategic Consulting</h3>
              <p className="text-gray-600">Strategic guidance and leadership development for sustainable business growth and innovation.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-nexagreen/20">
              <div className="w-16 h-16 bg-nexagreen/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nexagreen/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-nexagreen" />
              </div>
              <h3 className="text-xl font-semibold text-nexablue mb-4">Policy & Strategic Advisory</h3>
              <p className="text-gray-600">Specialized advisory services in policy development, strategic planning, and regulatory compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-nexablue mb-6">Contact Us</h2>
            <div className="w-24 h-1 bg-nexagold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with us for partnerships, advisory, or collaboration.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="group relative inline-block">
                  <button
                    onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfJ2OYu93wFPVP3wVakituorE8YS1KhayJwRcWb5p2tA2cYTQ/viewform?usp=sf_link', '_blank')}
                    className="inline-flex items-center px-8 py-4 bg-nexagold text-nexablue font-semibold rounded-lg hover:bg-nexagreen hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-nexablue text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                    Click to securely submit your inquiry and connect with NexaBridge Consulting
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-nexablue"></div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 max-w-md mx-auto">
                  By submitting the form, you consent to NexaBridge Consulting storing your information to respond to your inquiry, in line with GDPR.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-nexagold/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-nexagold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-nexablue">Email Us</h3>
                    <a href="mailto:info@nexabridgeconsulting.com" className="text-nexagold hover:underline">
                      info@nexabridgeconsulting.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-nexagreen/5 to-nexagold/5 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-nexablue mb-4">Why Choose NexaBridge?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-nexagreen mt-0.5" />
                    <span className="text-gray-600">Decade of international experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-nexagreen mt-0.5" />
                    <span className="text-gray-600">Integrity-focused approach</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-nexagreen mt-0.5" />
                    <span className="text-gray-600">Trusted global partnerships</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-nexagreen mt-0.5" />
                    <span className="text-gray-600">Comprehensive compliance expertise</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-nexagreen/5 to-nexagold/5 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-nexablue mb-6 text-center">Get in Touch</h3>
              <div className="space-y-6">
                <div className="text-center p-6 bg-white/50 rounded-lg">
                  <Mail className="h-12 w-12 text-nexagold mx-auto mb-4" />
                  <h4 className="font-semibold text-nexablue mb-2">Direct Email</h4>
                  <a href="mailto:info@nexabridgeconsulting.com" className="text-nexagold hover:underline text-lg">
                    info@nexabridgeconsulting.com
                  </a>
                </div>
                
                <div className="text-center p-6 bg-white/50 rounded-lg">
                  <Globe className="h-12 w-12 text-nexagreen mx-auto mb-4" />
                  <h4 className="font-semibold text-nexablue mb-2">Global Reach</h4>
                  <p className="text-gray-600">International advisory services worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nexablue text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">NexaBridge Consulting</div>
            <div className="text-center md:text-right">
              <p className="text-white/80">© 2025 NexaBridge Consulting. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;