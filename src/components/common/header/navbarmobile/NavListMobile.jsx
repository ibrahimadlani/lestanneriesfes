"use client";

import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";

const NavListMobile = ({ navigation }) => {
  return (
    <Tab.Group className="mt-2">
      <div className="border-b border-gray-200">
        <Tab.List className="-mb-px flex space-x-8 px-4">
          {navigation.categories.map((category) => (
            <Tab
              key={category.name}
              className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-amber-600 data-[selected]:text-amber-600"
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels as={Fragment}>
        {navigation.categories.map((category) => (
          <Tab.Panel
            key={category.name}
            className="space-y-10 px-4 pb-8 pt-10 text-gray-500"
          >
            <div className="grid grid-cols-2 gap-x-4">
              {category.featured.map((item) => (
                <div key={item.name} className="group relative text-sm">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <Image
                      alt={item.imageAlt}
                      src={item.imageSrc}
                      className="object-cover object-center"
                      width={24}
                      height={24}
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
            {category.sections.map((section) => (
              <div key={section.name}>
                <p
                  id={`${category.id}-${section.id}-heading-mobile`}
                  className="font-medium text-gray-900"
                >
                  {section.name}
                </p>
                <ul
                  role="list"
                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                  className="mt-6 flex flex-col space-y-6"
                >
                  {section.items.map((item) => (
                    <li key={item.name} className="flow-root">
                      <a
                        href={item.href}
                        className="-m-2 block p-2 text-gray-500"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default NavListMobile;
