import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { clients } from "@/data/clients"

export function OurClients() {
  return (
    <div className="w-full flex justify-center py-10">
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-4/5"
            >
            <CarouselContent>
                {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex italic flex-col aspect-square items-center justify-center p-6">
                            <p>
                                {client.testimonial}
                            </p>
                           <div className="flex items-center p-4">
                            <div className="rounded-full size-20 bg-gray-700 m-3" ></div>
                            <h1 className="text-xl p-1">{client.name}</h1>
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
  )
}