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

export type { LoginData, RegistrationData }