export type ProductType = () => {
    name: string;
    url: string;
    description?: string;
    amount?: number;
}