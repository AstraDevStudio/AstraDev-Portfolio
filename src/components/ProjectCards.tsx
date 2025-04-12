import { InfiniteSlide } from "@/components/ui/infinite-slider";
import freelanceastra from '../assets/images/freelanceastra.png'
import clairejane from '../assets/images/claire jane.png'
import bankhotel from '../assets/images/BankHotel.png'
function ProjectCards() {
  return (
    <InfiniteSlide durationOnHover={100} gap={24}>

      <a href="https://clairejane.netlify.app/" className="cursor-pointer">
        <img
          src={clairejane}
          alt="claire jane"
          className="aspect-square w-[15rem] h-[15rem] rounded-[4px]"
        />
      </a>
      <a href="https://freelanceastra.netlify.app/"  className="cursor-pointer" >
        <img
            src={freelanceastra}
            alt="freelanceastra"
            className="aspect-square w-[15rem] h-[15rem] rounded-[4px]"
          />
      </a>
      <a href="https://hotelbank.netlify.app/"  className="cursor-pointer">
        <img
            src={bankhotel}
            alt="bank hotel"
            className="aspect-square w-[15rem] h-[15rem] rounded-[4px]"
          />
      </a>
      <a href="https://clairejane.netlify.app/"  className="cursor-pointer">
        <img
          src={clairejane}
          alt="claire jane"
          className="aspect-square w-[15rem] h-[15rem] rounded-[4px]"
        />
      </a>
      <a href="https://freelanceastra.netlify.app/"  className="cursor-pointer">
        <img
            src={freelanceastra}
            alt="freelanceastra"
            className="aspect-square w-[15rem] h-[15rem] rounded-[4px]"
          />
      </a>
      <a href="https://hotelbank.netlify.app/"  className="cursor-pointer">
        <img
            src={bankhotel}
            alt="bank hotel"
            className="aspect-square w-[15rem] h-[15rem] rounded-[4px]"
          />
      </a>
     
    </InfiniteSlide>
  );
}

export default ProjectCards

