  import { Ataquebat, TipoAtaquebat } from "./ataquebatman";

interface heroe {
  name1: string;
  type: TipoAtaquebat;
  hp?: number;
}

class heroe implements heroe {
  #hp: number = 100;

  constructor(name1: string, type: TipoAtaquebat, level?: number) {
    this.name1 = name1;
    this.type = type;
    this.hp = level;
  }

  private takeDamage(damage: number): void {
    this.#hp -= damage;
    console.log(`${this.name1} recibió ${damage} de daño!. Vida restante ${this.#hp}`);
  }

  receiveAttack(move: string): void {
    console.log(`${this.name1} recibió ${move}!`);

    if (move === "Dinamita" && this.type === TipoAtaquebat.Patada) {
      console.log(`${this.name1} es resistente a dinamita. No recibe tanto daño.`);
      this.takeDamage(50);
    } else {
      this.takeDamage(90);
    }
  }

  attack(ataque: Ataquebat): void {
    console.log(`${this.name1} usó ${ataque.nombre}!`);

    if (ataque.tipo1 === TipoAtaquebat.Patada || this.type !== TipoAtaquebat.Murcielagos) {
      console.log(`wuason tiene armadura es resistente a los golpes. ${ataque.nombre} no causa mucho daño.`);
    } else {
      console.log(`¡${this.name1} causó ${ataque.damage} de daño!`);
    }
  }
}

export  {heroe};