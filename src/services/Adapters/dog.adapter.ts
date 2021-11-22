import { Injectable } from "@nestjs/common";
import { DogODto } from "src/core/DTO/Dog.output.dto";
import { DogEntity } from "src/core/Entities/dog.entity";
import { DogBreed } from "../Client/dog.interface";

@Injectable()
export class DogAdapter {
    adaptDogs(data: DogBreed):DogODto{
        const dogData: DogEntity[] = [];
        for (const dog in data.message) {
            dogData.push({breed: dog})
        }
        const allBreeds:DogODto = {breeds: [], total: 0}
        for (let i = 0; i < dogData.length; i++) {
            allBreeds.breeds.push(dogData[i].breed)
            allBreeds.total += 1
        }
        return allBreeds
    }
}


        // for(const [breedName, variations] of Object.entries(data.message) ){
        //     allBreeds.breeds.push(`${breedName} - ${variations.length} variations`)
        //     allBreeds.total += 1
        // }