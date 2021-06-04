import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;
export const originTypes = ['asia', 'usa', 'europe'] as const;
export type OriginType = typeof originTypes[number];

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

  @Prop({ required: true, enum: originTypes })
  origin: OriginType;

  @Prop({ required: true })
  picture: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
