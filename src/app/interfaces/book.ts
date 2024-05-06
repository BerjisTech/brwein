export interface Book {
    title: string;
    author?: string;
    cover: string;
    description?: string;
    price?: number;
    discount?: number;
    discountPrice?: number;
    rating?: number;
    reviews?: number;
    categories?: string[];
    format?: string;
    pages?: number;
    dimensions?: string;
    published?: number;
    language?: string;
    isbn10?: string;
    isbn13?: string;
    stock?: number;
    available?: boolean;
    sale?: boolean;
    salePrice?: number;
}
