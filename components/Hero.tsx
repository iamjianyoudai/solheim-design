import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import StyledLink from "./StyledLink";
import Subtitle from "./ui/Subtitle";
import { heroContent } from "./utils/content";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const {
    title,
    subtitle,
    description,
    link: { href, label },
  } = heroContent.intro;

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  // const imgScroll2 = useTransform(scrollYProgress, [0, 1], ["100%", "50%"]);

  return (
    <section className="pt-32 lg:pt-16 pb-0 " ref={ref}>
      <div className="wrapper">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between lg:gap-6 duration-1000 ease-in-out">
          <div className="lg:w-7/12 z-[3] relative lg:pr-8">
            {" "}
            {subtitle && (
              <Subtitle className="text-sm sm:text-base md:text-lg lg:text-xl">
                {subtitle}
              </Subtitle>
            )}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-gray-800 text-4xl sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl 2xl:text-6xl w-auto lg:w-full mb-4 md:mb-8 "
              >
                {title}
              </motion.h1>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="leading-relaxed text-black/80 text-sm sm:text-base md:text-lg lg:text-xl w-auto lg:w-full mb-10 lg:mb-16"
              >
                {description}
              </motion.p>
            )}
            {label && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <StyledLink href={href}>{label}</StyledLink>
              </motion.p>
            )}
          </div>

          <div className="lg:w-6/12 relative">
            {" "}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              viewport={{
                once: true,
              }}
              className="z-[2] relative bg-cover bg-center"
              style={{
                y: imgScroll1,
                transition: "0.5",
              }}
            >
              <Image
                src={"/hero4.jpg"}
                alt="Hero img"
                className=" max-h-[800px] rounded-lg"
                width={728}
                height={585}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
