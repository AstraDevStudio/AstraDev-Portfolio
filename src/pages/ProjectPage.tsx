import React from "react";
import { HeroParallax } from "../components/hero-parallax";
import freelanceastra from '../assets/images/freelanceastra.png'
import clairejane from '../assets/images/claire jane.png'
import bankhotel from '../assets/images/BankHotel.png'
export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
      <div className='m-auto text-white text-left mt-6 mb-32  w-[60rem] '>
                    <h1 className='text-6xl text-left '>
                        Featured Works
                    </h1>
                    <div className="flex flex-col mt-5 text-3xl text-white  font-thin ">
                        <div>Beautiful designs. Eye-catching interactions. Memorable experiences.</div>
                        <div>Development that delivers. Let the work do the talking.</div>
                    </div>

        </div>
        <HeroParallax products={products} />
      </div>
    </div>
  );
}
export const products = [
  {
    title: "Claire Jane",
    link: "https://clairejane.netlify.app/", 
    thumbnail:
      clairejane,
  },
  {
    title: "Freelanceastra",
    link: "https://freelanceastra.netlify.app/",
    thumbnail:
     freelanceastra,
  },
  {
    title: "hotelbank",
    link: "https://hotelbank.netlify.app/",
    thumbnail:
      bankhotel,
  },

  {
    title: "Claire Jane",
    link: "https://clairejane.netlify.app/", 
    thumbnail:
      clairejane,
  },
  {
    title: "Freelanceastra",
    link: "https://freelanceastra.netlify.app/",
    thumbnail:
     freelanceastra,
  },
  {
    title: "hotelbank",
    link: "https://hotelbank.netlify.app/",
    thumbnail:
      bankhotel,
  },

  {
    title: "Claire Jane",
    link: "https://clairejane.netlify.app/", 
    thumbnail:
      clairejane,
  },
  {
    title: "Freelanceastra",
    link: "https://freelanceastra.netlify.app/",
    thumbnail:
     freelanceastra,
  },
  {
    title: "hotelbank",
    link: "https://hotelbank.netlify.app/",
    thumbnail:
      bankhotel,
  },

//   {
//     title: "Editorially",
//     link: "https://editorially.org",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editorially.png",
//   },
//   {
//     title: "Editrix AI",
//     link: "https://editrix.ai",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/editrix.png",
//   },
//   {
//     title: "Pixel Perfect",
//     link: "https://app.pixelperfect.quest",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
//   },

//   {
//     title: "Algochurn",
//     link: "https://algochurn.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
//   },
//   {
//     title: "Aceternity UI",
//     link: "https://ui.aceternity.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
//   },
//   {
//     title: "Tailwind Master Kit",
//     link: "https://tailwindmasterkit.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
//   },
//   {
//     title: "SmartBridge",
//     link: "https://smartbridgetech.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
//   },
//   {
//     title: "Renderwork Studio",
//     link: "https://renderwork.studio",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
//   },

//   {
//     title: "Creme Digital",
//     link: "https://cremedigital.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
//   },
//   {
//     title: "Golden Bells Academy",
//     link: "https://goldenbellsacademy.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
//   },
//   {
//     title: "Invoker Labs",
//     link: "https://invoker.lol",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/invoker.png",
//   },
//   {
//     title: "E Free Invoice",
//     link: "https://efreeinvoice.com",
//     thumbnail:
//       "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
//   },
];
