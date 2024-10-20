import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-libro-estrenos',
  templateUrl: './detalle-libro-estrenos.page.html',
  styleUrls: ['./detalle-libro-estrenos.page.scss'],
})
export class DetalleLibroEstrenosPage implements OnInit {
  libro: any; // Objeto para almacenar el libro seleccionado
  cargando: boolean = true; // Variable para manejar el estado de carga

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.cargarLibro(); // Llamamos a la función al inicializar el componente
  }

  // Método para cargar el libro por ID
  cargarLibro() {
    const idParam = this.route.snapshot.paramMap.get('id'); // Obtener el ID del parámetro de la ruta

    if (idParam) { // Verificamos si el ID no es null
      const id = +idParam; // Convertimos a número
      this.apiService.buscarLibroPorId(id).subscribe(
        (data) => {
          this.libro = data; // Asignamos los datos del libro recibido
          this.cargando = false; // Desactivamos el indicador de carga
        },
        (error) => {
          console.error('Error al cargar el libro', error); // Manejamos el error en caso de fallo
          this.cargando = false; // Desactivamos el indicador de carga
        }
      );
    } else {
      console.error('ID del libro no encontrado en la ruta.'); // Manejo de error si el ID es null
      this.cargando = false; // Desactivamos el indicador de carga
    }
  }
}
