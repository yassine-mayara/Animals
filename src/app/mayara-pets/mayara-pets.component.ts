import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pet } from '../model/mayara-pet.model';
import { MayaraPetServService } from '../service/mayara-pet-serv.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mayara-pets',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './mayara-pets.component.html',
  styleUrl: './mayara-pets.component.css'
})
export class MayaraPetsComponent {
  list_pet : Pet[]
  
  constructor(private petServ : MayaraPetServService) {
    this.list_pet = petServ.getAllPets();
  }
  
  suppPet (animal : Pet) {
    let rep = confirm("Etes-vous sur de vouloir supprimer"+animal.pseudo);
    if (rep) {
    this.petServ.delPet(animal);
    console.log("Suppression avec succes :"+animal.pseudo)
  }

  }
}
