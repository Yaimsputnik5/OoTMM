import { PartialDeep } from 'type-fest';
import { Settings, DEFAULT_SETTINGS, makeSettings } from './settings';

export type Presets = { [k: string]: Settings };

const PRESET_DEFAULT = DEFAULT_SETTINGS;

const BLITZ_BASE: PartialDeep<Settings> = {
  clearStateDungeonsMm: 'both',
  tingleShuffle: 'starting',
  openMaskShop: true,
  hintImportance: true,
  strayFairyChestShuffle: 'starting',
  mapCompassShuffle: 'starting',
  smallKeyShuffleMm: 'removed',
  smallKeyShuffleHideout: 'vanilla',
  bossKeyShuffleOot: 'ownDungeon',
  bossKeyShuffleMm: 'ownDungeon',
  shuffleMasterSword: false,
  shuffleGerudoCard: false,
  shuffleMerchantsMm: false,
  startingAge: 'random',
  ageChange: 'always',
  doorOfTime: 'open',
  dekuTree: 'closed',
  kakarikoGate: 'open',
  gerudoFortress: 'single',
  skipZelda: true,
  bossWarpPads: 'remains',
  crossAge: true,
  crossWarpOot: true,
  crossWarpMm: 'full',
  fastBunnyHood: true,
  bottleContentShuffle: true,
  blueFireArrows: true,
  sunlightArrows: true,
  progressiveGoronLullaby: 'single',
  freeScarecrowOot: true,
  freeScarecrowMm: true,
  lenientSpikes: false,
  shortHookshotMm: true,
  bombchuBagMm: true,
  bombchuBagOot: true,
  spellFireMm: true,
  spellWindMm: true,
  spellLoveMm: true,
  sharedBows: true,
  sharedBombBags: true,
  sharedMagic: true,
  sharedMagicArrowFire: true,
  sharedMagicArrowIce: true,
  sharedMagicArrowLight: true,
  sharedSongStorms: true,
  sharedHookshot: true,
  sharedLens: true,
  sharedMaskGoron: true,
  sharedMaskZora: true,
  sharedMaskBunny: true,
  sharedMaskKeaton: true,
  sharedMaskTruth: true,
  sharedWallets: true,
  sharedHealth: true,
  sharedShields: true,
  sharedBombchuBags: true,
  sharedSpellFire: true,
  sharedSpellWind: true,
  sharedSpellLove: true,
  noPlandoHints: true,
  bootsIronMm: true,
  bootsHoverMm: true,
  tunicGoronMm: true,
  tunicZoraMm: true,
  sharedBootsIron: true,
  sharedBootsHover: true,
  sharedTunicGoron: true,
  sharedTunicZora: true,
  blastMaskOot: true,
  stoneMaskOot: true,
  elegyOot: true,
  sharedMaskBlast: true,
  sharedMaskStone: true,
  sharedSongElegy: true,
  agelessChildTrade: true,
  scalesMm: true,
  strengthMm: true,
  sharedScales: true,
  sharedStrength: true,
  startingItems: {
    OOT_NUTS_10: 2,
    OOT_SHIELD_DEKU: 1,
    OOT_STICK: 10,
    MM_SONG_EPONA: 1,
    SHARED_SHIELD_HYLIAN: 1,
    MM_OCARINA: 1,
    OOT_OCARINA: 1,
    MM_SWORD: 1,
    MM_SONG_SOARING: 1
  },
  tricks: [
    "MM_LENS",
    "MM_NO_SEAHORSE",
    "MM_ONE_MASK_STONE_TOWER",
    "MM_PALACE_BEAN_SKIP",
    "MM_SOUTHERN_SWAMP_SCRUB_HP_GORON",
    "MM_ZORA_HALL_SCRUB_HP_NO_DEKU",
    "MM_EVAN_FARORE",
    "OOT_DC_JUMP",
    "OOT_DEAD_HAND_STICKS",
    "OOT_FOREST_HOOK",
    "OOT_HAMMER_WALLS",
    "OOT_HIDDEN_GROTTOS",
    "OOT_LENS",
    "OOT_MAN_ON_ROOF",
    "OOT_NIGHT_GS",
    "OOT_TUNICS",
    "OOT_VOLCANO_HOVERS",
    "OOT_WINDMILL_HP_NOTHING",
  ],
  plando: {
    locations: {
      'OOT Zora River Bean Seller': 'OOT_MAGIC_BEAN',
      'OOT Zelda\'s Letter': 'OOT_OCARINA',
      'OOT Zelda\'s Song': 'OOT_SONG_TP_LIGHT',
      'MM Initial Song of Healing': 'MM_SONG_TIME'
    }
  },
};

const makeBlitz = (input: PartialDeep<Settings>): Settings => {
  const x = Object.assign({}, BLITZ_BASE, input);
  return makeSettings(x);
};

const PRESET_BLITZ = makeBlitz({
  rainbowBridge: 'custom',
  specialConds: {
    BRIDGE: {
      count: 5,
      stones: true,
      medallions: true
    },
    MOON: {
      count: 4,
      stones: true,
      remains: true
    }
  },
  junkLocations: [
    'MM Deku Playground Reward All Days',
    'MM Beneath The Graveyard Dampe Chest',
    'MM Goron Race Reward',
    'MM Great Bay Great Fairy',
    'MM Honey & Darling Reward All Days',
    'MM Ikana Great Fairy',
    'MM Laboratory Zora Song',
    'MM Moon Fierce Deity Mask',
    'MM Mountain Village Frog Choir HP',
    'MM Ocean Spider House Wallet',
    'MM Pinnacle Rock HP',
    'MM Snowhead Great Fairy',
    'MM Stock Pot Inn Couple\'s Mask',
    'MM Swamp Spider House Mask of Truth',
    'MM Town Archery Reward 2',
    'MM Waterfall Rapids Beaver Race 2',
    'MM Woodfall Great Fairy',
    'OOT Hyrule Field Ocarina of Time',
    'OOT Kakariko Song Shadow',
    'OOT Skulltula House 40 Tokens',
    'OOT Skulltula House 50 Tokens'
  ],
  hints: [
    { type: "foolish", amount: 8, extra: 1 },
    { type: "always", amount: "max", extra: 1 },
    { type: "sometimes", amount: 4, extra: 1 },
    { type: "item", amount: 1, extra: 1, item: "SHARED_SHIELD_MIRROR" },
    { type: "item", amount: 1, extra: 1, item: "MM_MASK_CAPTAIN" },
    { type: "item", amount: 1, extra: 1, item: "MM_POWDER_KEG" },
    { type: "item", amount: 1, extra: 1, item: "SHARED_ARROW_ICE" },
    { type: "playthrough", amount: 1, extra: 1 },
    { type: "woth", amount: 9, extra: 1 },
    { type: "sometimes", amount: "max", extra: 1 }
  ]
});

const PRESET_BLITZ_PRECOMPLETED = makeBlitz({
  rainbowBridge: 'custom',
  preCompletedDungeons: true,
  preCompletedDungeonsMajor: 6,
  preCompletedDungeonsStones: 2,
  preCompletedDungeonsMedallions: 2,
  preCompletedDungeonsRemains: 2,
  junkLocations: [
    "MM Beneath The Graveyard Dampe Chest",
    "MM Deku Playground Reward All Days",
    "MM Goron Race Reward",
    "MM Great Bay Great Fairy",
    "MM Honey & Darling Reward All Days",
    "MM Ikana Great Fairy",
    "MM Laboratory Zora Song",
    "MM Moon Fierce Deity Mask",
    "MM Mountain Village Frog Choir HP",
    "MM Ocean Spider House Wallet",
    "MM Pinnacle Rock HP",
    "MM Snowhead Great Fairy",
    "MM Stock Pot Inn Couple's Mask",
    "MM Swamp Spider House Mask of Truth",
    "MM Town Archery Reward 2",
    "MM Waterfall Rapids Beaver Race 2",
    "MM Woodfall Great Fairy",
    "OOT Skulltula House 40 Tokens",
    "OOT Skulltula House 50 Tokens",
  ],
  specialConds: {
    BRIDGE: {
      count: 9,
      stones: true,
      medallions: true,
      remains: false,
    },
    MOON: {
      count: 7,
      stones: true,
      medallions: false,
      remains: true,
    }
  },
  hints: [
    { type: "foolish", amount: 8, extra: 1 },
    { type: "always", amount: "max", extra: 1 },
    { type: "sometimes", amount: 4, extra: 1 },
    { type: "item", amount: 1, extra: 1, item: "SHARED_SHIELD_MIRROR" },
    { type: "item", amount: 1, extra: 1, item: "MM_MASK_CAPTAIN" },
    { type: "item", amount: 1, extra: 1, item: "MM_POWDER_KEG" },
    { type: "item", amount: 1, extra: 1, item: "SHARED_ARROW_ICE" },
    { type: "playthrough", amount: 1, extra: 1 },
    { type: "woth", amount: 9, extra: 1 },
    { type: "sometimes", amount: "max", extra: 1 }
  ]
});

const PRESET_TRIFORCE_BLITZ = makeBlitz({
  goal: "triforce3",
  strayFairyChestShuffle: "starting",
  rainbowBridge: 'custom',
  preCompletedDungeons: true,
  preCompletedDungeonsMajor: 6,
  preCompletedDungeonsStones: 2,
  preCompletedDungeonsMedallions: 2,
  preCompletedDungeonsRemains: 2,
  junkLocations: [
    "MM Beneath The Graveyard Dampe Chest",
    "MM Deku Playground Reward All Days",
    "MM Goron Race Reward",
    "MM Great Bay Great Fairy",
    "MM Honey & Darling Reward All Days",
    "MM Ikana Great Fairy",
    "MM Laboratory Zora Song",
    "MM Moon Fierce Deity Mask",
    "MM Mountain Village Frog Choir HP",
    "MM Ocean Spider House Wallet",
    "MM Pinnacle Rock HP",
    "MM Snowhead Great Fairy",
    "MM Stock Pot Inn Couple's Mask",
    "MM Swamp Spider House Mask of Truth",
    "MM Town Archery Reward 2",
    "MM Waterfall Rapids Beaver Race 2",
    "MM Woodfall Great Fairy",
    "OOT Skulltula House 40 Tokens",
    "OOT Skulltula House 50 Tokens"
  ],
  specialConds: {
    BRIDGE: {
      count: 10,
      stones: true,
      medallions: true,
      remains: true
    },
    MOON: {
      count: 0
    }
  },
  hints: [
    { type: "foolish", amount: 8, extra: 1 },
    { type: "always", amount: "max", extra: 1 },
    { type: "sometimes", amount: 4, extra: 1 },
    { type: "item", amount: 1, extra: 1, item: "MM_MASK_CAPTAIN" },
    { type: "item", amount: 1, extra: 1, item: "MM_POWDER_KEG" },
    { type: "item", amount: 1, extra: 1, item: "SHARED_SHIELD_MIRROR" },
    { type: "item", amount: 1, extra: 1, item: "SHARED_ARROW_LIGHT" },
    { type: "woth", amount: 9, extra: 1 },
    { type: "sometimes", amount: "max", extra: 1 }
  ]
})

const PRESET_ALLSANITY = makeSettings({
  goal: 'both',
  logic: 'beatable',
  songs: 'anywhere',
  goldSkulltulaTokens: 'all',
  housesSkulltulaTokens: 'all',
  tingleShuffle: 'anywhere',
  mapCompassShuffle: 'anywhere',
  smallKeyShuffleOot: 'anywhere',
  smallKeyShuffleHideout: 'anywhere',
  bossKeyShuffleOot: 'anywhere',
  smallKeyShuffleMm: 'anywhere',
  bossKeyShuffleMm: 'anywhere',
  townFairyShuffle: 'anywhere',
  strayFairyChestShuffle: 'anywhere',
  strayFairyOtherShuffle: 'anywhere',
  ganonBossKey: 'anywhere',
  rainbowBridge: 'medallions',
  dungeonRewardShuffle: 'anywhere',
  scrubShuffleOot: true,
  cowShuffleOot: true,
  cowShuffleMm: true,
  shopShuffleOot: 'full',
  shopShuffleMm: 'full',
  shuffleMasterSword: true,
  shuffleGerudoCard: true,
  divingGameRupeeShuffle: true,
  fairyFountainFairyShuffleOot: true,
  fairyFountainFairyShuffleMm: true,
  eggShuffle: true,
  pondFishShuffle: true,
  doorOfTime: 'closed',
  kakarikoGate: 'closed',
  zoraKing: 'vanilla',
  skipZelda: false,
  crossWarpOot: true,
  crossWarpMm: 'full',
  sunSongMm: true,
  csmc: 'always',
  fillWallets: true,
  progressiveShieldsOot: 'separate',
  progressiveSwordsOot: 'separate',
  progressiveShieldsMm: 'separate',
  progressiveGoronLullaby: 'single',
  childWallets: true,
  colossalWallets: true,
  fastBunnyHood: true,
  dekuTree: 'closed',
  dekuTreeAdult: true,
  wellAdult: true,
  fireChild: true,
  erBoss: 'full',
  erDungeons: 'full',
  erMajorDungeons: true,
  erMinorDungeons: true,
  erSpiderHouses: true,
  erPirateFortress: true,
  erBeneathWell: true,
  erIkanaCastle: true,
  erSecretShrine: true,
  erRegions: 'full',
  erRegionsExtra: true,
  erRegionsShortcuts: true,
  erIndoors: 'full',
  erIndoorsMajor: true,
  erIndoorsExtra: true,
  erOneWays: 'full',
  erOneWaysMajor: true,
  erOneWaysIkana: true,
  erOneWaysSongs: true,
  erOneWaysStatues: true,
  erOneWaysOwls: true,
});

const PRESET_HELL = makeSettings({
  itemPool: 'minimal',
  goal: 'both',
  logic: 'beatable',
  songs: 'anywhere',
  goldSkulltulaTokens: 'all',
  housesSkulltulaTokens: 'all',
  tingleShuffle: 'anywhere',
  mapCompassShuffle: 'anywhere',
  smallKeyShuffleOot: 'anywhere',
  smallKeyShuffleMm: 'anywhere',
  smallKeyShuffleHideout: 'anywhere',
  bossKeyShuffleOot: 'anywhere',
  bossKeyShuffleMm: 'anywhere',
  townFairyShuffle: 'anywhere',
  strayFairyChestShuffle: 'anywhere',
  strayFairyOtherShuffle: 'anywhere',
  ganonBossKey: 'custom',
  rainbowBridge: 'medallions',
  majoraChild: 'custom',
  dungeonRewardShuffle: 'anywhere',
  scrubShuffleOot: true,
  cowShuffleOot: true,
  cowShuffleMm: true,
  shopShuffleOot: 'full',
  shopShuffleMm: 'full',
  shuffleMasterSword: true,
  shuffleGerudoCard: true,
  divingGameRupeeShuffle: true,
  fairyFountainFairyShuffleOot: true,
  fairyFountainFairyShuffleMm: true,
  eggShuffle: true,
  pondFishShuffle: true,
  doorOfTime: 'closed',
  kakarikoGate: 'closed',
  zoraKing: 'vanilla',
  skipZelda: false,
  crossWarpOot: true,
  crossWarpMm: 'full',
  sunSongMm: true,
  csmc: 'always',
  fillWallets: false,
  priceOotShops: 'random',
  priceOotScrubs: 'random',
  priceMmShops: 'random',
  priceMmTingle: 'random',
  progressiveShieldsOot: 'separate',
  progressiveSwordsOot: 'separate',
  progressiveShieldsMm: 'separate',
  progressiveGoronLullaby: 'progressive',
  childWallets: true,
  colossalWallets: true,
  fastBunnyHood: true,
  dekuTree: 'closed',
  dekuTreeAdult: true,
  wellAdult: true,
  fireChild: true,
  erBoss: 'full',
  erDungeons: 'full',
  erMajorDungeons: true,
  erMinorDungeons: true,
  erSpiderHouses: true,
  erPirateFortress: true,
  erBeneathWell: true,
  erIkanaCastle: true,
  erSecretShrine: true,
  erRegions: 'full',
  erRegionsExtra: true,
  erRegionsShortcuts: true,
  erIndoors: 'full',
  erIndoorsMajor: true,
  erIndoorsExtra: true,
  erOneWays: 'full',
  erOneWaysMajor: true,
  erOneWaysIkana: true,
  erOneWaysSongs: true,
  erOneWaysStatues: true,
  erOneWaysOwls: true,
  erGanonCastle: true,
  erGanonTower: true,
  erMoon: true,
  specialConds: {
    GANON_BK: {
      count: 266,
      stones: true,
      medallions: true,
      remains: true,
      skullsGold: true,
      skullsSwamp: true,
      skullsOcean: true,
      fairiesWF: true,
      fairiesSH: true,
      fairiesGB: true,
      fairiesST: true,
      fairyTown: true,
      masksRegular: true,
      masksTransform: true,
      masksOot: true
    },
    MAJORA: {
      count: 266,
      stones: true,
      medallions: true,
      remains: true,
      skullsGold: true,
      skullsSwamp: true,
      skullsOcean: true,
      fairiesWF: true,
      fairiesSH: true,
      fairiesGB: true,
      fairiesST: true,
      fairyTown: true,
      masksRegular: true,
      masksTransform: true,
      masksOot: true
    }
  },
  dungeon: {
    DT: 'mq',
    DC: 'mq',
    JJ: 'mq',
    BotW: 'mq',
    Forest: 'mq',
    Fire: 'mq',
    Water: 'mq',
    Shadow: 'mq',
    Spirit: 'mq',
    IC: 'mq',
    GTG: 'mq',
    Ganon: 'mq'
  },
  hints: [
    { type: 'foolish', amount: 'max', extra: 2 },
  ],
  tricks: [
    'OOT_LENS',
    'OOT_TUNICS',
    'OOT_HIDDEN_GROTTOS',
    'OOT_MIDO_SKIP',
    'OOT_MAN_ON_ROOF',
    'OOT_BLIND_WASTELAND',
    'OOT_DEKU_SKIP',
    'OOT_DC_JUMP',
    'OOT_FOREST_HOOK',
    'OOT_HAMMER_WALLS',
    'OOT_VOLCANO_HOVERS',
    'OOT_NIGHT_GS',
    'OOT_DOMAIN_CUCCO',
    'OOT_DOMAIN_HOVER',
    'OOT_WATER_LONGSHOT',
    'OOT_SAND_RIVER_NOTHING',
    'OOT_SHADOW_FIRE_ARROW',
    'OOT_KZ_SKIP',
    'OOT_LOST_WOODS_ADULT_GS',
    'OOT_WINDMILL_HP_NOTHING',
    'OOT_LAB_DIVE_NO_GOLD_SCALE',
    'OOT_LAB_WALL_GS',
    'OOT_PASS_COLLISION',
    'OOT_DMT_RED_ROCK_GS',
    'OOT_DEAD_HAND_STICKS',
    'OOT_BFA_MUDWALLS',
    'OOT_JABU_BOSS_HOVER',
    'OOT_SPIRIT_CHILD_HOVER',
    'OOT_VALLEY_GATE_HOVER',
    'OOT_MQ_ICE_SCARE_NOTHING',
    'OOT_MQ_ICE_SCARE_HOVER',
    'OOT_MQ_GTG_FLAMES',
    'OOT_FORTRESS_JUMPS',
    'OOT_COLOSSUS_GS_NO_BEAN',
    'OOT_ENTER_JABU',
    'OOT_JABU_BOSS_HIGH_SWITCH',
    'OOT_WATER_REVERSE_RIVER',
    'OOT_WATER_PIT_GS_CHU',
    'OOT_SHADOW_BOAT_EARLY',
    'OOT_SPIRIT_BOSS_CLIMB_NO_HOOK',
    'OOT_ZR_FALLS_HOOK',
    'OOT_DC_BOULDER',
    'OOT_LAKE_SHORTCUT',
    'OOT_TENT_CHILD',
    'OOT_WELL_ADULT_TT',
    'OOT_ADULT_GALLERY_TT',
    'OOT_GTG_CHILD_TT',
    'OOT_REVERSE_DAMPE',
    'OOT_GANON_FAIRY_TT',
    'OOT_GANON_CASTLE_ENTRY',
    'OOT_SHADOW_TEMPLE_STICKS',
    'OOT_WATER_GOLD_SCALE',
    'MM_LENS',
    'MM_PALACE_BEAN_SKIP',
    'MM_DARMANI_WALL',
    'MM_NO_SEAHORSE',
    'MM_ZORA_HALL_HUMAN',
    'MM_ICELESS_IKANA',
    'MM_ONE_MASK_STONE_TOWER',
    'MM_ISTT_EYEGORE',
    'MM_SCT_NOTHING',
    'MM_GORON_BOMB_JUMP',
    'MM_BOMBER_GUESS',
    'MM_CAPTAIN_SKIP',
    'MM_ISTT_ENTRY_JUMP',
    'MM_HARD_HOOKSHOT',
    'MM_PFI_BOAT_HOOK',
    'MM_PALACE_GUARD_SKIP',
    'MM_SHT_FIRELESS',
    'MM_SHT_STICKS_RUN',
    'MM_SHT_PILLARLESS',
    'MM_KEG_EXPLOSIVES',
    'MM_DOG_RACE_CHEST_NOTHING',
    'MM_MAJORA_LOGIC',
    'MM_SOUTHERN_SWAMP_SCRUB_HP_GORON',
    'MM_ZORA_HALL_SCRUB_HP_NO_DEKU',
    'MM_ZORA_HALL_DOORS',
    'MM_IKANA_ROOF_PARKOUR',
    'MM_IKANA_PILLAR_TO_ENTRANCE',
    'MM_POST_OFFICE_GAME',
    'MM_WELL_HSW',
    'MM_GBT_WATERWHEEL_GORON',
    'MM_GBT_ENTRANCE_BOW',
    'MM_OOB_MOVEMENT',
    'MM_ST_UPDRAFTS',
    'MM_ESCAPE_CAGE',
    'MM_GBT_FAIRY2_HOOK',
    'MM_GBT_CENTRAL_GEYSER',
    'MM_BANK_NO_WALLET',
    'MM_CLOCK_TOWER_WAIT',
    'MM_WFT_RUPEES_ICE',
    'MM_ISTT_RUPEES_GORON',
    'MM_BOMBER_BACKFLIP',
    'MM_NCT_TINGLE',
    'MM_GBT_FIRELESS',
    'MM_IGOS_DINS',
    'MM_BIO_BABA_CHU',
    'MM_BIO_BABA_LUCK',
    'MM_WF_SHRINE_HOVERS',
    'MM_WFT_LOBBY_HOVERS',
    'MM_SOARING_ZORA',
    'MM_SOARING_HOVERS',
    'MM_LULLABY_SKIP_IRONS',
    'MM_PATH_SNOWHEAD_HOVERS',
    'MM_GBT_WATERWHEEL_HOVERS',
    'MM_GBT_CENTER_POT_IRONS',
    'MM_GBT_RED1_HOVERS',
    'MM_GBT_GREEN2_UPPER_HOVERS',
    'MM_GYORG_IRONS',
    'MM_STT_LAVA_BLOCK_HOVERS',
    'MM_ISTT_ENTRY_HOVER',
    'MM_GYORG_POTS_DIVE',
    'MM_STT_POT_BOMBCHU_DIVE',
    'MM_STOCK_POT_WAIT',
    'MM_STAGE_LIGHTS_DIN',
    'MM_RANCH_FARORE',
    'MM_EVAN_FARORE',
    'MM_KEG_TRIAL_HEATLESS',
  ]
});

const PRESET_BEGINNER = makeSettings({
  autoInvert: 'firstCycle',
  clearStateDungeonsMm: 'both',
  hintImportance: true,
  tingleShuffle: 'starting',
  mapCompassShuffle: 'starting',
  smallKeyShuffleMm: 'removed',
  smallKeyShuffleHideout: 'vanilla',
  strayFairyChestShuffle: 'starting',
  shuffleGerudoCard: false,
  startingAge: 'random',
  doorOfTime: 'open',
  dekuTree: 'closed',
  kakarikoGate: 'open',
  gerudoFortress: 'single',
  skipZelda: true,
  rainbowBridge: 'medallions',
  bossWarpPads: 'remains',
  freeScarecrowOot: true,
  freeScarecrowMm: true,
  openMaskShop: true,
  crossWarpOot: true,
  crossWarpMm: 'full',
  bottleContentShuffle: true,
  bombchuBagOot: true,
  bombchuBagMm: true,
  sharedBows: true,
  sharedBombBags: true,
  sharedMagic: true,
  sharedMagicArrowFire: true,
  sharedMagicArrowIce: true,
  sharedMagicArrowLight: true,
  sharedSongEpona: true,
  sharedSongStorms: true,
  sharedHookshot: true,
  sharedLens: true,
  sharedMaskGoron: true,
  sharedMaskZora: true,
  sharedMaskBunny: true,
  sharedMaskKeaton: true,
  sharedMaskTruth: true,
  sharedWallets: true,
  sharedHealth: true,
  sharedShields: true,
  sharedBombchuBags: true,
  startingItems: {
    OOT_NUTS_10: 2,
    OOT_SHIELD_DEKU: 1,
    OOT_STICK: 10,
    SHARED_SHIELD_HYLIAN: 1,
    MM_OCARINA: 1,
    OOT_OCARINA: 1,
    MM_SWORD: 2,
    MM_SONG_SOARING: 1
  },
  junkLocations: [
    'MM Beneath The Graveyard Dampe Chest',
    'MM Deku Playground Reward All Days',
    'MM Goron Race Reward',
    'MM Great Bay Great Fairy',
    'MM Honey & Darling Reward All Days',
    'MM Ikana Great Fairy',
    'MM Laboratory Zora Song',
    'MM Moon Fierce Deity Mask',
    'MM Mountain Village Frog Choir HP',
    'MM Ocean Spider House Wallet',
    'MM Pinnacle Rock HP',
    'MM Snowhead Great Fairy',
    "MM Stock Pot Inn Couple's Mask",
    'MM Swamp Spider House Mask of Truth',
    'MM Town Archery Reward 2',
    'MM Waterfall Rapids Beaver Race 2',
    'MM Woodfall Great Fairy',
    'OOT Skulltula House 40 Tokens',
    'OOT Skulltula House 50 Tokens'
  ],
  plando: {
    locations: {
      'OOT Zora River Bean Seller': 'OOT_MAGIC_BEAN',
      "OOT Zelda's Letter": 'OOT_OCARINA',
      "OOT Zelda's Song": 'OOT_SONG_TP_LIGHT',
      'MM Initial Song of Healing': 'MM_SONG_TIME'
    }
  },
  hints: [
    { type: 'foolish', amount: 8, extra: 1 },
    { type: 'always', amount: 'max', extra: 1 },
    { type: 'sometimes', amount: 4, extra: 1 },
    { type: 'item', amount: 1, extra: 1, item: 'SHARED_SHIELD_MIRROR' },
    { type: 'item', amount: 1, extra: 1, item: 'MM_POWDER_KEG' },
    { type: 'item', amount: 1, extra: 1, item: 'MM_MASK_CAPTAIN' },
    { type: 'playthrough', amount: 1, extra: 1 },
    { type: 'woth', amount: 9, extra: 1 },
    { type: 'sometimes', amount: 'max', extra: 1 }
  ]
});

const PRESET_CROSSKEYS = makeSettings({
  goal: 'any',
  noPlandoHints: false,
  extraHintRegions: true,
  hintImportance: true,
  songs: 'anywhere',
  tingleShuffle: 'starting',
  mapCompassShuffle: 'starting',
  smallKeyShuffleOot: 'anywhere',
  smallKeyShuffleMm: 'anywhere',
  smallKeyShuffleHideout: 'anywhere',
  bossKeyShuffleOot: 'anywhere',
  bossKeyShuffleMm: 'anywhere',
  strayFairyChestShuffle: 'starting',
  strayFairyOtherShuffle: 'starting',
  ganonBossKey: 'anywhere',
  startingAge: 'random',
  swordlessAdult: true,
  doorOfTime: 'open',
  ageChange: 'oot',
  dekuTreeAdult: true,
  wellAdult: true,
  fireChild: true,
  kakarikoGate: 'open',
  openZdShortcut: true,
  zoraKing: 'open',
  gerudoFortress: 'single',
  skipZelda: true,
  rainbowBridge: 'custom',
  majoraChild: 'custom',
  bossWarpPads: 'remains',
  freeScarecrowOot: true,
  freeScarecrowMm: true,
  openMaskShop: true,
  crossAge: true,
  crossWarpOot: true,
  crossWarpMm: 'full',
  crossGameFw: true,
  restoreBrokenActors: true,
  fillWallets: true,
  progressiveGoronLullaby: 'single',
  bottleContentShuffle: true,
  fairyOcarinaMm: true,
  blueFireArrows: true,
  sunlightArrows: true,
  shortHookshotMm: true,
  bombchuBagOot: true,
  bombchuBagMm: true,
  spellFireMm: true,
  spellWindMm: true,
  spellLoveMm: true,
  bootsIronMm: true,
  bootsHoverMm: true,
  tunicGoronMm: true,
  tunicZoraMm: true,
  scalesMm: true,
  strengthMm: true,
  blastMaskOot: true,
  stoneMaskOot: true,
  elegyOot: true,
  lenientSpikes: false,
  sharedBows: true,
  sharedBombBags: true,
  sharedMagic: true,
  sharedMagicArrowFire: true,
  sharedMagicArrowIce: true,
  sharedMagicArrowLight: true,
  sharedSongEpona: true,
  sharedSongStorms: true,
  sharedSongTime: true,
  sharedSongSun: true,
  sharedHookshot: true,
  sharedLens: true,
  sharedOcarina: true,
  sharedMaskGoron: true,
  sharedMaskZora: true,
  sharedMaskKeaton: true,
  sharedMaskTruth: true,
  sharedMaskBlast: true,
  sharedMaskStone: true,
  sharedSongElegy: true,
  sharedWallets: true,
  sharedHealth: true,
  sharedShields: true,
  sharedBombchuBags: true,
  sharedSpellFire: true,
  sharedSpellWind: true,
  sharedSpellLove: true,
  sharedBootsIron: true,
  sharedBootsHover: true,
  sharedTunicGoron: true,
  sharedTunicZora: true,
  sharedScales: true,
  sharedStrength: true,
  sunSongMm: true,
  agelessSwords: true,
  agelessTunics: true,
  agelessBoots: true,
  agelessChildTrade: true,
  erDungeons: 'full',
  erGrottos: 'full',
  erMixed: 'full',
  erMixedDungeons: true,
  erMixedIndoors: true,
  erMixedGrottos: true,
  erMajorDungeons: true,
  erMinorDungeons: true,
  erGanonCastle: true,
  erMoon: true,
  erSpiderHouses: true,
  erPirateFortress: true,
  erBeneathWell: true,
  erIkanaCastle: true,
  erSecretShrine: true,
  erIndoors: 'full',
  erIndoorsMajor: true,
  erIndoorsExtra: true,
  erOneWays: 'full',
  erOneWaysMajor: true,
  extraChildSwordsOot: true,
  sharedSwords: true,
  startingItems: {
    OOT_NUTS_10: 2,
    OOT_MASK_BUNNY: 1,
    OOT_STICK: 10,
    MM_SONG_SOARING: 1
  },
  junkLocations: [
    'MM Beneath The Graveyard Dampe Chest',
    'MM Deku Playground Reward All Days',
    'MM Goron Race Reward',
    'MM Great Bay Great Fairy',
    'MM Honey & Darling Reward All Days',
    'MM Ikana Great Fairy',
    'MM Laboratory Zora Song',
    'MM Moon Fierce Deity Mask',
    'MM Mountain Village Frog Choir HP',
    'MM Ocean Spider House Wallet',
    'MM Pinnacle Rock HP',
    'MM Snowhead Great Fairy',
    "MM Stock Pot Inn Couple's Mask",
    'MM Swamp Spider House Mask of Truth',
    'MM Town Archery Reward 2',
    'MM Waterfall Rapids Beaver Race 2',
    'MM Woodfall Great Fairy',
    'OOT Hyrule Field Ocarina of Time',
    'OOT Kakariko Song Shadow',
    'OOT Skulltula House 40 Tokens',
    'OOT Skulltula House 50 Tokens'
  ],
  tricks: [
    'MM_EVAN_FARORE',
    'MM_LENS',
    'MM_NO_SEAHORSE',
    'MM_ONE_MASK_STONE_TOWER',
    'MM_PALACE_BEAN_SKIP',
    'MM_SOUTHERN_SWAMP_SCRUB_HP_GORON',
    'MM_ZORA_HALL_SCRUB_HP_NO_DEKU',
    'OOT_DC_JUMP',
    'OOT_DEAD_HAND_STICKS',
    'OOT_FOREST_HOOK',
    'OOT_HAMMER_WALLS',
    'OOT_HIDDEN_GROTTOS',
    'OOT_LENS',
    'OOT_MAN_ON_ROOF',
    'OOT_NIGHT_GS',
    'OOT_TUNICS',
    'OOT_VOLCANO_HOVERS',
    'OOT_WINDMILL_HP_NOTHING'
  ],
  specialConds: {
    BRIDGE: {
      count: 5,
      stones: true,
      medallions: true,
      remains: true,
      skullsGold: false,
      skullsSwamp: false,
      skullsOcean: false,
      fairiesWF: false,
      fairiesSH: false,
      fairiesGB: false,
      fairiesST: false,
      fairyTown: false,
      masksRegular: false,
      masksTransform: false,
      masksOot: false,
      triforce: false,
      coinsRed: false,
      coinsGreen: false,
      coinsBlue: false,
      coinsYellow: false
    },
    MOON: {
      count: 0,
      stones: false,
      medallions: false,
      remains: false,
      skullsGold: false,
      skullsSwamp: false,
      skullsOcean: false,
      fairiesWF: false,
      fairiesSH: false,
      fairiesGB: false,
      fairiesST: false,
      fairyTown: false,
      masksRegular: false,
      masksTransform: false,
      masksOot: false,
      triforce: false,
      coinsRed: false,
      coinsGreen: false,
      coinsBlue: false,
      coinsYellow: false
    },
    LACS: {
      count: 0,
      stones: false,
      medallions: false,
      remains: false,
      skullsGold: false,
      skullsSwamp: false,
      skullsOcean: false,
      fairiesWF: false,
      fairiesSH: false,
      fairiesGB: false,
      fairiesST: false,
      fairyTown: false,
      masksRegular: false,
      masksTransform: false,
      masksOot: false,
      triforce: false,
      coinsRed: false,
      coinsGreen: false,
      coinsBlue: false,
      coinsYellow: false
    },
    GANON_BK: {
      count: 0,
      stones: false,
      medallions: false,
      remains: false,
      skullsGold: false,
      skullsSwamp: false,
      skullsOcean: false,
      fairiesWF: false,
      fairiesSH: false,
      fairiesGB: false,
      fairiesST: false,
      fairyTown: false,
      masksRegular: false,
      masksTransform: false,
      masksOot: false,
      triforce: false,
      coinsRed: false,
      coinsGreen: false,
      coinsBlue: false,
      coinsYellow: false
    },
    MAJORA: {
      count: 5,
      stones: true,
      medallions: true,
      remains: true,
      skullsGold: false,
      skullsSwamp: false,
      skullsOcean: false,
      fairiesWF: false,
      fairiesSH: false,
      fairiesGB: false,
      fairiesST: false,
      fairyTown: false,
      masksRegular: false,
      masksTransform: false,
      masksOot: false,
      triforce: false,
      coinsRed: false,
      coinsGreen: false,
      coinsBlue: false,
      coinsYellow: false
    }
  },
  plando: { locations: { 'OOT Zora River Bean Seller': 'OOT_MAGIC_BEAN' } },
  hints: [
    { type: 'item', amount: 1, extra: 2, item: 'OOT_SWORD_MASTER' },
    { type: 'item', amount: 1, extra: 2, item: 'SHARED_SONG_TIME' },
    { type: 'item', amount: 1, extra: 2, item: 'MM_MASK_CAPTAIN' },
    { type: 'item', amount: 1, extra: 2, item: 'SHARED_SONG_STORMS' },
    { type: 'item', amount: 2, extra: 1, item: 'SHARED_OCARINA' },
    { type: 'woth', amount: 10, extra: 1 },
    { type: 'foolish', amount: 8, extra: 1 },
    { type: 'always', amount: 'max', extra: 1 },
    { type: 'sometimes', amount: 4, extra: 1 }
  ]
});

export const PRESETS: Presets = {
  'Default': PRESET_DEFAULT,
  'Beginner': PRESET_BEGINNER,
  'Blitz': PRESET_BLITZ,
  'Blitz (with pre-completed dungeons)': PRESET_BLITZ_PRECOMPLETED,
  'Triforce Blitz': PRESET_TRIFORCE_BLITZ,
  'Crosskeys': PRESET_CROSSKEYS,
  'Allsanity': PRESET_ALLSANITY,
  'Hell': PRESET_HELL,
};
