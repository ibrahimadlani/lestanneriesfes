"use client";

import React, { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import NavListMobile from "./NavListMobile";
import LanguageSelectMobile from "../navbarmobile/LanguageSelectMobile";
import CurrencySelectMobile from "./CurrencySelectMobile";

const navigation = {
  categories: [
    {
      id: "cuirs",
      name: "Cuirs",
      featured: [
        {
          name: "Trending",
          href: "/product-filter?sort=trending",
          imageSrc: "/../../public/images/products/purse.png",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "/product-filter?sort=latest",
          imageSrc: "/images/products/purse.png",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "sacs",
          name: "Sacs",
          items: [
            { name: "Sac à dos", href: "/product-filter?categorie=backpack" },
            {
              name: "Sac de voyage",
              href: "/product-filter?categorie=backpack",
            },
            { name: "Sac à main", href: "/product-filter?categorie=backpack" },
            { name: "Saccoche", href: "/product-filter?categorie=backpack" },
          ],
        },
        {
          id: "accessoirs",
          name: "Accessoirs",
          items: [
            { name: "Babouches", href: "/product-filter" },
            { name: "Trousses", href: "/product-filter" },
            { name: "Bracelets", href: "/product-filter" },
            { name: "Portefeuilles", href: "/product-filter" },
            { name: "Porte-monnaies", href: "/product-filter" },
          ],
        },
        {
          id: "decorations",
          name: "Décorations",
          items: [
            { name: "Barbukas", href: "/product-filter" },
            { name: "Bindir", href: "/product-filter" },
            { name: "Figurines", href: "/product-filter" },
            { name: "Pouffes", href: "/product-filter" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/product-filter",
          imageSrc: "/images/products/purse.png",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/product-filter",
          imageSrc: "/images/products/purse.png",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "/product-filter" },
            { name: "Pants", href: "/product-filter" },
            { name: "Sweaters", href: "/product-filter" },
            { name: "T-Shirts", href: "/product-filter" },
            { name: "Jackets", href: "/product-filter" },
            { name: "Activewear", href: "/product-filter" },
            { name: "Browse All", href: "/product-filter" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "/product-filter" },
            { name: "Wallets", href: "/product-filter" },
            { name: "Bags", href: "/product-filter" },
            { name: "Sunglasses", href: "/product-filter" },
            { name: "Hats", href: "/product-filter" },
            { name: "Belts", href: "/product-filter" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "/product-filter" },
            { name: "Counterfeit", href: "/product-filter" },
            { name: "Full Nelson", href: "/product-filter" },
            { name: "My Way", href: "/product-filter" },
          ],
        },
      ],
    },
  ],
  pages: [
    // { name: 'Company', href: '/product-filter' },
    // { name: 'Stores', href: '/product-filter' },
  ],
};

/**
 * NavbarMobile component for displaying the mobile version of the navigation menu.
 *
 * This component renders a mobile navigation drawer with categories, featured items,
 * language and currency selectors.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.action - Function to control the visibility of the mobile menu.
 * @param {boolean} props.isOpen - State to determine if the mobile menu is open or closed.
 * @returns {JSX.Element} A JSX element containing the mobile navigation menu.
 */
const NavbarMobile = ({ action, isOpen }) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={action}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-1000"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div className="flex px-4 pb-2 pt-5">
                <button
                  type="button"
                  onClick={() => action(false)}
                  className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              <NavListMobile navigation={navigation} />

              <div className="border-t border-gray-200 px-4 py-6 flex">
                <LanguageSelectMobile />
                <CurrencySelectMobile />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default NavbarMobile;
