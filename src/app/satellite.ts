export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operatinal: boolean;
    launchDate: string;
    constructor(name: string,type :string,launchDate: string,orbitType: string,operational: boolean){
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operatinal = operational;
        this.launchDate = launchDate;
    }

}
