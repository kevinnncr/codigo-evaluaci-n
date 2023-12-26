interface Ataque {
    nombre: string;
    tipo: TipoAtaque;
    damage: number;
  }
  

  enum TipoAtaque {
    Dinamita = "Dinamita",
    Patada = "Patada",
  }
  
  export { Ataque, TipoAtaque };