"use client";

import React, { useState } from "react";
import Brand from "./Brand";
import NavList from "./NavList";
import Hamburger from "./Hamburger";
import BrandMobile from "../navbarmobile/BrandMobile";
import NavbarMobile from "../navbarmobile/NavbarMobile";
import LanguagesSelect from "./LanguagesSelect";
import CurrencySelect from "./CurrencySelect";
import CartOverview from "./CartOverview";

/**
 * Navbar component for the application.
 *
 * This component renders a responsive navigation bar that includes:
 * - Brand logo
 * - Navigation links
 * - Hamburger menu for mobile devices
 * - Language and currency selectors
 * - Cart overview
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the navigation bar.
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center justify-between">
            {/* Logo (lg+) */}
            <Brand />
            {/* Navigation (lg+) */}
            <NavList />

            {/* Navbar Toggle Icon (lg-) */}
            <Hamburger action={setOpen} />

            {/* Logo (lg-) */}
            <BrandMobile />

            <NavbarMobile action={setOpen} isOpen={open} />

            {/* Right Icons (lg+) */}
            <div className="flex flex-1 items-center justify-end">
              <div className="flex items-center lg:ml-8">
                <LanguagesSelect />
                <CurrencySelect />
                <CartOverview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
