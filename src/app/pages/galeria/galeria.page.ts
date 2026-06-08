import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Perro, PerrosService } from '../../services/perros.service';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TarjetaPerroComponent,
    IonButtons,
    IonButton
  ],
})
export class GaleriaPage {

  perros: Perro[] = [];

  constructor(private perrosService: PerrosService) {
    this.perros = this.perrosService.todas();
  }

}