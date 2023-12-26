import villano from "./wuason";
import { Ataque, TipoAtaque } from "./ataquewuason";


const wuason = new villano("wuason", TipoAtaque.Dinamita, 5);

const ataquechistoso: Ataque = { nombre: "Dinamita", tipo: TipoAtaque.Patada, damage: 50 };


wuason.attack(ataquechistoso);
wuason.receiveAttack("Murcielagos");


import {heroe} from "./batman";
import { Ataquebat, TipoAtaquebat } from "./ataquebatman";


const batmen = new heroe("batman", TipoAtaquebat.Murcielagos, 5);

const modoserio: Ataquebat = { nombre: "Patada", tipo1: TipoAtaquebat.Patada, damage: 50 };


batmen.attack(modoserio);
batmen.receiveAttack("Dinamita");