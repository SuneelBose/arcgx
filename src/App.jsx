import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const sections = [
  {
    id: "home",
    title: "Welcome to ArcGX",
    description:
      "Innovating Geospatial Intelligence with cutting-edge solutions and design.",
    cta: "Explore Services",
  },
  {
    id: "services",
    title: "Our Services",
    description:
      "We specialize in advanced solutions across Remote Sensing, GIS, and Drone Mapping.",
    cta: "Explore Services",
  },
  {
    id: "about",
    title: "About ArcGX",
    description:
      "ArcGX is a geospatial technology startup passionate about transforming location data into real-world solutions. Our diverse team blends tech with creativity to solve modern-day spatial problems.",
    cta: "Meet Our Team",
  },
  {
    id: "team",
    title: "Our Team",
    description: "Meet the brilliant minds behind ArcGX.",
    cta: "Contact Us",
  },
  {
    id: "contact",
    title: "Contact Us",
    description:
      "Get in touch for project collaborations, product demos, or partnership inquiries.",
    cta: "Send Message",
  },
];

const servicesList = [
  "Remote Sensing Data Analysis",
  "Land Use and Land Cover Mapping",
  "UAV/Drone Surveying & Processing",
  "Geospatial Web App Development",
  "Spatial Data Visualization",
  "Custom GIS Solutions",
];

const teamMembers = [
  {
    name: "Suneel Bose K",
    role: "Founder & CEO",
    email: "suneelbose@arcgx.in",
    image: "/team/suneelbose.jpg",
  },
  {
    name: "Irfan Basha S",
    role: "Founder & Managing Director",
    email: "irfansathicq@arcgx.in",
    image: "/team/irfan.jpg",
  },
  {
    name: "Sushmita V",
    role: "Founding Member",
    email: "sushmitha@arcgx.in",
    image: "/team/sushmita.jpg",
  },
  {
    name: "Kayal Yazini N",
    role: "Founding Member",
    email: "kayalyazhini@arcgx.in",
    image: "/team/kayal.jpg",
  },
  {
    name: "Mathumitha AL",
    role: "Founding Member",
    email: "mathumitha@arcgx.in",
    image: "/team/mathu.jpg",
  },
  {
    name: "Giritharan C",
    role: "Founding Member",
    email: "giritharan@arcgx.in",
    image: "/team/giri.jpg",
  },
  {
    name: "Naveen Kumar I",
    role: "Founding Member",
    email: "naveenkumar@arcgx.in",
    image: "/team/naveen.jpg",
  },
  {
    name: "Ajay G",
    role: "Founding Member",
    email: "ajay@arcgx.in",
    image: "/team/ajay.jpg",
  },
];

export default function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setShowHeader(currentScroll < lastScroll || currentScroll < 50);
      lastScroll = currentScroll;

      const sectionOffsets = sections
        .map(({ id }) => {
          const el = document.getElementById(id);
          return el ? { id, offset: el.offsetTop } : null;
        })
        .filter(Boolean);

      const current = sectionOffsets.reduce((closest, section) => {
        if (window.scrollY >= section.offset - 100) {
          return section.id;
        }
        return closest;
      }, sectionOffsets[0].id);

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-sky-100 to-orange-100 text-sky-600">
        <div className="text-2xl font-bold mb-4">Loading {progress}%</div>
        <div className="w-24 h-24 border-4 border-sky-300 border-t-sky-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="scroll-smooth bg-gradient-to-b from-white via-sky-50 via-40% to-orange-50 text-sky-900 font-sans min-h-screen">
      {/* Header & Navigation */}
      {showHeader && (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white z-50 shadow-xl px-8 py-3 rounded-full flex justify-between items-center w-[90%] max-w-5xl transition-all">
          <h1 className="text-2xl font-bold">
            <span className="text-sky-500">Arc</span>
            <span className="text-black">G</span>
            <span className="text-orange-500">X</span>
          </h1>
          <div className="space-x-4">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`capitalize px-3 py-1 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-orange-500 bg-sky-100"
                    : "text-sky-800 hover:text-sky-500 hover:bg-sky-50"
                }`}
              >
                {section.id}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Sections */}
      <div className="pt-32">
        {sections.map((section, i) => (
          <motion.section
            key={section.id}
            id={section.id}
            className="min-h-screen flex flex-col justify-center items-center px-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-sky-500">
              {section.title}
            </h2>
            <p className="max-w-xl mb-6 text-lg text-sky-800">
              {section.description}
            </p>

            {/* Services Section */}
            {section.id === "services" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md p-6 border border-sky-100 hover:shadow-xl hover:-translate-y-1 transition-transform text-left"
                  >
                    <h3 className="text-sky-600 font-semibold text-lg mb-2">
                      {service}
                    </h3>
                    <p className="text-sky-800 text-sm">
                      {`Explore how ArcGX provides top-notch service in ${service.toLowerCase()}.`}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Team Section */}
            {section.id === "team" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {teamMembers.map((member) => (
                  <div
                    key={member.email}
                    className="bg-white rounded-2xl shadow-lg p-4 text-center border border-sky-100 hover:shadow-xl hover:-translate-y-1 transition-transform"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="font-semibold text-sky-700">
                      {member.name}
                    </h3>
                    <p className="text-sm text-sky-500">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-xs text-sky-600 hover:underline"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            )}

            {/* Contact Section */}
            {section.id === "contact" && (
              <div className="mt-8 text-center">
                <a
                  href="mailto:support@arcgx.in"
                  className="inline-block bg-sky-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition shadow-md"
                >
                  Send Mail
                </a>
              </div>
            )}
          </motion.section>
        ))}
      </div>

      <footer className="p-6 text-center text-sky-700 bg-white/50">
        <div className="flex justify-center space-x-6 mb-2 text-2xl">
          <a
            href="https://www.instagram.com/astrocarto.in/profilecard/?igsh=MWp1djcxYjR0M2NtZQ=="
            className="hover:text-sky-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/astrocarto/"
            className="hover:text-sky-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        &copy; {new Date().getFullYear()} ArcGX. All rights reserved.
      </footer>
    </main>
  );
}