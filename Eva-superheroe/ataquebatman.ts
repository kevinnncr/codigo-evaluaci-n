interface Ataquebat {
    nombre: string;
    tipo1: TipoAtaquebat;
    damage: number;
  }

  enum TipoAtaquebat {
    Murcielagos = "murcielagos",
    Patada = "patada",
  }
  
  export { Ataquebat, TipoAtaquebat };