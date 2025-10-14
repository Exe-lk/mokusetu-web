"use client";
import { useState, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Swal from 'sweetalert2';
import GoogleMap from './GoogleMap';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [sectionRef, sectionVisible] = useIntersectionObserver();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }


    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    const fieldMap: { [key: string]: keyof FormData } = {
      'full_name': 'name',
      'email': 'email',
      'message': 'message'
    };
    
    const formFieldName = fieldMap[name] || name;
    
    setFormData(prev => ({
      ...prev,
      [formFieldName]: value
    }));
    
    if (errors[formFieldName as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [formFieldName]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_bnpr04b';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_5amb95v';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'DWe0Lv1ollwMpDup6';

      const { default: emailjs } = await import('@emailjs/browser');

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        {
          publicKey: publicKey,
        }
      );

      await Swal.fire({
        title: 'Message Sent Successfully!',
        text: 'Thank you for contacting us. We\'ll get back to you within 1-2 business days.',
        icon: 'success',
        confirmButtonText: 'Great!',
        confirmButtonColor: '#DD2136',
        background: '#ffffff',
        color: '#1D3557',
        customClass: {
          popup: 'rounded-lg shadow-2xl',
          title: 'text-2xl font-bold',
          htmlContainer: 'text-lg',
          confirmButton: 'px-8 py-3 rounded-lg font-semibold'
        }
      });

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      console.log('Email sent successfully!');
    } catch (error) {
      await Swal.fire({
        title: 'Oops! Something went wrong',
        text: 'We couldn\'t send your message. Please try again or contact us directly.',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#DD2136',
        background: '#ffffff',
        color: '#1D3557',
        customClass: {
          popup: 'rounded-lg shadow-2xl',
          title: 'text-2xl font-bold',
          htmlContainer: 'text-lg',
          confirmButton: 'px-8 py-3 rounded-lg font-semibold'
        }
      });

      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="w-full">
          <div className={`floating-paper p-12 rounded-3xl relative overflow-hidden ${sectionVisible ? 'scale-in visible' : 'scale-in'}`}>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
              <div className="w-20 h-20 mx-auto mb-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="gradient-text-brand">Let's Build the Bridge</span>
              </h2>
              
                <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Tell us about your goals in Japan. We'll respond within 1–2 business days with a personalized strategy.
              </p>
              </div>

              {/* Contact Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="max-w-xl mx-auto w-full space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Name Field */}
                  <div className="floating-label">
                    <input
                      type="text"
                      id="name"
                      name="full_name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                      className={`w-full px-3 py-3 border-2 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-0 focus:outline-none transition-all duration-300 ${
                        errors.name 
                          ? 'border-error focus:border-error' 
                          : 'border-border focus:border-primary'
                      }`}
                    />
                    <label htmlFor="name" className="absolute left-3 top-3 text-muted transition-all duration-300 pointer-events-none bg-white px-2 text-sm">
                      Full Name *
                    </label>
                    {errors.name && (
                      <p className="mt-2 text-sm text-error flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="floating-label">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=" "
                      required
                      className={`w-full px-3 py-3 border-2 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-0 focus:outline-none transition-all duration-300 ${
                        errors.email 
                          ? 'border-error focus:border-error' 
                          : 'border-border focus:border-primary'
                      }`}
                    />
                    <label htmlFor="email" className="absolute left-3 top-3 text-muted transition-all duration-300 pointer-events-none bg-white px-2 text-sm">
                      Email Address *
                    </label>
                    {errors.email && (
                      <p className="mt-2 text-sm text-error flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="floating-label">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    rows={4}
                    required
                    className={`w-full px-3 py-3 border-2 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-0 focus:outline-none transition-all duration-300 resize-none ${
                      errors.message 
                        ? 'border-error focus:border-error' 
                        : 'border-border focus:border-primary'
                    }`}
                  />
                  <label htmlFor="message" className="absolute left-3 top-3 text-muted transition-all duration-300 pointer-events-none bg-white px-2 text-sm">
                    Message *
                  </label>
                  {errors.message && (
                    <p className="mt-2 text-sm text-error flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary text-base px-8 py-3 hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                </div>

              </form>

              {/* Map and Address Section */}
              <div className="mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
                  {/* Address Information Box */}
                  <div className="lg:col-span-1">
                    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                      <div className="mb-4">
                        <h4 className="font-bold text-lg text-gray-800 mb-2">Mokusetu Office</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                        5-16-15 Kirigaoka,Midori-ku
                        <br />
                        Yokohama-shi, Kanagawa-ken<br />
                        226-0016, Japan
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-1 mb-2">
                          <span className="text-yellow-500 text-sm">★★★★★</span>
                          <span className="text-sm font-semibold text-gray-700">4.8</span>
                          <span className="text-xs text-gray-500">(24 reviews)</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        
                        <a 
                          href="https://maps.google.com/?q=35.4442,139.6380" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block text-center text-blue-600 hover:text-blue-800 text-sm underline"
                        >
                          View larger map
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="lg:col-span-2">
                    <GoogleMap className="w-full h-96 rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-accent/30">
                <div className="text-center">
                  <p className="text-sm text-muted mb-4">Or reach out to us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                      href="mailto:info@mokusetu.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-primary/20 text-primary hover:bg-primary/5 hover:border-primary/30 rounded-lg transition-all duration-300 font-medium group shadow-sm hover:shadow-md"
                >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                      <span>info@mokusetu.com</span>
                </a>
                <a
                      href="tel:+81-3-1234-5678"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-secondary/20 text-secondary hover:bg-secondary/5 hover:border-secondary/30 rounded-lg transition-all duration-300 font-medium group shadow-sm hover:shadow-md"
                >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                      <span>+81-3-1234-5678</span>
                </a>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



