import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_CONNECTION),
  CustomersModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule { }
