"use client"
import { recomendedServices } from "@/data/recomendedServices"
import { ServiceItem } from "./ServiceItem"
import { Title } from "@/components/ui/Title"

export const RecomendedServices = () => {
    return (
        <div className="bg-white">
            <Title title="Serviços recomendados" />
            <div className="flex flex-wrap justify-around gap-5 sm:gap-10 p-4 sm:p-8">
                {recomendedServices.map(item => 
                    <ServiceItem key={item.service_id} service={item} />
                )}
            </div>
        </div>
    )
}