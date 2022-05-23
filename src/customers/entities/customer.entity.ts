import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    maritalStatus: string;

    @Prop()
    profession: string;

    @Prop()
    cpf: string;

    @Prop()
    rg: string;

    @Prop()
    nacionality: string;

    @Prop()
    cep: string;

    @Prop()
    street: string;

    @Prop()
    district: string;

    @Prop()
    city: string;

    @Prop()
    state: string;

    @Prop()
    cellphone: string;

    @Prop()
    birthDate: Date;

}

export const CustomerSchema = SchemaFactory.createForClass(Customer);