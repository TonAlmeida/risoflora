"use client"
import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function Carroucel({banners}: {banners: string[] | string}) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    })
  }, [api])

  return (
    <div className="w-full mx-auto overflow-hidden">
      <Carousel setApi={setApi} className="w-full bg-gray-100">
        <CarouselContent className="flex">
          {
              typeof banners != "string" && 
              banners.map((banner, index) => (
              <CarouselItem key={index} className="w-full flex-shrink-0">
                <img
                  src={banner}
                  alt={banner}
                  className="w-full h-96 object-cover"
                />
              </CarouselItem>
            ))
          }
          {
            typeof banners === "string" &&
            <CarouselItem>
              <img
                  src={banners}
                  alt={banners}
                  className="w-full h-96 object-cover"
                />
            </CarouselItem>
          }
        </CarouselContent>
        <CarouselPrevious className="left-7" />
        <CarouselNext className="right-7"/>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}
