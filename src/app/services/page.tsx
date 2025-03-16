"use client"
import { Input } from "@/components/ui/Input";
import { useState } from "react";
import { Services } from "@/data/services";
import { ServiceItem } from "@/components/ui/ServiceItem";
import { RecomendedServices } from "@/components/RecomendedServices";

export default function Page() {
    const [search, setSearch] = useState<string>('');

    const filteredServices = Services.filter(service => {
        const data = `${service.service_category} ${service.service_description}
            ${service.service_duration} ${service.service_name}`;
        
        return data.toLowerCase().includes(search.toLowerCase());
    })

    return (
        <main className="bg-gray-200">
            <Input search={search} setSearch={setSearch} />
            <div className="flex flex-wrap justify-around gap-5 sm:gap-10 p-4 sm:p-8">
                {filteredServices.length > 0 &&
                    filteredServices.map(item => 
                    <ServiceItem key={item.service_id} service={item} />
                )}
                {filteredServices.length < 1 &&
                <div className="text-gray-400">
                    <p>Ops...</p>
                    <p>nada encontrado</p>    
                </div>}
            </div>
            <RecomendedServices />
        </main>
    )
}