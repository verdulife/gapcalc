import { browser } from '$app/environment';
import { writable, get } from 'svelte/store';
import { constrains } from '$lib/utils';

const defaultMaterials = [
  {
    name: 'Vinilo impresión',
    width: 1050,
    height: 3000,
    price: 9.6 / 1000
  },
];

export const Materials = writable((browser && JSON.parse(localStorage.getItem("materials"))) || defaultMaterials);
Materials.subscribe((value) => browser && (localStorage.materials = JSON.stringify(value)));

export const User = writable({
  material: get(Materials)[0],
  width: get(Materials)[0].width,
  height: constrains.min_height
});

