"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  CurrencyEuroIcon,
  CurrencyDollarIcon,
  CurrencyPoundIcon,
  CurrencyYenIcon,
} from "@heroicons/react/24/outline";

const currencies = [
  { name: "EUR", icon: CurrencyEuroIcon, current: true },
  { name: "USD", icon: CurrencyDollarIcon, current: false },
  { name: "GBP", icon: CurrencyPoundIcon, current: false },
  { name: "YEN", icon: CurrencyYenIcon, current: false },
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
 * A functional component that renders a currency selection dropdown.
 *
 * This component displays a button with the current currency and a dropdown
 * menu to select other currencies.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the currency selection dropdown.
 */
const CurrencySelect = () => {
  return (
    <Menu as="div" className="ml-4 flow-root lg:ml-8 hidden lg:block">
      <div>
        <MenuButton className="group -m-2 flex items-center p-2">
          <CurrencyEuroIcon
            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            EUR
          </span>
          <span className="sr-only">current language, select a language</span>
        </MenuButton>
      </div>

      <MenuItems
        transition="all 0.2s ease"
        className="absolute z-10 mt-2 w-24 -ml-4 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {currencies.map((currency) => (
            <MenuItem key={currency.name} as="div">
              <a
                href={`/${currency.name}`}
                className={classNames(
                  currency.current
                    ? "font-medium text-gray-900"
                    : "text-gray-500",
                  "block px-4 py-2 text-sm data-[focus]:bg-gray-100 flex items-center",
                )}
              >
                <currency.icon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 me-2"
                  aria-hidden="true"
                />
                {currency.name}
              </a>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default CurrencySelect;
