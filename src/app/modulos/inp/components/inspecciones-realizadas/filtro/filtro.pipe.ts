import { Pipe, PipeTransform } from '@angular/core';
import { Inspeccion } from '../../../entities/inspeccion';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: Inspeccion[], id: string, usuarioRealiza: string, fechaDesde: Date, fechaHasta: Date): any[] {

   try {

    let lista = arreglo;

    if(id != '' && id != undefined){
      lista = lista.filter(item=>{
        return item.id.toString().includes(id)
      })  
      
    }

    if(usuarioRealiza != '' && usuarioRealiza != undefined){
      lista = lista.filter(item=>{
        if(item.usuarioRegistra!=null){
          return item.usuarioRegistra.email.toLowerCase().includes(usuarioRealiza)
        }
      })  
      
    }
    if(fechaDesde<=fechaHasta){
      lista = lista.filter(x=>{return  new Date(x.fechaRealizada) >= new Date(fechaDesde) && new Date(x.fechaRealizada) <= new Date(fechaHasta)});
    }
    return lista;

   } catch (error) {
    console.log(error)
   }

    
  }

}
