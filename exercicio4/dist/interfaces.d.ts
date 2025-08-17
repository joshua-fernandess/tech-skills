export interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
export interface IProduct {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[];
}
export type UserRole = 'admin' | 'user';
export interface IAdminUser extends IUser {
    role: UserRole;
}
//# sourceMappingURL=interfaces.d.ts.map