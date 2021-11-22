import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiOperation } from "@nestjs/swagger";
import { DogODto } from "src/core/DTO/Dog.output.dto";
import { DogEntity } from "src/core/Entities/dog.entity";
import { GetBreedList } from "../../core/Use_cases/getBreedList";

@Controller('dogs')
export class DogsController{
    constructor( private getBreedList: GetBreedList){}
    @Get()
    @ApiOkResponse({ type: DogODto })
    @ApiOperation({ summary: 'Returns list of dog breeds' })
    async getAllBreeds(): Promise<DogODto>{
        const response:DogODto = await this.getBreedList.call()
        return response
    }

}
