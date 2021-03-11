let db = require("./db");
let Ingrediente = require("./model/Ingrediente");

async function sincronizar2() {
  await db.sync();
}
sincronizar2();

async function inserir2(obj) {
  let resu = await Ingrediente.create(obj)
  console.log(resu);
}

let i1 = {nome: "Tomate", medida: "Kg", estoque: 1.00, valor: 5.00};
inserir2(i1);

let i2 = {nome: "Cebola", medida: "Kg", estoque: 3.00, valor: 4.00};
inserir2(i2);

let i3 = {nome: "Calabresa", medida: "Kg", estoque: 6.00, valor: 20.00};
inserir2(i3);

let i4 = {nome: "Frango", medida: "Kg", estoque: 10.00, valor: 11.00};
inserir2(i4);

let i5 = {nome: "Queijo", medida: "Kg", estoque: 8.00, valor: 28.00};
inserir2(i5);

async function consultar2() {
  let resultado2 = await Ingrediente.findAll();
  console.log(resultado2);
}
consultar2();
