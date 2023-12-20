import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { ControllerService } from './module/controller/controller.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [NoteModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, ControllerService, UserService],
})
export class AppModule {}
