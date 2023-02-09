import { Pipe, PipeTransform } from "@angular/core";
import { Usuario } from "./usuario";

@Pipe({
    name: 'filtro'
})

export class FilterPipe implements PipeTransform{

    // Esta esa una opcion para filtrar sin definir nombre del array ni el tipo de datos

    /*transform(value: any, ...args: any[]) {
        const resulUsuario =[];
        for(const usuario of value){
            if(usuario.usuario.indexOf(args)>-1){
                resulUsuario.push(usuario);
            }
        }
        return resulUsuario;
       }*/

       /*Esta es la forma de filtar usuando directamente el nombre del array que vamos a filtrar 
       y definiendo el tipo de dato de busqueda*/
       transform(usuarios: Usuario[], buscar:string=""):Usuario[] {
        const resulUsuario =[];
        for(const u of usuarios){
            if(u.usuario!.toLowerCase().indexOf(buscar.toLowerCase())>-1){
                resulUsuario.push(u);
            }
        }
        return resulUsuario;
    }
}