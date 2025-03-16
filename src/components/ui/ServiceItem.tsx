import { ServiceType } from "@/types/serviceType"

export const ServiceItem = ({service}: {service: ServiceType}) => {

    const handleServiceClick = (e: React.MouseEvent) => {

    }

    return (
        <div
            onClick={e => handleServiceClick(e)}
            className={` group cursor-pointer p-4
                text-risoflora rounded-lg w-72 h-60
                sm:w-80 sm:h-96 bg-white`}
            >
            <div className="flex flex-col justify-around border h-full p-4 rounded-md">
                <h2 title={service.service_name} className="group-hover:underline text-md sm:text-xl font-bold truncate">{service.service_name}</h2>
                <p title={service.service_description} className="text-sm sm:text-md">{service.service_description}</p>
                <p className="font-light">{service.service_duration}</p>
                <div className="text-sm sm:text-md font-mono font-extrabold">
                    <p>{`De R$:${service.service_price_range.min.toFixed(2)} à R$:${service.service_price_range.max.toFixed(2)}`}</p>
                </div>
            </div>
        </div>
    )
}