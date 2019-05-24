import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items:item[] = [
    { id: 1,
      label: 'Escritorio',
      icon: 'home',
      link: 'escritorio' }
   ];
   cookie:string;

  constructor() { }

  ngOnInit() {
    this.AgregarItemsMenu();
  }
  AgregarItemsMenu(){
    let cookies = document.cookie.split(';');

    if (cookies[2].search('alta')>-1){
      this.items.push({
          id: 2,
          label: 'Crear nuevo parte',
          icon: 'edit',
          link: 'nuevo-parte'
      });
    }

    if (cookies[3].search('consulta')>-1 ) {
      this.items.push({
        id: 3,
        label: 'Ver todos los partes',
        icon: 'search',
        link: 'partes'
      });
    }

    this.items.push(
        { id: 4,
          label: 'Contactos',
          icon: 'user',
          link: 'contactos' },
        { id: 5,
          label: 'Licencias',
          icon: 'registration-mark',
          link: 'licencias' },
        { id: 6,
          label: 'Cerrar sesion',
          icon: 'log-in',
          link: '/salir' }
      );

  }

}

interface item{
  id:number;
  label:string;
  icon:string;
  link:string;
}
