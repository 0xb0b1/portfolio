import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

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
    <Box>
      <motion.h3
        className="load-screen--message"
        variants={sentence}
        initial="hidden"
        animate="visible"
        style={{
          fontSize: "4rem",
          fontFamily: "Lato",
          fontWeight: 900,
          textAlign: "center",
          marginTop: "5rem",
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
    </Box>
  );
};
