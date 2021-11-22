import { Injectable } from "@nestjs/common";
import { DogsService } from "src/services/Client/dogs.service";
import { DogODto } from "../DTO/Dog.output.dto";
import { DogEntity } from "../Entities/dog.entity";

@Injectable()
export class GetBreedList{
    constructor(private dogsService: DogsService){}
    async call(): Promise<DogODto>{
        const response:DogODto = await this.dogsService.apiCall()
        // response.sort((a,b) =>{
        //     return b.variations.length - a.variations.length
        // });
        return response
    }
}