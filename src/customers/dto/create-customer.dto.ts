import { Date } from "mongoose";

export class CreateCustomerDto {
    email: string;
    name: string; 
    cep: string; 
    nacionality: string;
    street: string;
    district: string;
    city: string;
    state: string;
    maritalStatus: string;
    profession: string;
    birthDate: Date;
    cpf: string;
    rg: string;
    cellphone: string;
}
