import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const projects = [
    { id: 1, title: "Project A", image: "/image1.webp" },
    { id: 2, title: "Project B", image: "/image2.webp" },
    { id: 3, title: "Project C", image: "project3.png" }
];

const ProjectSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % projects.length);
        }, 3000); // Change project every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-[2rem] flex justify-center items-center h-[400px] border w-full overflow-hidden">
            <motion.div
                key={projects[index].id}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute w-[500px] h-[300px] flex justify-center items-center border-2 border-gray-400 rounded-lg"
            >
                <img
                    src={projects[index].image}
                    alt={projects[index].title}
                    className="w-full h-full object-cover rounded-lg"
                />
            </motion.div>
        </div>
    );
};

export default ProjectSlider;
