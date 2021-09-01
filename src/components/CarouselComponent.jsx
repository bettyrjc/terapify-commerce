import { useCallback } from "react";
import Image from "next/image";
import Carousel, { consts } from "react-elastic-carousel";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

export const BREAKPOINTS = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 },
];

const IMAGES = [
  {
    id: 1,
    src: "/images/phone1.png",
    alt: "phone",
  },
  {
    id: 2,
    src: "/images/phone2.png",
    alt: "phone",
  },
  {
    id: 3,
    src: "/images/phone3.png",
    alt: "phone",
  },
];

export default function CarouselComponent() {
  const myArrow = useCallback(({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <IoChevronBackCircleOutline size={40} color="white" />
      ) : (
        <IoChevronForwardCircleOutline size={40} color="#57CC99" />
      );
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }, []);

  return (
    <Carousel renderArrow={myArrow} breakPoints={BREAKPOINTS}>
      {IMAGES.map((image) => (
        <div
          key={image.id}
          className="relative w-full pb-10"
          style={{ height: 450 }}
        >
          <Image
            alt={image.alt}
            src={image.src}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </Carousel>
  );
}
