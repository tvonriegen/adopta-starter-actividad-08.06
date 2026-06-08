import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Perro, PerrosService } from '../../services/perros.service';
import { TarjetaPerroComponent } from '../../components/tarjeta-perro/tarjeta-perro.component';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonBadge
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    TarjetaPerroComponent
  ],
})
export class DetallePage {

  perro?: Perro;

  constructor(
    private route: ActivatedRoute,
    private perrosService: PerrosService
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.perro = this.perrosService.obtener(id);
    }
  }

}