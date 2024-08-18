
const Icons: Array<{ id: number; name: any }> = [
  {
    id: 1,
    name: 'dashboard',
  },
  {
    id: 2,
    name: 'inventory_2',
  },
  {
    id: 22,
    name: 'person',
  },
  {
    id: 26,
    name: 'pets',
  },
  {
    id: 31,
    name: 'storefront',
  },
  {
    id: 138,
    name: 'emergency',
  },
  {
    id: 42,
    name: 'shopping_cart',
  },
  {
    id: 45,
    name: 'attach_money',
  },
  {
    id: 125,
    name: 'request_quote',
  },
  {
    id: 80,
    name: 'settings',
  },
  {
    id: 160,
    name: 'chat',
  },
];
export default Icons;

export const getIconMenu = (idMenu: number): any | undefined => {
  const icon = Icons.find((icon) => icon.id === idMenu);
  return icon ? icon.name : undefined;
};
