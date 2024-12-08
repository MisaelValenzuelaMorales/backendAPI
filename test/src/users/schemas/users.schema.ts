import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class users {
    @Prop({required: true})
    email : string;
    
    @Prop({required: true})
    password : string;
}

export const usersSchema = SchemaFactory.createForClass(users);