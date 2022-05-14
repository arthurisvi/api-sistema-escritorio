import { Date } from "mongoose";

export class CreateCustomerDto {
    email: string;
    name: string; 
    cep: string; 
    birthDate: Date;
    cpf: string;
}
