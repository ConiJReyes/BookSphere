import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'perfilusuario',
    loadChildren: () => import('./pages/perfilusuario/perfilusuario.module').then( m => m.PerfilusuarioPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'todos-los-libros',
    loadChildren: () => import('./pages/todos-los-libros/todos-los-libros.module').then( m => m.TodosLosLibrosPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./admin/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'modificar-perfil-usuario',
    loadChildren: () => import('./pages/modificar-perfil-usuario/modificar-perfil-usuario.module').then( m => m.ModificarPerfilUsuarioPageModule)
  },
  {
    path: 'ver-libros-admin',
    loadChildren: () => import('./admin/ver-libros-admin/ver-libros-admin.module').then( m => m.VerLibrosAdminPageModule)
  },
  {
    path: 'anadir-libros-admin',
    loadChildren: () => import('./admin/anadir-libros-admin/anadir-libros-admin.module').then( m => m.AnadirLibrosAdminPageModule)
  },
  {
    path: 'editar-libros-admin',
    loadChildren: () => import('./admin/editar-libros-admin/editar-libros-admin.module').then( m => m.EditarLibrosAdminPageModule)
  },
  {
    path: 'eliminar-libros-admin',
    loadChildren: () => import('./admin/eliminar-libros-admin/eliminar-libros-admin.module').then( m => m.EliminarLibrosAdminPageModule)
  },
  {
    path: 'libros-estrenos',
    loadChildren: () => import('./pages/libros-estrenos/libros-estrenos.module').then( m => m.LibrosEstrenosPageModule)
  },
  {
    path: 'cambiar-contra',
    loadChildren: () => import('./pages/cambiar-contra/cambiar-contra.module').then( m => m.CambiarContraPageModule)
  },
  {
    path: 'editar-borrar-libro-admin',
    loadChildren: () => import('./admin/editar-borrar-libro-admin/editar-borrar-libro-admin.module').then( m => m.EditarBorrarLibroAdminPageModule)
  },
  {
    path: 'acercade',
    loadChildren: () => import('./pages/acercade/acercade.module').then( m => m.AcercadePageModule)
  },
  {
    path: 'recomendaciones',
    loadChildren: () => import('./pages/recomendaciones/recomendaciones.module').then( m => m.RecomendacionesPageModule)
  },
  {
    path: 'ajustes',
    loadChildren: () => import('./pages/ajustes/ajustes.module').then( m => m.AjustesPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./pages/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'ficcion',
    loadChildren: () => import('./pages/categorias-de-libros/ficcion/ficcion.module').then( m => m.FiccionPageModule)
  },
  {
    path: 'no-ficcion',
    loadChildren: () => import('./pages/categorias-de-libros/no-ficcion/no-ficcion.module').then( m => m.NoFiccionPageModule)
  },
  {
    path: 'academicos',
    loadChildren: () => import('./pages/categorias-de-libros/academicos/academicos.module').then( m => m.AcademicosPageModule)
  },
  {
    path: 'especializados',
    loadChildren: () => import('./pages/categorias-de-libros/especializados/especializados.module').then( m => m.EspecializadosPageModule)
  },
  {
    path: 'juveniles',
    loadChildren: () => import('./pages/categorias-de-libros/juveniles/juveniles.module').then( m => m.JuvenilesPageModule)
  },
  {
    path: 'gestion-comentario-libro',
    loadChildren: () => import('./admin/gestion-comentario-libro/gestion-comentario-libro.module').then( m => m.GestionComentarioLibroPageModule)
  },

  {
    path: 'detalleslibro',
    loadChildren: () => import('./pages/detalleslibro/detalleslibro.module').then( m => m.DetalleslibroPageModule)
  },
  {
    path: 'marcadoleyendo',
    loadChildren: () => import('./pages/estadolectura/marcadoleyendo/marcadoleyendo.module').then( m => m.MarcadoleyendoPageModule)
  },
  {
    path: 'marcadoleido',
    loadChildren: () => import('./pages/estadolectura/marcadoleido/marcadoleido.module').then( m => m.MarcadoleidoPageModule)
  },

  {
    path: 'gestion-usuario-admin',
    loadChildren: () => import('./admin/gestion-usuario-admin/gestion-usuario-admin.module').then( m => m.GestionUsuarioAdminPageModule)

  },

  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
