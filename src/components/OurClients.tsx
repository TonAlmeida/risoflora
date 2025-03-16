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
import { Title } from "@/components/ui/Title"

export function OurClients() {
  return (
    <div className="text-center">
    <Title title="Depoimento de clientes" />
    <div className="w-full flex justify-center py-10">
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-2/3"
            >
            <CarouselContent>
                {clients.map((client, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                    <Card>
                        <CardContent className="flex italic flex-col justify-end aspect-square items-center p-6">
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
        </div>
  )
}