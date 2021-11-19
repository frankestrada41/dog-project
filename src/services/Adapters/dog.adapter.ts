import { Injectable } from "@nestjs/common";
import { DogEntity } from "src/core/Entities/dog.entity";
import { DogBreed } from "../Client/dog.interface";


@Injectable()
export class DogAdapter {
    adaptDogs(data: DogBreed){
        const allBreeds = []
        for(const [breedName, variations] of Object.entries(data.message) ){
            let breed: DogEntity = {breed: breedName,  variations }
            allBreeds.push(breed)
        }
        return allBreeds
    }
}