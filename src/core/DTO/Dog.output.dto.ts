import { ApiProperty } from "@nestjs/swagger";

export class DogODto{
    @ApiProperty({
        description: 'Dog Breed Name',
        example: 'african'
    })
    breeds:string[];

    @ApiProperty({
        description: 'Dog Breed Variations',
        example: ['boston', 'english'],
        type: 'array'
    })
    total:number;

    // method for adapting Entity to DTO

}