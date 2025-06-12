
import { Star, ExternalLink, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const reviewsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    const sections = [heroRef.current, workRef.current, reviewsRef.current, contactRef.current];
    sections.forEach((section) => {
      if (section) {
        section.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
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
      title: "Restaurant Branding",
      description: "Complete visual identity for upscale dining experience",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      category: "Branding"
    },
    {
      id: 2,
      title: "E-commerce Design",
      description: "Modern online store with seamless user experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "Web Design"
    },
    {
      id: 3,
      title: "Tech Startup Identity",
      description: "Innovative branding for cutting-edge technology company",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      category: "Branding"
    },
    {
      id: 4,
      title: "Mobile App UI/UX",
      description: "Intuitive interface design for productivity app",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      category: "App Design"
    },
    {
      id: 5,
      title: "Corporate Website",
      description: "Professional web presence for consulting firm",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      category: "Web Design"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      text: "N&I Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations.",
      rating: 5
    },
    {
      name: "Marco Rodriguez",
      company: "Bella Vista Restaurant",
      text: "The branding work they did for our restaurant was phenomenal. Customer engagement increased by 40% after the rebrand.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      company: "GreenLeaf Consulting",
      text: "Professional, creative, and deadline-oriented. N&I Studio delivered exactly what we needed for our corporate website.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-[0_8px_32px_rgba(139,92,246,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <img 
                  src="/lovable-uploads/cdcb9c1e-7476-4bb5-bf53-27133c86357b.png" 
                  alt="N&I Studio Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold">N&I Studio</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">Home</a>
              <a href="#work" className="hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">Our Work</a>
              <a href="#reviews" className="hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">Reviews</a>
              <a href="#contact" className="hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]">
            Custom Design
            <br />
            <span className="text-purple-400">For Your Niche</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            We create unique visual identities and digital experiences tailored specifically for your industry and vision.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]">
            View Our Work
          </Button>
        </div>
      </section>

      {/* Separator */}
      <div className="h-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      {/* Our Work Section */}
      <section ref={workRef} id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">Our Work</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Explore our portfolio of custom designs created for various niches and industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer group hover:scale-105 hover:rotate-1 shadow-[0_8px_32px_rgba(139,92,246,0.1)] hover:shadow-[0_16px_48px_rgba(139,92,246,0.3)] backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="text-white w-8 h-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-purple-400 text-sm font-medium drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-24 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      {/* Reviews Section */}
      <section ref={reviewsRef} id="reviews" className="py-20 px-4 bg-white/5 backdrop-blur-sm shadow-[inset_0_0_50px_rgba(139,92,246,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">Client Reviews</h2>
            <p className="text-xl text-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">What our clients say about working with us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white/5 border-white/10 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:-rotate-1 shadow-[0_8px_32px_rgba(139,92,246,0.1)] hover:shadow-[0_16px_48px_rgba(139,92,246,0.3)] backdrop-blur-sm group"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-5 h-5 text-purple-400 fill-current group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all duration-300" 
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic group-hover:text-white transition-colors duration-300">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold group-hover:text-purple-300 transition-colors duration-300">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-24 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 drop-shadow-[0_0_20px_rgba(139,92,246,0.4)]">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            Ready to transform your brand with custom design solutions?
          </p>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 shadow-[0_16px_48px_rgba(139,92,246,0.15)] backdrop-blur-sm hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-6">Based in Macedonia, working with clients worldwide</p>
            <a 
              href="mailto:n.and.i.studio33@gmail.com" 
              className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)]"
            >
              n.and.i.studio33@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-16 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 shadow-[0_-8px_32px_rgba(139,92,246,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 N&I Studio. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
