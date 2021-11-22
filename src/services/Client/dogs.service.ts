import { Injectable } from "@nestjs/common";
import { DogAdapter } from "../Adapters/dog.adapter";
import {DogBreed} from './dog.interface'
import { DogClient } from "./dog.client";
import { DogEntity } from "src/core/Entities/dog.entity";
import { DogODto } from "src/core/DTO/Dog.output.dto";

@Injectable()
export class DogsService{
    constructor(private dogAdapter: DogAdapter, private dogClient: DogClient){}
    async apiCall():Promise<DogODto>{
        const DOGS_URL: string = 'https://dog.ceo/api/breeds/list/all';
        const data: DogBreed = await this.dogClient.get(DOGS_URL);
        return this.dogAdapter.adaptDogs(data)       
    }
}

