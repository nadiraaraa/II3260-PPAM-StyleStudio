export interface catalogType {
    catalogId: number | null;
    created_at: string | null;
    name: string;
    size: string;
    brand: string|null;
    condition: string|null;
    material: string|null;
    description: string|null;
    price: number| null;
    photo: FileObject | null;
    category: string;
    sold: boolean;
    sellerId: string;
    seller_name: string | null;
    seller_city: string | null;
}

export interface newCatalogType {
    name: string;
    size: string;
    brand: string|null;
    condition: string|null;
    material: string|null;
    description: string|null;
    price: number| null;
    photo: FileObject | null | string;
    category: string;
    sellerId: string;
}

export type FileObject = {
    uri: string;
    type: string;
    name: string;
    size: number;
};