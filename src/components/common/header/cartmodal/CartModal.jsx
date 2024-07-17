import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import CartItem from "./CartItem";
import { XMarkIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "/product-filter",
    color: "Salmon",
    imageSrc: "/images/products/purse.png",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "/product-filter",
    color: "Blue",
    imageSrc: "/images/products/purse.png",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

const CartModal = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Popover.Panel className="absolute inset-x-0 top-2 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
        <h2 className="sr-only">Shopping Cart</h2>

        <form className="mx-auto max-w-2xl px-4">
          <div className="lg:hidden py-4 border-b">
            <img
              src="/images/logos/logo_center.svg"
              className="mx-auto h-24 w-24"
            />
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>

          <div className="flex justify-between text-base font-medium text-gray-900 border-t pt-6">
            <p>Subtotal</p>
            <p>$262.00</p>
          </div>
          <p className="mt-0.5 text-xs text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-amber-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-amber-700"
            >
              Checkout
            </a>
          </div>

          <p className="mt-6 text-center lg:hidden">
            <a
              href="#"
              className="text-sm font-medium text-amber-600 hover:text-amber-500"
            >
              <XMarkIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 mx-auto"
                aria-hidden="true"
              />
            </a>
          </p>
        </form>
      </Popover.Panel>
    </Transition>
  );
};

export default CartModal;
