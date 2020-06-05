import { Component, OnInit, Input } from '@angular/core';
import { Satellite }from "../satellite"

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  @Input() satellites: Satellite[];
  
  constructor() { }

  ngOnInit(): void {
  }

  /*filter(arr: Satellite[], type: string): Satellite[] {
    return arr.filter(item => item.type.toLowerCase() === type.toLowerCase())
  }*/

  spaceCount(satellites: Satellite[],name:string){
    let count=0;
    for(let i=0;i<this.satellites.length;i++){
      if(this.satellites[i].type === name){
       
      count=count+1;
    
      }
    }
    return count;
  }
} 

