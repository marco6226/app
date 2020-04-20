import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UsuarioService } from '../../../emp/services/usuario.service';
import { CambioPasswdService } from '../../services/cambio-passwd.service';

@Component({
  selector: 'sm-terminosCondiciones',
  templateUrl: 'terminos-condiciones.component.html',
  styleUrls: ['terminos-condiciones.component.scss'],
  providers: [UsuarioService]
})
export class TerminosCondicionesComponent {

  visible: boolean;
  safeHtml: any;
  visibleConfDlg: boolean;
  acepta: boolean;

  loading: boolean;

  constructor(
    public sanitizer: DomSanitizer,
    public authService: AuthService,
    public router: Router,
    public usuarioService: UsuarioService,
    public cambioPasswdService: CambioPasswdService
  ) {
    this.loading = true;
    this.authService.consultarPoliticaDatos()
      .then(resp =>{
        this.safeHtml = sanitizer.bypassSecurityTrustHtml(<any>resp['data']);
        this.loading = false;
      })
      .catch(err =>{
        this.loading = false;
      });
    
    this.authService.getSubjectTerminos().asObservable()
      .subscribe(visible => {
        this.visible = visible;
      });
  }

  abrirConfirmacion(acepta: boolean) {
    this.visibleConfDlg = true;
    this.acepta = acepta;
  }

  marcarAceptacion(acepta: boolean) {
    this.usuarioService.aceptarTerminos(acepta)
      .then(() => {
        this.visibleConfDlg = false;
        this.visible = false;
        if (acepta == false) {
          this.logout();
        }
      })
      .catch(err => {
        alert("Error al realizar la petición");
      });
  }

  logout() {
    this.authService.logout()
      .then(resp => {
        if (navigator['app'] == null)
          this.router.navigate(['/login']).then(() => location.reload());
        else
          navigator['app'].exitApp();
      })
      .catch(err => alert("Se produjo un error al cerrar sesión"));
  }
}
