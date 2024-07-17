import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

/**
 * Hamburger button component for opening a menu.
 *
 * This component renders a button with a hamburger icon, typically used for opening
 * a mobile navigation menu. It is only visible on smaller screens (lg:hidden).
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Function} props.action - Function to be called when the button is clicked.
 * @returns {JSX.Element} A JSX element containing the hamburger button.
 */
const Hamburger = ({ action }) => {
  return (
    <div className="flex flex-1 items-center lg:hidden">
      <button
        type="button"
        className="-ml-2 rounded-md bg-white p-2 text-gray-400"
        onClick={() => {
          action(true);
          console.log("Hamburger");
        }}
      >
        <span className="sr-only">Open menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Hamburger;
