export type ServiceType = {
    "service_id": number,
    "service_name": string,
    "service_description": string,
    "service_category": string,
    "service_duration": string,
    "service_price_range": {
      "min": number,
      "max": number
    }
  }