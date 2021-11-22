import { Injectable } from "@nestjs/common";
import  Axios  from "axios";
import { DogBreed } from "./dog.interface";

@Injectable()
export class DogClient{
    async get(DOGS_URL: string):Promise<DogBreed>{
        const {data}: {data: DogBreed}  = await  Axios.get(DOGS_URL, {
            headers:{
                'Accept':'application/json'
            }
        })
        return data
    }
}