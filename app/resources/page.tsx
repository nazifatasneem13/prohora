"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GiPoliceOfficerHead,
  GiShield,
  GiJusticeStar,
  GiBrokenHeart,
  GiMagnifyingGlass,
} from "react-icons/gi";
import { FaPhoneAlt, FaBalanceScale, FaLaptop } from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";

const resources = [
  {
    title: "Bangladesh Police",
    description: "Official law enforcement website for Bangladesh.",
    link: "https://www.police.gov.bd",
    icon: <GiPoliceOfficerHead className="text-4xl text-sky-400" />,
  },
  {
    title: "Rapid Action Battalion (RAB)",
    description: "Specialized crime-fighting force in Bangladesh.",
    link: "https://www.rab.gov.bd/pages/home",
    icon: <GiShield className="text-4xl text-sky-400" />,
  },
  {
    title: "Emergency Hotline - 999",
    description: "Call 999 for police, fire, and ambulance services.",
    link: "tel:999",
    icon: <FaPhoneAlt className="text-4xl text-sky-400" />,
  },
  {
    title: "Bangladesh Army",
    description: "Official website of the Bangladesh Army.",
    link: "https://www.army.mil.bd",
    icon: <MdMilitaryTech className="text-4xl text-sky-400" />,
  },
  {
    title: "National Human Rights Commission",
    description: "For human rights-related assistance.",
    link: "http://www.nhrc.org.bd",
    icon: <GiJusticeStar className="text-4xl text-sky-400" />,
  },
  {
    title: "National Legal Aid Services Organization",
    description: "Provides free legal assistance and advice to citizens.",
    link: "https://nlaso.gov.bd/",
    icon: <FaBalanceScale className="text-4xl text-sky-400" />,
  },

  {
    title: "Domestic Violence Helpline",
    description: "Immediate assistance for domestic abuse situations.",
    link: "tel:109",
    icon: <GiBrokenHeart className="text-4xl text-sky-400" />,
  },
  {
    title: "Criminal Investigation Department (CID)",
    description:
      "Specialized intelligence and investigation wing of Bangladesh Police.",
    link: "https://www.cid.gov.bd",
    icon: <GiMagnifyingGlass className="text-4xl text-sky-400" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function ResourcesPage() {
  const [query, setQuery] = useState("");

  // Filter resources based on search query (case-insensitive)
  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(query.toLowerCase()) ||
      resource.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="relative px-6 pt-32 bg-background min-h-screen dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-foreground bg-gradient-to-b from-foreground to-foreground/80 bg-clip-text text-transparent">
          Resources & Emergency Contacts
        </h1>
        <p className="text-center text-foreground/70 mt-4 max-w-2xl mx-auto">
          Find useful contacts and legal assistance in Bangladesh.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Resources..."
            className="w-full max-w-md rounded-xl border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-foreground placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-white/10 dark:bg-gray-800 dark:text-white dark:placeholder-sky-400"
          />
        </div>

        <motion.div
          className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredResources.map((resource, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 p-6 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 shadow-md dark:shadow-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex flex-col items-center text-center space-y-4">
                <div>{resource.icon}</div>
                <h2 className="text-xl font-semibold text-foreground">
                  {resource.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted text-zinc-600 dark:text-zinc-400">
                  {resource.description}
                </p>
                <Link href={resource.link} target="_blank">
                  <button className="mt-4 flex h-10 items-center justify-center gap-2 rounded-xl bg-sky-500 px-6 text-sm font-medium text-black dark:text-white transition-all hover:bg-sky-400">
                    Visit
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
