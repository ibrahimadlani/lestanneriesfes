"use client";

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import NavDropdown from "./NavDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = {
  categories: [
    {
      id: "cuirs",
      name: "Cuirs",
      featured: [
        {
          name: "Trending",
          href: "/product-filter?sort=trending",
          imageSrc: "/images/products/purse.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "New Arrivals",
          href: "/product-filter?sort=latest",
          imageSrc: "/images/products/purse.jpg",
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
          imageSrc: "/../../images/products/purse.png",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/product-filter",
          imageSrc: "/images/products/purse.jpg",
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
    //   { name: 'Company', href: '/product-filter' },
    //   { name: 'Stores', href: '/product-filter' },
  ],
};

const NavList = () => {
  return (
    <div className="hidden h-full lg:flex">
      {/* Flyout menus */}
      <Popover.Group className="inset-x-0 bottom-0 px-4">
        <div className="flex h-full justify-center space-x-8">
          {navigation.categories.map((category) => (
            <Popover key={category.name} className="flex">
              {({ open }) => (
                <>
                  <div className="relative flex">
                    <Popover.Button
                      className={classNames(
                        open ? "border-amber-600" : "border-transparent",
                        "relative z-10 -mb-px flex gap-x-1 items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out group hover:border-amber-600  outline-none ring-0",
                      )}
                    >
                      <span
                        className={classNames(
                          open
                            ? "border-amber-600 text-amber-600 "
                            : "text-gray-900 border-transparent",
                          "group-hover:border-amber-600 group-hover:text-amber-600",
                        )}
                      >
                        {category.name}
                      </span>
                      <ChevronDownIcon
                        aria-hidden="true"
                        style={{
                          transform: open ? "rotate(180deg)" : "rotate(0)",
                        }}
                        className={classNames(
                          open
                            ? "text-amber-600 border-amber-600 "
                            : "border-gray-400 text-gray-400",
                          "h-5 w-5 flex-none group-hover:border-amber-600 group-hover:text-amber-600 transition duration-200 ease-out",
                        )}
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-20">
                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                      <NavDropdown data={category} />
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          ))}
          {navigation.pages.map((page) => (
            <a
              key={page.name}
              href={page.href}
              className="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out hover:border-amber-600 hover:text-amber-600 border-transparent"
            >
              {page.name}
            </a>
          ))}
        </div>
      </Popover.Group>
    </div>
  );
};

export default NavList;
