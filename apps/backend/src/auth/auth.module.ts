import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import RepositorioUsuarioArray from './usuario-array-repository';
import BcryptProvider from './bcrypt.provider';

@Module({
  providers: [RepositorioUsuarioArray, BcryptProvider],
  controllers: [AuthController],
})
export class AuthModule {}
