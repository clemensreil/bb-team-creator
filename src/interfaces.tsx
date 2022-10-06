export interface Race {
  name: string;
  specialRules: Array<string>;
  reRolls: number;
  apo: boolean;
  positions: Array<PlayerPosition>;
}

export interface PlayerPosition {
  name: string;
  maxAllowed: number;
  count: number;
  MA: string;
  ST: string;
  AG: string;
  PA: string;
  AV: string;
  skills: Array<string>;
  primaryAccess: Array<string>;
  secondaryAccess: Array<string>;
  price: number;
}

export interface Player {
  position: string;
  name: string;
  skill1: string;
  skill2: string;
}

export interface Roster {
  players: Array<Player>;
}
