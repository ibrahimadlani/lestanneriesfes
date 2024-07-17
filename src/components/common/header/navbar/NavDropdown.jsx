import React from "react";
import Image from "next/image";

/**
 * NavDropdown component for displaying a dropdown navigation menu.
 *
 * This component renders a dropdown menu with featured items and sections.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object[]} props.data - Data for the dropdown menu.
 * @param {Object[]} props.data.featured - Array of featured items.
 * @param {string} props.data.featured.name - Name of the featured item.
 * @param {string} props.data.featured.href - URL of the featured item.
 * @param {string} props.data.featured.imageSrc - Image source of the featured item.
 * @param {string} props.data.featured.imageAlt - Alt text for the image of the featured item.
 * @param {Object[]} props.data.sections - Array of sections.
 * @param {string} props.data.sections.name - Name of the section.
 * @param {Object[]} props.data.sections.items - Array of items in the section.
 * @param {string} props.data.sections.items.name - Name of the item.
 * @param {string} props.data.sections.items.href - URL of the item.
 * @returns {JSX.Element} A JSX element containing the dropdown navigation menu.
 */
const NavDropdown = ({ data }) => {
  return (
    <>
      <div
        className="absolute inset-0 top-1/2 bg-white shadow"
        aria-hidden="true"
      />
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
            <div className="col-start-2 grid grid-cols-2 gap-x-8">
              {data.featured.map((item) => (
                <div
                  key={item.name}
                  className="group relative text-base sm:text-sm"
                >
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      alt={item.imageAlt}
                      src={item.imageSrc}
                      className="object-cover object-center h-64 w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <a
                    href={item.href}
                    className="mt-6 block font-medium text-gray-900"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 z-10"
                    />
                    {item.name}
                  </a>
                  <p aria-hidden="true" className="mt-1">
                    Shop now
                  </p>
                </div>
              ))}
            </div>
            <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
              {data.sections.map((section) => (
                <div key={section.name}>
                  <p
                    id={`${section.name}-heading`}
                    className="font-medium text-gray-900"
                  >
                    {section.name}
                  </p>
                  <ul
                    role="list"
                    aria-labelledby={`${section.name}-heading`}
                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                  >
                    {section.items.map((item) => (
                      <li key={item.name} className="flex">
                        <a href={item.href} className="hover:text-gray-800">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavDropdown;
