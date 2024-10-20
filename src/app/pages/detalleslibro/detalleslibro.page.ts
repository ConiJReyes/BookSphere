import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { DBserviceService } from 'src/app/services/dbservice.service';
import { ToastsService } from 'src/app/services/toasts.service';

@Component({
  selector: 'app-detalleslibro',
  templateUrl: './detalleslibro.page.html',
  styleUrls: ['./detalleslibro.page.scss'],
})
export class DetalleslibroPage implements OnInit {

  libro : any;
  apiService: any;

  constructor(private menuController: MenuController, private toast: ToastsService, private activatedRouter: ActivatedRoute, private route : Router, private storage : NativeStorage, private bd: DBserviceService, ) {

    this.activatedRouter.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation()?.extras.state){
        this.libro = this.route.getCurrentNavigation()?.extras.state?.['libroSeleccionado']
      }
    })

    this.menuController.enable(true, 'MenuPrincipal')
    this.menuController.enable(false, 'MenuAdministrador')
  }


  async anadirGuardados() {
    await this.storage.getItem('usuario_iniciado').then(async id => {
      // Verificar si el libro ya ha sido guardado en favoritos
      const libroGuardado = await this.bd.verificarLibroGuardado(id, this.libro.ISBN);
      if (libroGuardado) {
        // Si el libro ya está guardado, muestra un mensaje
        this.toast.GenerarToast('El libro ya ha sido añadido a favoritos', 3000, 'bottom');
      } else {
        // Si no está guardado, se añade
        this.bd.guardarLibrosPerfil(id, this.libro.ISBN).then(() => {
          this.toast.GenerarToast('Libro guardado con éxito en el Perfil', 3000, 'bottom');
          this.route.navigate(['/feed']);
        });
      }
    }).catch(e => {
      console.error("Error al añadir el libro a guardados:", e);
    });
  }
  
  
  cargarLibros(query: string) {
    this.apiService.buscarLibros(query, 'es').subscribe((response: any) => {
      if (response.items) {
        const nuevosLibros = response.items.map((item: any) => ({
          titulo: item.volumeInfo.title,
          autor: item.volumeInfo.authors?.join(', '),
          ISBN: item.volumeInfo.industryIdentifiers?.[0]?.identifier || 'N/A',
          imagen: item.volumeInfo.imageLinks?.thumbnail || '', 
          nombre_categoria: item.volumeInfo.categories?.join(', ') || 'Sin categoría',
          paginas: item.volumeInfo.pageCount || 0,
          descripcion: item.volumeInfo.description || 'Sin descripción'
        }));

        this.libro = this.libro.concat(nuevosLibros);
      } else {
        console.warn('No se encontraron libros para la consulta:', query);
      }
    }, (error: any) => {
      console.error('Error al cargar libros:', error);
    });
}


  ngOnInit() {
  }

}
