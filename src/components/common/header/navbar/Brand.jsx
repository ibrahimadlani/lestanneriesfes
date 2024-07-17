import Image from "next/image";

/**
 * A functional component that renders the brand logo.
 *
 * This component is hidden on smaller screens and becomes visible on larger screens (lg).
 * It includes an accessible link to the homepage with the brand logo.
 *
 * @component
 * @returns {JSX.Element} A JSX element containing the brand logo with a link to the homepage.
 */
const Brand = () => {
  return (
    <div className="hidden lg:flex lg:flex-1 lg:items-center">
      <a href="/">
        <span className="sr-only">Le Tanneries, Fès</span>
        <Image
          className="h-12 w-auto"
          src="/images/logos/logo_left.svg"
          alt="Le Tanneries, Fès"
          width={50}
          height={50}
        />
      </a>
    </div>
  );
};

export default Brand;
