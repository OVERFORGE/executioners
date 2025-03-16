import { forwardRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/m";
const paragraph =
  "We empower Web3 brands to scale by delivering strategic content, impactful marketing campaigns, and expert community management. From creating engaging content to hosting bootcamps and events, we help brands build strong online presence and drive user engagement. Our tailored solutions ensure consistent growth and long-term success in the Web3 space.";
const Paragraph = forwardRef(function Paragraph(props, ref) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.99", "start 0.35"],
  });
  const words = paragraph.split(" ");
  return (
    <div className="font-primary">
      <p ref={ref} className={"paragraph"}>
        {words.map((word, i) => {
          const start = i / words.length;

          const end = start + 1 / words.length;

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
});

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={"word"}>
      <span className={"shadow"}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
