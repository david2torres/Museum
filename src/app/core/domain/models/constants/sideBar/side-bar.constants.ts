import { IModulo } from '@DomainInterfaces/userAuth.interface';

export const HOME_MENU: IModulo = {
  id: 0,
  ordenPresentacion: 0,
  nombre: 'Inicio',
  icono: 'home',
  imagen: '',
  ruta: 'home',
  funcionalidades: [
    {
      ruta: 'dashBoard/home',
      id: 0,
      nombre: '',
      descripcion: '',
      icono: '',
      crear: false,
      leer: false,
      editar: false,
      borrar: false,
      pestanas: [],
    },
  ],
};
