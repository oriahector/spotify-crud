declare global {
  interface Array<T>{
    toSorted(compareFn: (a: T, b: T) => number): T[]
  }
}



export interface Student {
  id:               string;
  name:             string;
  alternate_names:  string[];
  species:          Species;
  gender:           Gender;
  house:            House;
  dateOfBirth:      null | string;
  yearOfBirth:      number | null;
  wizard:           boolean;
  ancestry:         Ancestry;
  eyeColour:        EyeColour;
  hairColour:       HairColour;
  wand:             Wand;
  patronus:         Patronus;
  hogwartsStudent:  boolean;
  hogwartsStaff:    boolean;
  actor:            string;
  alternate_actors: string[];
  alive:            boolean;
  image:            string;
}

export enum Ancestry {
  Empty = "",
  HalfBlood = "half-blood",
  Muggleborn = "muggleborn",
  PureBlood = "pure-blood",
}

export enum EyeColour {
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Dark = "dark",
  Empty = "",
  Green = "green",
  Grey = "grey",
  Silver = "silver",
}

export enum Gender {
  Female = "female",
  Male = "male",
}

export enum HairColour {
  Black = "black",
  Blond = "blond",
  Blonde = "blonde",
  Brown = "brown",
  Dark = "dark",
  Empty = "",
  Red = "red",
  Sandy = "sandy",
}

export enum House {
  Empty = "",
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw = "Ravenclaw",
  Slytherin = "Slytherin",
}

export enum Patronus {
  Boar = "boar",
  Empty = "",
  Hare = "hare",
  Horse = "horse",
  JackRussellTerrier = "Jack Russell terrier",
  NonCorporeal = "Non-Corporeal",
  Otter = "otter",
  Stag = "stag",
  Swan = "swan",
}

export enum Species {
  Human = "human",
}

export interface Wand {
  wood:   Wood;
  core:   Core;
  length: number | null;
}

export enum Core {
  DragonHeartstring = "dragon heartstring",
  Empty = "",
  PhoenixTailFeather = "phoenix tail feather",
  UnicornHair = "unicorn hair",
  UnicornTailHair = "unicorn tail hair",
}

export enum Wood {
  Ash = "ash",
  Cherry = "cherry",
  Empty = "",
  Hawthorn = "hawthorn",
  Holly = "holly",
  Vine = "vine",
  Willow = "willow",
  Yew = "yew",
}
