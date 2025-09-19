import { forwardRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/m";
const paragraph =
  "The Executioners is India’s Web3 content engine, helping projects grow through powerful media and marketing. We simplify complex ideas into clear stories and deliver them through cinematic trailers, event coverage, brand campaigns, and community activations. With deep experience across protocols, startups, and Web3 communities, we combine creativity, strategy, and execution to make brands stand out in the evolving digital space.";
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
            <>
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
              {/* <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word> */}
            </>
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
