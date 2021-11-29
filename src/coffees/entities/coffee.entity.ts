import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Coffee extends Document {
  @Prop()
  name: string;

  @Prop()
  brandName: string;

  @Prop({ default: 0 })
  recommendations: number;

  @Prop([String])
  flavors: string[];
}

export const CoffeSchema = SchemaFactory.createForClass(Coffee);
