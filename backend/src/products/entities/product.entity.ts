import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({
  toJSON: {
    transform: (doc, ret) => {
      if (doc.picture)
        ret.picture = `${process.env.GOOGLE_API}/${process.env.BUCKET_NAME}/${ret.picture}`;
    },
  },
})
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, enum: ['usa', 'europe', 'asia'] })
  origin: string;

  @Prop()
  picture: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
