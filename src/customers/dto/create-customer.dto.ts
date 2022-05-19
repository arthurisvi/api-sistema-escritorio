import { Date } from "mongoose";

export class CreateCustomerDto {
    email: string;
    name: string; 
    cep: string; 
    street: string;
    city: string;
    state: string;
    maritalStatus: string;
    profession: string;
    birthDate: Date;
    cpf: string;
    rg: string;
    cellphone: string;

}
