import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Recompensa, Usuario, UsuarioReq } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiBase: string = environment.apiBase;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<Usuario[]>(`${this.apiBase}/usuarios`)
  }

  getUsersToFollow(){
    return this.http.get<any[]>(`${this.apiBase}/usuarios/allToFollow`)
  }

  getUsuarioInfo() {
    return this.http.get<Usuario>(`${this.apiBase}/usuarios/info`)
  }

  getRecompensas(){
    return this.http.get<Recompensa[]>(`${this.apiBase}/usuarios/recompensas`)
  }

  updateUsuario(usuarioReq: UsuarioReq) {
    return this.http.put<Usuario>(`${this.apiBase}/usuarios/update`, usuarioReq)
  }

  deleteUsuario() {
    return this.http.delete<any>(`${this.apiBase}/usuarios/delete`)
  }

  followUsuario(fwId: number) {
    return this.http.put<Boolean>(`${this.apiBase}/usuarios/follow/${fwId}`, {})
  }

  getContactos() {
    return this.http.get<Usuario[]>(`${this.apiBase}/usuarios/follows`)
  }

  get_cancel_Premium() {
    return this.http.put<Boolean>(`${this.apiBase}/usuarios/premium`, {})
  }

  get_buy_Premium() {
    return this.http.put<Boolean>(`${this.apiBase}/usuarios/premiumbycoin`, {})
  }
}
