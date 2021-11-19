import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { DogODto } from "src/core/DTO/Dog.output.dto";
import { DogEntity } from "src/core/Entities/dog.entity";
import { DogsService } from "../../services/Client/dogs.service";
import { GetBreedList } from "../../core/Use_cases/getBreedList";

@Controller('dogs')
export class DogsController{
    constructor( private dogsService: DogsService, private getBreedList: GetBreedList){}
    @Get()
    @ApiOkResponse({ type: DogODto })
    @ApiOperation({ summary: 'Returns list of dog breeds' })
    async getAllBreeds(): Promise<DogODto[]>{
        const response:DogEntity[] = await this.getBreedList.call()
        return response
    }
}
