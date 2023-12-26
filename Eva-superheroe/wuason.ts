import { Ataque, TipoAtaque } from "./ataquewuason";


interface villano {
  name: string;
  type: TipoAtaque;
  hp?: number;
}

class villano implements villano {
  #hp: number = 100;

  constructor(name: string, type: TipoAtaque, hp?: number) {
    this.name = name;
    this.type = type;
    this.hp = hp;
  }

  private takeDamage(damage: number): void {
    this.#hp -= damage;
    console.log(`${this.name} recibió ${damage} de daño!. Le queda ${this.#hp} de vida `);
  }

  receiveAttack(move: string): void {
    console.log(`${this.name} recibió ${move}!`);

    if (move === "Murcielagos" ) {
      console.log(`${this.name} es resistente. No recibe tanto daño.`);
      this.takeDamage(30);
    } else {
      this.takeDamage(90);
    }
  }

  attack(ataque: Ataque): void {
    console.log(`${this.name} usó ${ataque.nombre}!`);

    if (ataque.tipo === TipoAtaque.Patada ) {
      console.log(` es resistente a los golpes. ${ataque.nombre} no causa mucho daño.`);
    } else {
      console.log(`¡${this.name} causó ${ataque.damage} de daño!`);
    }
  }
}

export default villano;