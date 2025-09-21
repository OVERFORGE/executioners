import React from "react";
import { useParams } from "react-router-dom";

const features = [
  "Social Media Management",
  "Content",
  "Content Calendar",
  "Community Engagement",
  "Twitter Spaces",
  "SEO",
  "KOL Outreach",
  "Creator Partnerships",
  "Dedicated Social Media Manager",
  "Performance Report",
  "Ads (Budget Exc.)",
];

const packages = [
  {
    id: "0",
    name: "Starter Package",
    values: [
      "X",
      "4 Thread + 4 Reels + 2 Long Form",
      "Basic",
      "60/Replies/Day",
      "1/Month",
      "No",
      "No",
      "No",
      "No",
      "Monthly",
      "Optional",
    ],
  },
  {
    id: "1",
    name: "Growth Package",
    values: [
      "X + Instagram",
      "6 Thread + 6 Reels + 4 Long Form",
      "Detailed + Creative Asset Planning",
      "100/Replies/Day + Whatsapp engagement",
      "2/Month",
      "Landing Page",
      "Limited",
      "Yes",
      "Yes",
      "Weekly",
      "Optional",
    ],
  },
  {
    id: "2",
    name: "Premium Package",
    values: [
      "X + Instagram",
      "8 Thread + 8 Reels + 6 Long Form",
      "Advanced + Analytical Report",
      "200/Replies/Day + Whatsapp-Telegram",
      "2/Month",
      "Full Website",
      "Advanced",
      "Yes",
      "Yes",
      "Weekly",
      "Optional",
    ],
  },
];

const SubscribePage = () => {
  const { packageId } = useParams();

  return (
    <div className="p-6 flex items-center flex-col">
      <h1 className="text-2xl font-bold text-exebeige">
        Your Selected Package
      </h1>

      <div
        className="w-full overflow-x-auto mt-10"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="w-full flex justify-center text-exebeige text-center">
          <div className="flex-1 font-semibold mr-4">
            <div className="h-12"></div>
            {features.map((feature, i) => (
              <div
                key={i}
                className={`min-h-12 flex items-center justify-center bg-exebeige text-black px-2 text-md ${
                  i === 0
                    ? "rounded-tl-lg rounded-tr-lg"
                    : i === -1
                    ? "rounded-bl-lg rounded-br-lg"
                    : ""
                }`}
              >
                {feature}
              </div>
            ))}
          </div>

          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex-1 z-0 ${
                packageId === pkg.id
                  ? "border-exered border-2 rounded-tr-xl rounded-tl-xl"
                  : "hidden lg:block"
              }`}
            >
              <div
                className={`h-12 font-semibold ${
                  packageId === pkg.id
                    ? "bg-exered rounded-tl-lg rounded-tr-lg pt-3 h-[47px]"
                    : "block"
                }`}
              >
                <p className={`${packageId === pkg.id ? "block" : "hidden"}`}>
                  {pkg.name}
                </p>
              </div>

              {pkg.values.map((val, i) => (
                <React.Fragment key={i}>
                  <div className="min-h-12 flex items-center justify-center text-exebeige px-2 text-md text-center">
                    {val}
                  </div>
                  {i !== pkg.values.length - 1 && (
                    <div className="w-full h-[1px] bg-gray-700/60"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubscribePage;
