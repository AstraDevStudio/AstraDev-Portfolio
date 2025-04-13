import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Menu and Close icons
// import Draggable from "react-draggable";

// const DraggableComponent = forwardRef(({ children, className = "", ...props }, ref) => {
//     const dragRef = ref || useRef(null);

//     return (
//         <Draggable nodeRef={dragRef} {...props}>
//             <div ref={dragRef} className={`cursor-move ${className}`}>
//                 {children}
//             </div>
//         </Draggable>
//     );
// });



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    // const imageRef = useRef(null);


    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    // Close menu if clicked outside
    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-12 py-4 z-50 ">

                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">Astradev</h1>


                <div className="flex items-center space-x-6 ">
                    {/* Fixed Let's Work Button */}
                    <button className="px-5 py-2 text-white font-medium text-lg border border-white rounded-lg hover:bg-white hover:text-black transition">
                        Let's Work
                    </button>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="relative flex items-center text-white text-lg space-x-2"
                    >
                        {/* Text fades out when clicked */}
                        <motion.span
                            initial={{ opacity: 1 }}
                            animate={{ opacity: isOpen ? 0 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Menu
                        </motion.span>

                        {/* Expanding Dot to Cross */}
                        <motion.div
                            initial={{ width: "8px", height: "8px" }}
                            animate={{
                                width: isOpen || hover ? "40px" : "8px",
                                height: isOpen || hover ? "40px" : "8px",
                                borderRadius: isOpen ? "8px" : "50%",
                                opacity: isOpen ? 1 : 0.9,
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="bg-white flex items-center justify-center"
                        >
                            {isOpen ? <X size={20} className="text-black " /> : hover && <Menu size={20} className="text-black" />}
                        </motion.div>
                    </button>
                </div>
            </nav>

            {/* Full-screen Popup Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-screen h-screen bg-black text-white flex items-center justify-between px-20 py-12 z-40"
                    >
                        {/* Left Side - Menu (Far Left) & Links (Closer to Center) */}

                        <div className="flex  gap-12 justify-between">
                            {/* Menu (Far Left) */}
                            <div className="flex flex-col space-y-6 text-4xl font-light text-left">
                                {["Work", "Services", "About"].map((item) => (
                                    <div key={item} className="group relative w-fit">
                                        <button className="hover:text-gray-400 transition">{item}</button>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                    </div>
                                ))}
                            </div>

                            {/* Links (Left but towards the right side) */}
                            <div className="flex flex-col space-y-4 text-2xl font-normal text-left">
                                {["Instagram", "Dribbble", "astradevsstudio@gmail.com"].map((link) => (
                                    <div key={link} className="group relative w-fit">
                                        <p className="hover:text-white transition">{link}</p>
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                                    </div>
                                ))}
                            </div>


                        </div>

                        {/* Right Side - Large Branding Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="text-9xl md:text-[12rem] font-extrabold text-center leading-none text-white"
                        >
                            ASTRA <br /> DEV
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>




        </>
    );
};

export default Navbar;
