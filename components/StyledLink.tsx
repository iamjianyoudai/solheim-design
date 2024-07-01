import Link from "next/link";

type StyledLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  background?: string;
};

const StyledLink = ({
  href,
  className,
  children,
  background,
}: StyledLinkProps) => {
  return (
    <Link
      href={href}
      className={`inline-block text-[11.5px] tracking-[2px] font-bold uppercase text-center ${
        background ? background : "bg-orange-500"
      } py-4 px-5 text-white hover:bg-white hover:text-orange-600 hover:shadow-2xl transition rounded ${className}`}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
