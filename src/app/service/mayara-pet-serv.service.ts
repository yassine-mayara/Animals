import { Injectable } from '@angular/core';
import { Pet } from '../model/mayara-pet.model';

@Injectable({
  providedIn: 'root'
})
export class MayaraPetServService {
  tab_race:string[]=["Chat","Chien","Hamster","Lapin"];
  tab_pet:Pet[];
  constructor() { 
    this.tab_pet=[
      {id:1,pseudo:"Felix",race:"Chat",poids:4.5,note:16.5},
      {id:2,pseudo:"Ratatouille",race:"Hamster",poids:1.2,note:15.5},
      {id:3,pseudo:"Rex",race:"Chien",poids:6.3,note:17.25},
      {id:4,pseudo:"Mimi",race:"Chat",poids:5.1,note:13.75},
      {id:6,pseudo:"Bugs",race:"Lapin",poids:2.9,note:13},
    ]
  }

  getAllPets(){
  return this.tab_pet;
}

delPet(p:Pet)
{
  const pos=this.tab_pet.indexOf(p)
  if(pos!=-1){
    this.tab_pet.splice(pos,1);
  }
}

}
