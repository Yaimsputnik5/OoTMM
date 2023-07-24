export const CONFVARS = [
  'GANON_NO_BOSS_KEY',
  'SMALL_KEY_SHUFFLE',
  'CSMC',
  'OOT_PROGRESSIVE_SHIELDS',
  'OOT_PROGRESSIVE_SWORDS',
  'OOT_PROGRESSIVE_SWORDS_GORON',
  'MM_PROGRESSIVE_SHIELDS',
  'MM_PROGRESSIVE_LULLABY',
  'DOOR_OF_TIME_OPEN',
  'ER_DUNGEONS',
  'SHARED_BOWS',
  'SHARED_BOMB_BAGS',
  'SHARED_MAGIC',
  'SHARED_MAGIC_ARROW_FIRE',
  'SHARED_MAGIC_ARROW_ICE',
  'SHARED_MAGIC_ARROW_LIGHT',
  'SHARED_SONG_EPONA',
  'SHARED_SONG_STORMS',
  'SHARED_SONG_TIME',
  'SHARED_SONG_SUN',
  'SHARED_NUTS_STICKS',
  'SHARED_HOOKSHOT',
  'SHARED_LENS',
  'SHARED_OCARINA',
  'SHARED_MASK_GORON',
  'SHARED_MASK_ZORA',
  'SHARED_MASK_BUNNY',
  'SHARED_MASK_TRUTH',
  'SHARED_MASK_KEATON',
  'SHARED_WALLETS',
  'SHARED_HEALTH',
  'SHARED_SOULS',
  'OOT_CROSS_WARP',
  'MM_CROSS_WARP',
  'MM_CROSS_WARP_ADULT',
  'MM_OCARINA_FAIRY',
  'MM_HOOKSHOT_SHORT',
  'MM_SONG_SUN',
  'OOT_SKIP_ZELDA',
  'OOT_OPEN_KAKARIKO_GATE',
  'ER_ANY',
  'OOT_LACS_CUSTOM',
  'OOT_GANON_BK_CUSTOM',
  'OOT_ZK_OPEN',
  'OOT_ZK_OPEN_ADULT',
  'GOAL_GANON',
  'GOAL_MAJORA',
  'GOAL_TRIFORCE',
  'MM_MAJORA_CHILD_CUSTOM',
  'FILL_WALLETS',
  'CHILD_WALLET',
  'OOT_OPEN_DEKU',
  'OOT_ADULT_WELL',
  'COLOSSAL_WALLET',
  'BOTTOMLESS_WALLET',
  'OOT_AGELESS_BOOTS',
  'MM_OWL_SHUFFLE',
  'CSMC_AGONY',
  'OOT_CARPENTERS_ONE',
  'OOT_CARPENTERS_NONE',
  'OOT_NO_BOSS_KEY',
  'OOT_NO_SMALL_KEY',
  'MM_NO_BOSS_KEY',
  'MM_NO_SMALL_KEY',
  'CSMC_HEARTS',
  'OOT_BLUE_FIRE_ARROWS',
  'ER_BOSS',
  'OOT_SILVER_RUPEE_SHUFFLE',
  'OOT_FREE_SCARECROW',
  'OOT_SOULS',
  'MM_SOULS',
] as const;

export type Confvar = typeof CONFVARS[number];

export const CONFVARS_VALUES: {[k in Confvar]: number} = {} as any;
for (let i = 0; i < CONFVARS.length; ++i) {
  CONFVARS_VALUES[CONFVARS[i]] = i;
}
