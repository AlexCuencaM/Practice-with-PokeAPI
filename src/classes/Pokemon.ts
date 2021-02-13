export default class Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;    
    weight: number;
    imageUrl:string;

    constructor(id:number,name:string,
        base_experience:number,
        height:number,weight:number,imageUrl:string){
        this.id = id
        this.name = name
        this.base_experience = base_experience
        this.height = height
        this.weight = weight
        this.imageUrl = imageUrl
    }
}
