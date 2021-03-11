let db = require("./db");
let Pizza = require("./model/Pizza");

async function sincronizar() {
  await db.sync();
}
sincronizar();

async function inserir(obj) {
  let res = await Pizza.create(obj)
  console.log(res);
}

let p1 = {sabor: "Frampiry", pequena: "4 fatias", familia: "10 fatias", valor: 43.00};
inserir(p1);

let p2 = {sabor: "Calabresa", pequena: "4 fatias", familia: "10 fatias", valor: 35.00};
inserir(p2);

let p3 = {sabor: "Portuguesa", pequena: "4 fatias", familia: "10 fatias", valor: 42.00};
inserir(p3);

let p4 = {sabor: "Tropicana", pequena: "4 fatias", familia: "10 fatias", valor: 23.00};
inserir(p4);

let p5 = {sabor: "Sensação", pequena: "4 fatias", familia: "10 fatias", valor: 28.00};
inserir(p5);

async function consultar() {
  let resultado = await Pizza.findAll();
  console.log(resultado);
}
consultar();

