"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../pricing.module.css";
import { Link } from "react-router-dom";

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

export const frequencies: PricingTierFrequency[] = [
  { id: "1", value: "1", label: "Monthly", priceSuffix: "/month" },
  { id: "2", value: "2", label: "Quarterly", priceSuffix: "/quarterly" },
];

export const tiers: PricingTier[] = [
  {
    name: "Starter Package",
    id: "0",
    href: "/subscribe",
    price: { "1": "$450", "2": "$1200" },
    discountPrice: { "1": "", "2": "" },
    description: `For brands just starting out 
(Recommended for brands with new socials and fresh product launches)`,
    features: [
      `Social media management (X)`,
      `Content: 4 Threads + 4 Reels + 2 Long-form videos per month`,
      `Basic content calendar & posting schedule`,
      `Community engagement (reply-guy style, 60 replies/day)`,
      `Monthly performance dashboard`,
      `Optional: On-ground micro-events & ad campaigns (Budget Exclusive)`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Get Started`,
  },
  {
    name: "Growth Package",
    id: "1",
    href: "/subscribe",
    price: { "1": "$650", "2": "$1800" },
    discountPrice: { "1": "", "2": "" },
    description: `For scaling Web3 brands
(Recommended for brands with new socials seeking wider product reach)`,
    features: [
      `Social media management (X + Instagram)`,
      `Content: 6 Threads + 6 Reels + 4 Long-form videos per month`,
      `Full content calendar & creative asset planning`,
      `Community management (WhatsApp + engagement, 100+ replies/day)`,
      `Twitter Spaces / “Chats on Chain” hosting (2 per month)`,
      `KOL outreach & landing page SEO`,
      `Weekly dashboards with growth strategy recommendations`,
      `Optional: On-ground micro-events & ad campaigns (Budget Exclusive)`,
    ],
    featured: true,
    highlighted: false,
    soldOut: false,
    cta: `Get started`,
  },
  {
    name: "Premium Package",
    id: "2",
    href: "/contact-us",
    price: { "1": "$1100", "2": "$3000" },
    discountPrice: { "1": "", "2": "" },
    description: `For brands aiming industry dominance (Recommended for brands with community presence aiming first raise)`,
    features: [
      `Social media management (X + Instagram + LinkedIn + YouTube)`,
      `Content: 8 Threads + 8 Reels + 6 Long-form videos per month`,
      `Influencer/creator partnerships & podcast-style content`,
      `Advanced content calendar with analytics support`,
      `Full community management (groups, contributors, tracking, 200+ replies/day)`,
      `Twitter Spaces with influencers + branded event hosting (regional/university)`,
      `Founder-level strategy & branding consultation`,
      `Full website SEO + advanced performance reports`,
      `Optional: On-ground micro-events & ad campaigns (Budget Exclusive)`,
    ],
    featured: false,
    highlighted: false,
    soldOut: false,
    cta: `Get started`,
  },
];

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function PricingPage() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className={`flex flex-col w-full items-center ${styles.fancyOverlay}`}>
      <div className="w-full flex flex-col items-center">
        <div className="container  px-4 lg:px-25 relative mt-20 lg:mt-40 font-primary">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-exebeige ">
            Our <span className="text-exered">Pricing</span>
          </h1>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center mt-8">
          <div className="w-full lg:w-auto mx-auto max-w-4xl lg:text-center text-gray-600 font-primary font-semibold">
            Select the tenure
          </div>

          {frequencies.length > 1 && (
            <div className="mt-2 flex justify-center">
              <div
                className="relative flex bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800 rounded-full p-1"
                style={{
                  gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
                }}
              >
                {frequencies.map((option, i) => {
                  const isActive = frequency.value === option.value;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setFrequency(option)}
                      className={`relative z-10 cursor-pointer rounded-full px-3 py-2 text-xs font-semibold transition-all ${
                        isActive
                          ? "text-exebeige"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {option.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-exered dark:bg-exered rounded-full -z-10"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div
            className={`isolate mx-auto mt-4 mb-28 grid max-w-md grid-cols-1 gap-4 lg:mx-0 lg:max-w-none select-none ${
              tiers.length === 2 ? "lg:grid-cols-2" : ""
            } ${tiers.length === 3 ? "lg:grid-cols-3" : ""}`}
          >
            {tiers.map((tier) => (
              <PricingCard key={tier.id} tier={tier} frequency={frequency} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingCard({
  tier,
  frequency,
}: {
  tier: PricingTier;
  frequency: PricingTierFrequency;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${
        tier.featured
          ? "!bg-gray-900 ring-gray-900 dark:!bg-exebeige dark:ring-gray-100 scale-102 z-10"
          : "ring-gray-300/70 dark:ring-gray-700 scale-95"
      } ring-1 rounded-3xl p-8 xl:p-10 relative overflow-hidden transition-transform duration-300 mt-10`}
    >
      <h3
        id={tier.id}
        className={`${
          tier.featured
            ? "text-exebeige dark:text-black"
            : "text-black dark:text-exebeige"
        } text-2xl font-bold tracking-tight`}
      >
        {tier.name}
      </h3>
      <p
        className={`${
          tier.featured
            ? "text-gray-300 dark:text-gray-700"
            : "text-gray-600 dark:text-gray-400"
        } mt-4 text-sm leading-6`}
      >
        {tier.description}
      </p>

      <div className="mt-6 flex items-baseline gap-x-1 h-12 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={frequency.value}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`${
              tier.featured
                ? "text-exebeige dark:text-black"
                : "text-black dark:text-exebeige"
            } text-4xl font-extrabold tracking-tight block`}
          >
            {typeof tier.price === "string"
              ? tier.price
              : tier.price[frequency.value]}
          </motion.span>
        </AnimatePresence>
        <span className="text-gray-600 text-sm font-medium">
          {frequency.priceSuffix}
        </span>
      </div>
      <div className="mt-6 flex justify-center">
        <Link
          to={`/subscribe/${tier.id}`}
          className="px-6 py-2 rounded-xl  border-exered bg-exered/70 border-2 text-white font-semibold hover:bg-red-600 transition w-full text-center"
        >
          Book Now
        </Link>
      </div>

      <motion.ul
        initial={false}
        animate={{ height: expanded ? "auto" : 150 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="mt-8 overflow-hidden space-y-3 text-sm leading-6 text-gray-700 dark:text-gray-600"
      >
        {tier.features.map((feature, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: expanded ? i * 0.05 : 0, duration: 0.3 }}
            className="flex gap-x-3"
          >
            <CheckIcon className="text-exered h-6 w-5 flex-none" />
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      {tier.features.length > 5 && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-sm font-semibold text-exered hover:text-red-700 transition"
          >
            {expanded ? "Show Less ↑" : "Show More ↓"}
          </button>
        </div>
      )}
    </div>
  );
}
