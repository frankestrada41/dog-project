import { ApiProperty } from "@nestjs/swagger";

export class DogODto{
    @ApiProperty({
        description: 'Dog Breed Name',
        example: 'african'
    })
    breed:string;

    @ApiProperty({
        description: 'Dog Breed Variations',
        example: ['boston', 'english'],
        type: 'array'
    })
    variations:string[];

    // method for adapting Entity to DTO

}