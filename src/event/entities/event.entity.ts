import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

@Schema()
export class Event {
    @Prop()
    type: string;

    @Prop()
    name: string

    @Prop(mongoose.SchemaTypes.Mixed)
    payload: Record<string, any>
}

export const EventSchema = SchemaFactory