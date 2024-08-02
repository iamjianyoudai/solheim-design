import Copyright from "./Copyright";
type SectionProps = {
  className: string;
};

const Footer = () => {
  return (
    <footer className={`overflow-hidden w-full h-full bg-white py-16 md:py-24`}>
      <div className="wrapper z-20 relative">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
