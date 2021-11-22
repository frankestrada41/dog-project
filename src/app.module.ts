import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController} from "./controllers/dogs.controller/dogs.controller"
import { HttpModule } from "@nestjs/axios";
import { DogsService } from "./services/Client/dogs.service";
import { DogAdapter } from "./services/Adapters/dog.adapter";
import { GetBreedList } from './core/Use_cases/getBreedList';
import { DogClient } from './services/Client/dog.client';


@Module({
  imports: [ HttpModule],
  controllers: [AppController, DogsController],
  providers: [AppService, DogsService, DogAdapter, GetBreedList, DogClient],
})
export class AppModule {}
