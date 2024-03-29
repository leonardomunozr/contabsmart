import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router,
                public auth: AuthService ) { }

  ngOnInit() {
  }

  buscarHeroe( termino:string ){
    
    this.router.navigate( ['/buscar',termino] );
  }

}
