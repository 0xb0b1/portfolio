import { motion } from "framer-motion";

export const HomeContainer = () => {
  const name = "Hey, I'm Paulo";
  const occupation = "Frontend Developer";

  const sentence = {
    hidden: {
      opacity: 1,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.h3
      className="load-screen--message"
      variants={sentence}
      initial="hidden"
      animate="visible"
      style={{
        fontFamily: "Lato",
        fontWeight: 900,
        textAlign: "center",
      }}
    >
      {name.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      ))}

      <br />

      {occupation.split("").map((char, index) => (
        <motion.span
          style={{ color: "#F2DA" }}
          key={char + "-" + index}
          variants={letter}
        >
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
};
