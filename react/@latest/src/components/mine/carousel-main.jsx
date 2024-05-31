import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Scroll } from "lucide-react";

export function CarouselSize() {
  const images = [
    "../../../public/img/dragons/dragon1.jpg",
    "../../../public/img/dragons/dragon2.jpg",
  ];
  return (
    <div
      className="w-full flex justify-center h"
      style={{ border: "1px solid red" }}
    >
      <Scroll className="stroke-neutral-100 hover:stroke-orange-500 w-16 h-16" />
      <Carousel>
        <CarouselContent className="w-screen ">
          {images.map((image, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <img src={image} alt="white dragon" className="w-full" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5" />
        <CarouselNext className="right-5" />
      </Carousel>
    </div>
  );
}
