export interface Usuario {

    id: number;
    nombres: string;
    apellidos: string;
    correo: string;
    num_act_completas: number;
    num_monedas: number;
    tipo_usuario: string;
    isPremium: boolean;
    following: boolean;
}

export interface UsuarioReq {
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    tipo_usuario: string;
}

export interface Recompensa{
    id: number;
    nombre: string;
    detalles:string;
}