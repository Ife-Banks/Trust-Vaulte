import { motion } from 'framer-motion';

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: ["Home", "AboutUs", "Use Case", "Pricing"]
    },
    {
      title: "Social media",
      links: ["Facebook", "X (formerly Twitter)", "Instagram", "LinkedIn"]
    },
    {
      title: "Contact Us",
      links: ["Trustvaulte@gmail.com", "+234 80225 022 25"]
    }
  ];

  return (
    <footer className="bg-[#121B30] w-full overflow-hidden">
      <div className="flex flex-col justify-end items-start gap-5 px-5 md:px-10 pt-10 max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col w-full bg-[#18223A] rounded-xl px-5 md:px-10 pt-10 pb-5 gap-10 md:gap-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <aside className="flex flex-col lg:flex-row items-start justify-between gap-10 md:max-lg:gap-10 ">
            <motion.div 
              className="flex flex-col text-center items-center justify-center w-full md:w-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="text-[#838FAE] font-kumah text-3xl md:text-5xl font-semibold">TrustVaulte</h1>
              <p className="text-[#838FAE] font-kumah text-sm md:text-md font-medium mt-2">
                Safeguard what matters most
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-between items-start w-full md:w-[60%] gap-8 md:gap-4">
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-[#B8C1D9] font-kumah text-lg font-medium mb-3 md:mb-4">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2 md:gap-3">
                    {section.links.map((link) => (
                      <motion.li 
                        key={link}
                        whileHover={{ x: 5 }}
                        className="text-[#838FAE] font-kumah text-sm md:text-base font-normal hover:text-[#B8C1D9] cursor-pointer transition-colors"
                      >
                        {link}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </aside>

          <motion.div
            className="text-[#838FAE] font-kumah text-base md:text-lg font-medium flex items-center justify-center md:justify-start gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>Copyright</p>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              className="mt-0.5"
            >
              <path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" 
                stroke="#838FAE" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path d="M14.828 14.828C14.2686 15.3875 13.5559 15.7686 12.78 15.9231C12.004 16.0775 11.1997 15.9984 10.4687 15.6956C9.73772 15.3929 9.11293 14.8802 8.67335 14.2224C8.23377 13.5646 7.99915 12.7912 7.99915 12C7.99915 11.2088 8.23377 10.4354 8.67335 9.7776C9.11293 9.11977 9.73772 8.60708 10.4687 8.30437C11.1997 8.00165 12.004 7.92251 12.78 8.07695C13.5559 8.23139 14.2686 8.61247 14.828 9.172" 
                stroke="#838FAE" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <p>TrustVaulte 2025</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="font-kumah w-full p-1 flex text-6xl sm:text-8xl md:text-[150px] lg:text-[215px] font-semibold bg-gradient-to-t from-[#121B30] from-[1.48%] to-[#172137] bg-clip-text text-transparent overflow-hidden text-center items-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="flex place-self-end -mb-5 md:-mb-15 lg:-mb-15 w-full justify-center md:justify-start">
            TrustVaulte
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;