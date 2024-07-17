"use client";

import { Popover } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import CartModal from "../cartmodal/CartModal";

/**
 * A functional component that renders a shopping cart overview with a popover.
 *
 * This component includes a button that, when clicked, opens a popover displaying the cart modal.
 * The button shows a shopping bag icon and the number of items in the cart.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the shopping cart overview with a popover.
 */
const CartOverview = () => {
  return (
    <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8 z-20">
      <Popover.Button className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          0
        </span>
        <span className="sr-only">items in cart, view bag</span>
      </Popover.Button>
      <CartModal />
    </Popover>
  );
};

export default CartOverview;
