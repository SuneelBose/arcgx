import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Element, Link as ScrollLink, scroller } from "react-scroll";

const sections = ["home", "about", "services", "team", "contact"];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const timeout = setTimeout(() => setShowIntro(false), 4500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showIntro) {
      scroller.scrollTo("home", {
        smooth: "easeInOutQuart",
        duration: 800,
        delay: 100,
        offset: -80,
      });
    }
  }, [showIntro]);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 600,
      delay: 100,
      smooth: "easeInOutQuart",
    });
  };

  const Section = ({ id, title, children }) => (
    <Element
      name={id}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-fixed bg-cover bg-center bg-[url('/background.jpg')] transition-all duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sky-300 via-blue-300 to-sky-500 bg-clip-text text-transparent capitalize">
          {title}
        </h2>
        <div>{children}</div>
      </motion.div>
    </Element>
  );

 const teamMembers = [
    {
  name: "Irfan Basha",
  role: (
    <>
      Founder<br />
      Managing Director
    </>
  ),
  email: "irfansadhicq@arcgx.in",
  img: "/Team/irfan.jpg"
},
    {
  name: "Suneel Bose",
  role: (
    <>
      Founder<br />
      Chief Executive Officer
    </>
  ),
  email: "suneelbose@arcgx.in",
  img: "/Team/suneelbose.jpg"
},
    {
  name: "Sushmita",
  role: (
    <>
      Founding Member<br />
      Marketing & Branding Lead
    </>
  ),
  email: "sushmita@arcgx.in",
  img: "/Team/sushmita.jpg"
},
    {
  name: "Kayal Yazini",
  role: (
    <>
      Founding Member<br />
      Innovation and R&D Lead
    </>
  ),
  email: "kayalyazini@arcgx.in",
  img: "/Team/kayal.jpg"
},
    {
  name: "Mathumitha",
  role: (
    <>
      Founding Member<br />
      Product Manager
    </>
  ),
  email: "mathumitha@arcgx.in",
  img: "/Team/mathu.jpg"
},
    {
  name: "Giritharan",
  role: (
    <>
      Founding Member<br />
      Operations Manager
    </>
  ),
  email: "giritharan@arcgx.in",
  img: "/Team/giri.jpg"
},
    {
  name: "Naveen Kumar",
  role: (
    <>
      Founding Member<br />
      Outreach and Community Manager
    </>
  ),
  email: "naveenkumar@arcgx.in",
  img: "/Team/naveen.jpg"
},
    {
  name: "Ajay",
  role: (
    <>
      Founding Member<br />
      Business Development Manager
    </>
  ),
  email: "ajay@arcgx.in",
  img: "/Team/ajay.jpg"
},
  ];

  const services = [
  { title: "GIS Analysis & Mapping", description: "We offer in-depth GIS analysis and mapping solutions tailored to your needs." },
  { title: "Remote Sensing Solutions", description: "Advanced remote sensing techniques to gather precise data for various applications." },
  { title: "Custom GIS Development", description: "Bespoke GIS software development to fit your unique project requirements." },
  { title: "Geological Survey & Modeling", description: "Geological survey and 3D modeling services for accurate earth studies." },
  { title: "Drone-based Data Collection", description: "Using drones to capture high-resolution data for GIS and remote sensing." },
  { title: "Web GIS & Dashboard Services", description: "Development of interactive web GIS platforms and dashboards for better data visualization." },
];

  return (
    <div className="font-sans">
      {showIntro ? (
        <div className="min-h-screen flex justify-center items-center bg-white">
          <motion.div className="text-6xl font-bold flex space-x-2">
            {[..."ArcGX"].map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3 }}
                className={
                  char === "A"
                    ? "text-sky-400"
                    : char === "G"
                    ? "text-black"
                    : char === "X"
                    ? "text-orange-500"
                    : "text-sky-500"
                }
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ) : (
        <>
          <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
  <nav className="flex justify-between items-center p-4 max-w-6xl mx-auto relative">
    <span className="text-2xl font-bold">
      <span className="text-sky-400">Arc</span>
      <span className="text-black">G</span>
      <span className="text-orange-500">X</span>
    </span>

    {/* Hamburger Menu for Mobile */}
    <button
      className="md:hidden text-3xl text-sky-600 focus:outline-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      ☰
    </button>

    {/* Desktop Menu */}
    <ul className="hidden md:flex gap-6 text-sky-700 font-medium">
      {sections.map((sec) => (
        <li key={sec}>
          <ScrollLink
            to={sec}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-orange-500 capitalize"
          >
            {sec}
          </ScrollLink>
        </li>
      ))}
    </ul>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <ul className="absolute top-16 left-4 right-4 bg-white border rounded-lg shadow-md flex flex-col items-start p-4 gap-4 md:hidden z-50">
        {sections.map((sec) => (
          <li key={sec} className="w-full">
            <ScrollLink
              to={sec}
              smooth={true}
              duration={500}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="block w-full text-sky-700 font-medium hover:text-orange-500 capitalize"
            >
              {sec}
            </ScrollLink>
          </li>
        ))}
      </ul>
    )}
  </nav>
</header>


          <main className="pt-24">
            <Section id="home" title="We Map the Future">
              Welcome to ArcGX – your destination for innovative GIS, Remote Sensing, Drone, and Geology solutions.
            </Section>
           <Section id="about" title="About Us">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-4">Innovative Solutions</h3>
      <p className="text-sm text-gray-500">
        ArcGX develops smart spatial solutions that address modern challenges in urban planning, environmental conservation, and disaster management.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-4">Expert Team</h3>
      <p className="text-sm text-gray-500">
        Our team consists of experts in GIS, remote sensing, drone technology, and geology, working together to deliver high-quality solutions.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-4">Data-Driven Decisions</h3>
      <p className="text-sm text-gray-500">
        We use the power of data to drive decision-making processes, enabling sustainable growth and development through precise geospatial insights.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-4">Cutting-Edge Technology</h3>
      <p className="text-sm text-gray-500">
        ArcGX utilizes the latest technologies in GIS and remote sensing to create innovative tools for a wide range of industries.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-4">Collaborative Approach</h3>
      <p className="text-sm text-gray-500">
        We foster collaboration with clients and partners to create solutions that are practical, scalable, and impactful for their needs.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold text-sky-700 mb-4">Sustainable Development</h3>
      <p className="text-sm text-gray-500">
        Our solutions focus on creating a sustainable future through responsible use of technology and careful environmental planning.
      </p>
    </div>
  </div>
</Section>
            <Section id="services" title="Our Services">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
    {services.map((service, index) => (
      <div
        key={index}
        className="group bg-white shadow-lg rounded-2xl p-6 text-center border border-sky-100 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-sky-100 hover:to-blue-100"
      >
        <h3 className="text-lg font-semibold text-sky-700 mb-2 group-hover:text-orange-500">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
      </div>
    ))}
  </div>
</Section>
            <Section id="team" title="Our Team">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center relative group overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mb-4 transition-transform duration-300 group-hover:scale-105"
                    />
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                      <p className="text-sm text-gray-600">{member.role}</p>
                      <a href={`mailto:${member.email}`} className="text-sm text-orange-500">
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
            <Section id="contact" title="Contact Us">
              <p className="mb-4">
                Reach out to us at <a href="mailto:support@arcgx.in" className="text-orange-600">support@arcgx.in</a> for collaborations and service inquiries.
              </p>
              <a
                href="mailto:support@arcgx.in"
                className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-orange-600 transition-colors duration-300"
              >
                Send Email
              </a>
            </Section>
          </main>

          <footer className="text-center text-sm py-6 text-gray-500">
            &copy; {new Date().getFullYear()} ArcGX. All rights reserved.
          </footer>
        </>
      )}
    </div>
  );
}
