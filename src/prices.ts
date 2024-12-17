const DIAMOND_PRICE = 1 / 60; // 60 diamond for 1 CHF

const ORACLE_TO_DIAMOND = 1800; // 1800 diamond for 1 oracle
const TERRA_UNCOMMON_TO_DIAMOND = 0.5;
const TERRA_RARE_TO_DIAMOND = 2;
const TERRA_EPIC_TO_DIAMOND = 4;
const TERRA_LEGENDARY_TO_DIAMOND = 8; // No price => estimation
const ASCENSION1_TO_DIAMOND = 1;
const ASCENSION2_TO_DIAMOND = 20;
const SHARD5_TO_DIAMOND = 60;
const SMN2_TO_DIAMOND = 300;
const INVOKER_TO_DIAMOND = 400;
const GOLD_TO_DIAMOND = 3300;
const RUNE_STONE_TO_DIAMOND = 0.5;
const REFINEMENT_TO_DIAMOND = 1;
const SMN1_TO_DIAMOND = 18;
const SYNERGY_TO_DIAMOND = 500;
const IMMORTAL_TO_DIAMOND = 1200;

export interface RegularPrices {
  diamondToCurrency: number;
  diamond: number;
  oracle: number;
  terraUncommon: number;
  terraRare: number;
  terraEpic: number;
  terraLegendary: number;
  ascension1: number;
  ascension2: number;
  shard5: number;
  smn2: number;
  invoker: number;
  gold: number;
  runeStone: number;
  refinement: number;
  smn1: number;
  synergy: number;
  immortal: number;
}

export interface InputIds extends Omit<RegularPrices, "diamondToCurrency"> {
  bundlePrice: number;
}

//const VIP_TO_DIAMOND = 0;
//const EPIC_SOUL_TO_DIAMOND = 0;
//const EVOLUTION_ORE_TO_DIAMOND = 0;

export const getForm = (): [keyof InputIds, string, string?][] => {
  return [
    ["diamond", "Diamond"],
    ["oracle", "Oracle Decree"],
    ["terraUncommon", "Terra Crystal", "Terra Crystal (Uncommon)"],
    ["terraRare", "Terra Crystal", "Terra Crystal (Rare)"],
    ["terraEpic", "Terra Crystal", "Terra Crystal (Epic)"],
    ["terraLegendary", "Terra Crystal", "Terra Crystal (Legendary)"],
    ["ascension1", "Ascension Ore", "Common Ascension Ore"],
    ["ascension2", "Ascension Ore", "Epic Ascension Ore"],
    ["shard5", "5-Star Hero Shard"],
    ["smn2", "SMN Ticket II"],
    ["invoker", "Invoker Crystal"],
    ["gold", "Gold"],
    ["runeStone", "Rune Stone"],
    ["refinement", "Refinement Ore"],
    ["smn1", "SMN Ticket I"],
    ["synergy", "Synergy Summon Ticket 1"],
    ["immortal", "Immortal Summon Ticket"],
  ];
};

export const getRegularPrices = (): RegularPrices => {
  return {
    diamondToCurrency: DIAMOND_PRICE,
    diamond: 1,
    oracle: ORACLE_TO_DIAMOND,
    terraUncommon: TERRA_UNCOMMON_TO_DIAMOND,
    terraRare: TERRA_RARE_TO_DIAMOND,
    terraEpic: TERRA_EPIC_TO_DIAMOND,
    terraLegendary: TERRA_LEGENDARY_TO_DIAMOND,
    ascension1: ASCENSION1_TO_DIAMOND,
    ascension2: ASCENSION2_TO_DIAMOND,
    shard5: SHARD5_TO_DIAMOND,
    smn2: SMN2_TO_DIAMOND,
    invoker: INVOKER_TO_DIAMOND,
    gold: GOLD_TO_DIAMOND,
    runeStone: RUNE_STONE_TO_DIAMOND,
    refinement: REFINEMENT_TO_DIAMOND,
    smn1: SMN1_TO_DIAMOND,
    synergy: SYNERGY_TO_DIAMOND,
    immortal: IMMORTAL_TO_DIAMOND,
  };
};
