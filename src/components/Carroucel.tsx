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
import { banners } from "@/data/banners"

export function Carroucel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="w-full mx-auto overflow-hidden">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent className="flex">
          {
            banners.map((banner, index) => (
              <CarouselItem key={index} className="w-full flex-shrink-0">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-96 object-cover" // Define uma altura fixa para todas as imagens
                />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  )
}
