import React from "react";
import PageNotFound from "../components/PageNotFound";
import { NavLink } from "react-router-dom";

const TermsOfServices = () => {
  return (
    <div className="terms-of-service">
      <div className="px-4 lg:px-25 relative mt-20  font-primary w-full h-full">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-exebeige ">
          Terms Of <span className="text-exered">Service</span>
        </h1>
        <div className="mt-10  h-full rounded-lg p-2 text-exebeige font-semibold">
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Introduction
          </h2>
          <p className="mb-4">
            By accessing or using the services provided by
            <span className="font-bold text-exered">The Executioners</span>, you
            agree to comply with and be bound by these Terms of Service. If you
            do not agree with these terms, please refrain from using our
            services.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Use of Services
          </h2>
          <p className="mb-4">
            <ul className="mt-2 list-disc">
              <li>
                <p>
                  You must be at least [Insert Age] years old to use our
                  services.
                </p>
              </li>

              <li>
                <p>
                  You agree not to misuse our services, including attempting to
                  disrupt the platform or engaging in unlawful activities.
                </p>
              </li>
            </ul>
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Intellectual Property
          </h2>

          <p className="mb-4">
            All content, logos, and materials on this website are the property
            of <span className="font-bold text-exered">The Executioners</span>{" "}
            and may not be used without permission.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Event Registration
          </h2>
          <p className="mb-4">
            By registering for our events, you agree to provide accurate
            information and abide by the event guidelines. If you have any
            questions or concerns, please contact us at
            <NavLink
              to="/contact-us"
              className="text-exered underline underline-offset-2"
            >
              Contact Us
            </NavLink>
            .
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not liable for any direct, indirect, or incidental damages
            resulting from your use of our services.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Termination
          </h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate your access to our
            services if you violate these terms.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">
            Changes to Terms
          </h2>
          <p className="mb-4">
            We may update these Terms of Service at any time. Continued use of
            our services after changes are posted constitutes your acceptance of
            the revised terms.
          </p>
          <h2 className="text-2xl font-bold mb-2 text-exered/80">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please
            contact us at
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

export default TermsOfServices;
