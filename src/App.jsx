import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [show, setShow] = useState(true);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  const toggleSwitch = () => {
    return setIsOn(!isOn);
  };
  return (
    <>
      <div>hello world</div>
      {/*


      <motion.div
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "blue",
          margin: "20px",
        }}
        animate={{ scale: 2, transition: { duration: 2 } }}
        initial={{ backgroundColor: "blue" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => console.log("hover started!")}
      />
 
      */}
      {/* 


      <div
        className="switch"
        style={{ marginTop: "90px" }}
        data-isOn={!isOn}
        onClick={toggleSwitch}
      >
        <motion.div layout className="handle" transition={spring} />
      </div>
 

      */}
      <div
        style={{
          width: "100px",
          marginTop: "50px",
          marginBottom: "90px",
          height: "50px",
          backgroundColor: "green",
        }}
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShow(!show)}
        >
          {show ? "REMOVE" : "ADD"}
        </motion.button>
      </div>
      <AnimatePresence>
        {show ? (
          <motion.div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "blue",
            }}
            exit={{ opacity: 0, scale: 1.1, backgroundColor: "red" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ scale: 1, opacity: 1 }}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default App;
