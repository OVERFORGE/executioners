import React from "react";
import PageNotFound from "../components/PageNotFound";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-exebeige ">
          Privacy <span className="text-exered">Policy</span>
        </h1>
        <div className="mt-10  h-full rounded-lg p-2 text-exebeige font-semibold">
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Introduction
          </h2>
          <p className="mb-4">
            At <span className="font-bold text-exered">The Executioners</span>,
            we are committed to protecting your privacy. This Privacy Policy
            outlines how we collect, use, and safeguard your personal
            information when you visit our website, register for events, or
            engage with our services.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Information We Collect
          </h2>
          <p className="mb-4">
            We may collect the following types of information:
            <ul className="mt-2 list-disc">
              <li>
                <p>
                  <span className="font-bold">Personal Information</span>: Name,
                  email address, phone number, and other contact details.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Usage Data</span>: Information
                  about your interactions with our website and services.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">
                    Cookies and Tracking Technologies
                  </span>
                  : To improve your browsing experience and analyze website
                  traffic.
                </p>
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your information to:
            <ul className="mt-2 list-disc">
              <li>
                <p>Provide and improve our services.</p>
              </li>
              <li>
                <p>Send event-related updates and notifications.</p>
              </li>
              <li>
                <p>Respond to inquiries and provide customer support.</p>
              </li>
              <li>
                <p>Ensure security and prevent fraudulent activities.</p>
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Sharing Your Information
          </h2>
          <p className="mb-4">
            We do not sell, trade, or share your personal information with third
            parties without your consent, except when required by law or to
            protect our legal rights.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Your Rights
          </h2>
          <p className="mb-4">
            You have the right to access, update, or request the deletion of
            your personal data. To exercise these rights, contact us at{" "}
            <NavLink
              to="/contact-us"
              className="text-exered underline underline-offset-2"
            >
              Contact Us
            </NavLink>
            .
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Data Security
          </h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your data from
            unauthorized access, alteration, or disclosure.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We encourage
            you to review it periodically for any changes.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">Contact Us</h2>
          <p className="mb-4">
            For any questions about this Privacy Policy, please contact us at
            <NavLink
              to="/contact-us"
              className="text-exered underline underline-offset-2"
            >
              Contact Us
            </NavLink>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
