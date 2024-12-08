import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal: true, // variables de entorno disponibles globalmente en el proyecto
    }),

    // Configurar la conexión con MongoDB usando Mongoose
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Importar ConfigModule para acceder a las variables de entorno
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Acceder a la URI de MongoDB
      }),
      inject: [ConfigService],
    }),

    UsersModule,

    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
