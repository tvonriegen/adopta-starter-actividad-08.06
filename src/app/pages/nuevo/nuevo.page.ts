import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Perro, PerrosService } from '../../services/perros.service';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonButton,
    IonButtons,
    IonBackButton
  ],
})
export class NuevoPage {

  perro: Perro = {
    id: 0,
    nombre: '',
    tipo: 'Perro',
    raza: '',
    edad: '',
    sexo: '',
    tamano: '',
    vacunada: false,
    descripcion: '',
    foto: 'https://placedog.net/600/600',
    adoptado: false,
  };

  constructor(
    private perrosService: PerrosService,
    private router: Router
  ) {}

  guardar() {
    this.perrosService.agregar(this.perro);
    this.router.navigate(['/galeria']);
  }

}