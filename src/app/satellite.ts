export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operatinal: boolean;
    launchDate: string;
    constructor(name: string,type :string,launchDate: string,orbitType: string,operatinal: boolean){
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operatinal = operatinal;
        this.launchDate = launchDate;
    }
    shouldShowWarning(): boolean{
       // this.type= 'Space Debris';
        if(this.type === 'Space Debris'){
        return true
        }else{ 
        return false
        }
    };
    
}

