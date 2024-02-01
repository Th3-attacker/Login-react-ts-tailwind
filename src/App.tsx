// import Login from "./components/Login";
import { motion } from "framer-motion";
function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=" mx-auto w-full h-screen min-w-min  flex flex-col justify-center place-items-center"
    >
      {/* <Login /> */}
    </motion.div>
  );
}

export default App;
