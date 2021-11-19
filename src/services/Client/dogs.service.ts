import { Injectable } from "@nestjs/common";
import Axios from "axios";
import { DogAdapter } from "../Adapters/dog.adapter";
import {DogBreed} from './dog.interface'
import { DogODto } from "../../core/DTO/Dog.output.dto";

@Injectable()
export class DogsService{
    constructor(private dogAdapter: DogAdapter){}
    async apiCall():Promise<DogODto[]>{
        const {data}: {data: DogBreed}  = await  Axios.get('https://dog.ceo/api/breeds/list/all', {
            headers:{
                'Accept':'application/json'
            }
        })
        console.log(data)
        return this.dogAdapter.adaptDogs(data)
        
    }
}

