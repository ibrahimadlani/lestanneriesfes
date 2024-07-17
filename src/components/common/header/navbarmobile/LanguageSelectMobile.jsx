"use client";

import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const languages = [
  { name: "FRE", href: "flags/flag_fra.png", current: true },
  { name: "ENG", href: "flags/flag_uk.png", current: false },
  { name: "ARA", href: "flags/flag_pal.png", current: false },
  { name: "GER", href: "flags/flag_ger.png", current: false },
  { name: "SPA", href: "flags/flag_spa.png", current: false },
];

/**
 * Helper function to combine class names conditionally.
 *
 * @param {...string} classes - List of class names.
 * @returns {string} Combined class names.
 */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * A functional component that renders a mobile language selection dropdown.
 *
 * This component displays a button with the current language flag and a dropdown
 * menu to select other languages, specifically designed for mobile view.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the mobile language selection dropdown.
 */
const LanguageSelectMobile = () => {
  return (
    <Menu as="div" className="ml-4 flow-root lg:ml-8 lg:hidden">
      <div>
        <MenuButton className="group -m-2 flex items-center p-2">
          <Image
            src="/images/flags/flag_fra.png"
            alt="flag"
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            width={24}
            height={24}
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            FRA
          </span>
          <span className="sr-only">current language, select a language</span>
        </MenuButton>
      </div>

      <MenuItems
        transition="all 0.2s ease"
        className="absolute z-10 mt-2 w-24 -ml-4 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {languages.map((option) => (
            <MenuItem key={option.name} as="div">
              <a
                href={`/${option.href}`}
                className={classNames(
                  option.current
                    ? "font-medium text-gray-900"
                    : "text-gray-500",
                  "block px-4 py-2 text-sm data-[focus]:bg-gray-100 flex items-center",
                )}
              >
                <Image
                  src={`/images/${option.href}`}
                  alt="flag"
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 me-2"
                  width={24}
                  height={24}
                />
                {option.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default LanguageSelectMobile;
