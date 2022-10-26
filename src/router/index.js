import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '@/components/Inicio';
import Contacto from '@/components/Contacto';
import AgregarPelicula from '@/components/AgregarPelicula';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto,
    },
    {
      path: '/peliculas/agregar',
      name: 'AgregarPelicula',
      component: AgregarPelicula,
    },
  ],
});
