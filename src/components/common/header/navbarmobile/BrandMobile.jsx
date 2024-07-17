import Image from "next/image";

const BrandMobile = () => {
  return (
    <a href="/" className="lg:hidden">
      <span className="sr-only">La Tannerie, Fès</span>
      <Image
        src="/images/logos/logo_center.svg"
        alt=""
        className="h-14 w-auto"
        width={100}
        height={100}
      />
    </a>
  );
};

export default BrandMobile;
