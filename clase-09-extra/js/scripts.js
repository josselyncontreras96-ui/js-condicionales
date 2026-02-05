const personas = [
  { nombre: "Ana", edad: 22, admin: true },
  { nombre: "Juan", direccion: "Calle 123", edad: 17 },
  { nombre: "Pedro", edad: 30 },
];

console.log(personas);


//personas.forEach((persona) => console.log(persona));

/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}*/

personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años`);
});


/*personas.forEach(p => {
  if (p.edad !== undefined) {
    console.log(`${p.nombre} tiene ${p.edad} años`);
  }
});
*/

