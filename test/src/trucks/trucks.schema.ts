import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class trucks extends Document {
    @Prop({required: true, type: Types.ObjectId})
    user : Types.ObjectId;

    @Prop({required: true})
    year: string;

    @Prop({required: true})
    color: string;

    @Prop({required: true})
    plates: string;
}

export const usersSchema = SchemaFactory.createForClass(trucks);