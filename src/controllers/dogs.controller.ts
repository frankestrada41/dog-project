import { Controller, Get } from "@nestjs/common";

@Controller('dogs')
export class DogsController{
    @Get()
    findDogs(){
        return 'This action return all dogs'
    }
}
