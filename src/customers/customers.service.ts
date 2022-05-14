import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer, CustomerDocument } from './entities/customer.entity';

@Injectable()
export class CustomersService {

  constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>) { }

  create(createCustomerDto: CreateCustomerDto) {
    const customer = new this.customerModel(createCustomerDto);

    return customer.save();
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(id: string) {
    return this.customerModel.findById(id);
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.customerModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateCustomerDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.customerModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
