interface catalogType {
    catalogId: number;
    created_at: string;
    name: string;
    size: string;
    brand: string|null;
    condition: string|null;
    material: string|null;
    description: string|null;
    price: number;
    photo: string | null;
    category: string;
    sold: boolean;
    sellerId: string;
    seller_name: string;
    seller_city: string | null;
}

export default catalogType;