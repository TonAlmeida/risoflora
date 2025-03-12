import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { team } from "@/data/team"
import { Title } from "./ui/Title"

export function OurTeam() {
  return (
    <div className="text-center">
    <Title title="Nosso Time" />
    <div className="w-full flex justify-center py-10">
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-2/3 sm:W-1/4"
            >
            <CarouselContent>
                {team.map((colab, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex italic flex-col-reverse justify-end aspect-square items-center p-6">
                            <p>
                                {colab.testimonial}
                            </p>
                           <div className="flex flex-col items-center p-4">
                                <div className="rounded-full size-32 bg-gray-700 m-3" ></div>
                                <h1 className="text-xl p-1">{colab.name}</h1>
                           </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
            </div>
        </div>
  )
}