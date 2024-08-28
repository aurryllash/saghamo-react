interface LoginData {
    email: string;
    password: string;
}
interface RegistrationData {
    username: string;
    email: string;
    phone: number;
    password: string;
}
interface ProductFromBack {
    createdAt: string;
    description: string;
    images: Image[];
    price: number;
    reservedBy: string | null;
    status: string;
    title: string;
    updatedAt: string;
    __v: number;
    _id: string;
}
interface Image {
    public_id: string;
    url: string;
}

export type { LoginData, RegistrationData, ProductFromBack }