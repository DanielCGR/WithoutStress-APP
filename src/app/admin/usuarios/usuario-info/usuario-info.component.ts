import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditUsuarioComponent } from '../edit-usuario/edit-usuario.component';
import { Recompensa, Usuario } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-usuario-info',
  templateUrl: './usuario-info.component.html',
  styleUrls: ['./usuario-info.component.css']
})
export class UsuarioInfoComponent implements OnInit {

  recompensas!: Recompensa[];

  usuario!: Usuario;
  contactos!: Usuario[];

  constructor(private usuarioService: UsuarioService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsuarioInfo();
    this.getRecompensas();
    this.getContactos();
  }

  getUsuarioInfo(): void {
    this.usuarioService.getUsuarioInfo()
    .subscribe((data: Usuario) => this.usuario=data)
  }

  getRecompensas(): void {
    this.usuarioService.getRecompensas()
    .subscribe((data:Recompensa[]) => this.recompensas = data)
  }

  getContactos(): void {
    this.usuarioService.getContactos()
    .subscribe((data:Usuario[]) => this.contactos = data)
  }

  updateDialog(usuarioReq: any): void {
    const dialogUpd = this.dialog.open(EditUsuarioComponent, {data:{usuario:{nombres: usuarioReq.nombres, 
    apellidos: usuarioReq.apellidos, correo: usuarioReq.correo, password: usuarioReq.password,
    carrera: usuarioReq.carrera, tipo_usuario: usuarioReq.tipo_usuario}}});

    dialogUpd.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    });
  }

  deleteUsuario(): void {
    const ok = confirm(`¿Seguro que desea eliminar el usuario?`);
    if(ok){
      this.usuarioService.deleteUsuario()
      .subscribe(()=>{
        this.router.navigate(['/auth/login']);
      });
    }
  }

  get_cancel_Premium(): void {
    const ok = confirm(`¿Desea realizar esta operación?`);
    if(ok) {
      this.usuarioService.get_cancel_Premium()
      .subscribe(() => {
        this.getUsuarioInfo();
      });
    }
  }

  get_buy_Premium(): void {
    const ok = confirm(`¿Desea pagar por esta operación?`);
    if(ok) {
      this.usuarioService.get_buy_Premium()
      .subscribe(() => {
        this.getUsuarioInfo();
      });
    }
  }

}
