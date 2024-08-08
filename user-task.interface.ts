export interface User extends Base {
    name: string;
    email: string;
}

export interface Task extends Base {
    title: string;
}

export interface Base {
    id: number;
    department: 'IT' | 'Marketing' | 'Sales' | 'Product'
}