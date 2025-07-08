import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      className="container p-5 mt-5"
      initial={{ opacity: 0, y: 50 }}       // Start slightly below
      animate={{ opacity: 1, y: 0 }}        // Slide up into place
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <h1 className="mb-4">Welcome to WritAI 🧘‍♂️</h1>
      <p style={{ fontSize: '1.1rem', fontFamily:'Apple Chancery, cursive'  }}>
        WritAI is your personal journaling companion powered by AI. Whether you're feeling overwhelmed, reflective, or just need to vent, we're here to help.
      </p>
      <p style={{ fontSize: '1.1rem', fontFamily:'Apple Chancery, cursive'  }}>
        Each day, we provide you with thoughtful prompts to help you explore your emotions and express yourself freely. Once you submit your journal entry, our AI offers personalized insights and advice — like talking to a calm, non-judgmental friend.
      </p>
      <p style={{ fontSize: '1.1rem', fontFamily:'Apple Chancery, cursive'  }}>
        Your thoughts are yours — safe, private, and valued. No judgments, just reflections.
      </p>
      <p style={{ fontSize: '1.1rem', fontFamily:'Apple Chancery, cursive' }}>
        So take a breath, start writing, and let WritAi guide you to clarity, one thought at a time.
      </p>

      {/* ✅ Centered Button */}
      <div className="d-flex justify-content-center mt-5">
        <a href="/login">
          <button className="btn btn-light px-4 py-2 rounded">
            Start Writing...
          </button>
        </a>
      </div>
    </motion.div>
  );
}

export default About;
