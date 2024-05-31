export interface orderType {
    id: number | null,
    created_at: string,
    sent_at: string,
    received_at: string,
    paymentMethod: string,
    address: string,
    addressName: string,
    reviewed: boolean,
    cat_id:  number | null,
    cat_name: string,
    cat_brand: string,
    cat_size: string,
    cat_condition: string,
    cat_material: string,
    cat_description: string,
    cat_photo: string,
    cat_price:  number | null,
    cat_category: string,
    seller_id: string,
    seller_name: string,
    seller_telephone: string,
    buyer_name: string,
    buyer_telephone: string
}

export interface bookType {
    id: number | null,
    created_at: string,
    cust_name: string,
    tailor_name: string,
    alterCount: number | null,
    createCount: number | null,
    total: number | null,
    paymentMethod: string,
    reviewed: boolean
}

export interface subType {
    id: number | null,
    created_at: string,
    tailorId: number | null,
    subId: number | null,
    paymentMethod: string,
    name: string,
    days: number | null,
    price: price | null
}

export interface subscriptionType {
    id: number | null,
    created_at: string,
    name: string,
    days: number | null,
    price: price | null
    boost: boolean | null
}

