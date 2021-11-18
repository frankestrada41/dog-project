import { Controller, Get } from "@nestjs/common";
import { DogsService } from "../../services/Client/dogs.service";

@Controller('dogs')
export class DogsController{
    constructor( private dogsService: DogsService){}
    @Get()
    async getAllBreeds(){
        const response = await this.dogsService.call()
    }
}
