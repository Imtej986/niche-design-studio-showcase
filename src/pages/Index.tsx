import { Star, ExternalLink, Instagram, ArrowRight, Sparkles, Palette, Code, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-12");
        }
      });
    }, observerOptions);

    const sections = [heroRef.current, servicesRef.current, workRef.current, reviewsRef.current, ];
    sections.forEach((section) => {
      if (section) {
        section.classList.add("opacity-0", "translate-y-12", "transition-all", "duration-100", "ease-out");
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Digital Branding",
      description: "Complete visual identity for upscale dining experience with modern aesthetics",
      image: "/images/web1.jpg",
      link:"https://digicraft.vercel.app/",
      category: "Branding",
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      id: 2,
      title: "Template Design",
      description: "Modern online store with seamless user experience and conversion optimization",
      image: "/images/web2.jpg",
      link:"https://templateforge.vercel.app/",
      category: "Web Design",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 3,
      title: "Startup Identity",
      description: "Innovative branding for cutting-edge technology company with futuristic appeal",
      image: "/images/web3.jpg",
      category: "Branding",
      link:"https://elite-roofing-sigma.vercel.app/",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 4,
      title: "Web Design",
      description: "Intuitive interface design for productivity app with focus on user engagement",
      image: "/images/web4.jpg",
      category: "3D Web Design",
        link:"https://klackx.vercel.app/",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: 5,
      title: "Web Design",
      description: "Professional web presence for consulting firm with sophisticated design language",
      image: "/images/web4.jpg",
      category: "3D Web Design",
        link:"https://klackx.vercel.app/",
      color: "from-violet-500/20 to-purple-500/20"
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Brand Identity",
      description: "Complete visual identity systems including logos, color palettes, and brand guidelines that resonate with your target audience.",
      features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.",
      features: ["React Development", "Responsive Design", "Performance Optimization", "SEO Ready"]
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive interfaces that drive engagement and conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic design consulting to help your business make informed decisions about your digital presence.",
      features: ["Design Strategy", "Brand Positioning", "Market Analysis", "Growth Planning"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      text: "N&I Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The results speak for themselves.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Marco Rodriguez",
      company: "Bella Vista Restaurant",
      text: "The branding work they did for our restaurant was phenomenal. Customer engagement increased by 40% after the rebrand. Absolutely brilliant work.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      company: "GreenLeaf Consulting",
      text: "Professional, creative, and deadline-oriented. N&I Studio delivered exactly what we needed for our corporate website. Highly recommended.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/5 via-black to-blue-900/5 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-transparent pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                <img 
                  src="/lovable-uploads/cdcb9c1e-7476-4bb5-bf53-27133c86357b.png" 
                  alt="N&I Studio Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">N&I Studio</span>
                <div className="text-xs text-purple-300/60 font-medium">Custom Design Solutions</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
                { name: "Our Work", id: "work" },
                { name: "Reviews", id: "reviews" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 group"
                >
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                  <div className="absolute inset-0 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      
      <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        
        <div className="text-center sm:mt-[-200px] mb-[200px] max-w-5xl mx-auto relative">
          
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <Sparkles className="w-6 h-6 text-purple-400 mr-3 animate-pulse" />
              <span className="text-purple-300 font-medium tracking-wide uppercase text-sm">Premium Design Studio</span>
              <Sparkles className="w-6 h-6 text-purple-400 ml-3 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.6)]">
                Custom Design
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(139,92,246,0.8)]">
                For Your Niche
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              We create unique visual identities and digital experiences tailored specifically for your industry and vision. 
              <span className="text-purple-300"> Elevate your brand to extraordinary.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('work')}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-10 py-4 text-lg rounded-2xl transition-all duration-500 hover:scale-105 shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] border border-white/10"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="px-10 py-4 text-lg rounded-2xl bg-white/5 border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Button>
            </div>
            <iframe src='https://my.spline.design/abstractcosmicmotion-pMWXdO2CkZy2Xei2AiA9YdRs/' className=" absolute z-[-10] top-[400px]" width='100%' height='120%'></iframe>
          </div>
        </div>
        
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-32 mt-[100px] 0 px-4 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="text-purple-300 font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Services
            </h2>
            <p className="text-xl text-gray-400/90 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive design and development services to elevate your brand 
              and create exceptional digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-700 cursor-pointer hover:scale-105 shadow-[0_20px_60px_rgba(139,92,246,0.15)] hover:shadow-[0_30px_80px_rgba(139,92,246,0.3)] backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                      <service.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-purple-300 text-sm font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section ref={workRef} id="work" className="py-32 px-4 relative">
        <iframe src='https://my.spline.design/glowingplanetparticles-FhRg3WhZ3DyRQT1tYyogr6yJ/' className="absolute sm:left-[15%] sm:mt-[150px] mt-[-1000px] sm:w-[70%] sm:h-[50%] w-[100%] h-[100%]" width='70%' height='50%'></iframe>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <span className="text-purple-300 font-semibold tracking-wide uppercase text-sm">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-xl text-gray-400/90 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of custom designs created for various niches and industries. 
              Each project tells a unique story of transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-700 cursor-pointer hover:scale-105 hover:-rotate-1 shadow-[0_20px_60px_rgba(139,92,246,0.15)] hover:shadow-[0_30px_80px_rgba(139,92,246,0.3)] backdrop-blur-sm overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-all duration-700 z-10`} />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center z-20">
                      <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        <a href={project.link} target="_blank"><ExternalLink className="text-white w-6 h-6" /></a>
        
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-purple-400 text-sm font-bold tracking-wide uppercase bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section ref={reviewsRef} id="reviews" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-blue-900/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
              <span className="text-blue-300 font-semibold tracking-wide uppercase text-sm">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Client Reviews
            </h2>
            <p className="text-xl text-gray-400/90 leading-relaxed">
              What our clients say about working with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="group bg-white/5 border-white/10 hover:bg-white/15 transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-[0_20px_60px_rgba(139,92,246,0.15)] hover:shadow-[0_30px_80px_rgba(139,92,246,0.3)] backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/30 group-hover:border-purple-400 transition-colors duration-300"
                    />
                    <div>
                      <p className="font-bold text-lg group-hover:text-purple-300 transition-colors duration-300">
                        {testimonial.name}
                      </p>
                      <p className="text-purple-400 text-sm font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section  id="contact" className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
         
         
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-3xl p-12 border border-purple-500/20 shadow-[0_30px_80px_rgba(139,92,246,0.2)] backdrop-blur-sm hover:shadow-[0_40px_100px_rgba(139,92,246,0.3)] transition-all duration-700 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600" />
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In Touch
            </h3>
            <p className="text-white text-xl md:text-2xl mb-8">
              Based in Macedonia, working with clients worldwide
            </p>
            <a 
              href="mailto:n.and.i.studio33@gmail.com" 
              className="group inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-5 rounded-2xl transition-all duration-500 hover:scale-105 text-xl font-semibold shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:shadow-[0_0_50px_rgba(139,92,246,0.8)] border border-purple-500/20"
            >
              n.and.i.studio33@gmail.com
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-gradient-to-b from-transparent to-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-lg">© 2025 N&I Studio. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Crafting extraordinary digital experiences</p>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-2xl border border-white/10 text-gray-400 hover:text-purple-400 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] backdrop-blur-sm"
            >
              <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
