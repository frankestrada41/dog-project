import { Injectable } from "@nestjs/common";
import Axios from "axios";
import { map, Observable } from "rxjs";
import {DogBreed} from './dog.interface'
import { HttpService } from "@nestjs/axios";


@Injectable()
export class DogsService{
    constructor(private readonly http: HttpService){}
    async call():Promise<DogBreed>{
        const {data}: {data: DogBreed}  = await  Axios.get('https://dog.ceo/api/breeds/list/all', {
            headers:{
                'Accept':'application/json'
            }
        })
        console.log(data)
        return data

    }
}


// Logic for the controller in case of not having a dogsService
// root(): Observable<AxiosResponse<Dog[]>> {
//     return this.http.get('https://dog.ceo/api/breeds/list/all', {
//         headers:{
//             'Accept': 'application/json'
//         }
//     }).pipe(
//         map(response => response.data)
//     )
    
// }
