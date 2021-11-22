import { Injectable } from "@nestjs/common";
import { DogAdapter } from "../Adapters/dog.adapter";
import {DogBreed} from './dog.interface'
import { DogClient } from "./dog.client";
import { DogODto } from "src/core/DTO/Dog.output.dto";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DogsService{
    constructor(private dogAdapter: DogAdapter, private dogClient: DogClient, private configService: ConfigService){}   
    async apiCall():Promise<DogODto>{
        const DOGS_URL = this.configService.get<string>('DOGS_URL');
        const data: DogBreed = await this.dogClient.get(DOGS_URL);
        return this.dogAdapter.adaptDogs(data)       
    }
}

