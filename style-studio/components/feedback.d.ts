export interface feedbackType {
    id: number | null;
    created_at: string | null;
    rating: number | null;
    comment: string;
    orderId: number|null;
    user_name: string;
    catalog_name: string;
    created_date: string;

}

export interface tailorFeedbackType{
    id: number | null;
    created_date: string | null;
    rating: number | null;
    comment: string;
    user_name: string;
}