export interface MultiplayerGuide {
  slug: string;
  title: string;
  searchTitle: string;
  description: string;
  answer: string;
  confirmed: string[];
  unknown: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
}

export const multiplayerGuides: MultiplayerGuide[] = [
  {
    slug: 'crossplay',
    title: 'Crossplay',
    searchTitle: 'Does Ace Combat 8 Have Crossplay?',
    description: 'Ace Combat 8 crossplay is confirmed with cross-platform multiplayer and co-op. See supported launch platforms and the settings that remain unannounced.',
    answer: 'Yes. Ace Combat 8 officially supports cross-platform multiplayer. The launch platforms are PS5, Xbox Series X|S, and PC via Steam, although Bandai Namco has not yet published account-linking, opt-out, input-pool, or cross-progression rules.',
    confirmed: ['Cross-platform multiplayer is listed on Steam.', 'Ace Combat Online includes co-op and cross-platform play.', 'PS5, Xbox Series X|S, and Steam are the confirmed platforms.'],
    unknown: ['Whether crossplay can be disabled', 'Whether matchmaking separates controller and keyboard input', 'Whether progress or purchases transfer between platforms'],
    sections: [
      { heading: 'Which platforms can use crossplay?', paragraphs: ['The official platform set is PS5, Xbox Series X|S, and Windows PC through Steam. Steam labels the game Cross-Platform Multiplayer, while the official online description says players can sortie in co-op and cross-platform modes.', 'Neither statement identifies a separate old-generation pool because PS4 and Xbox One versions have not been announced.'] },
      { heading: 'Crossplay is not the same as cross-progression', paragraphs: ['Crossplay means people on different supported platforms can play together. Cross-progression means saves, unlocks, or account inventory move between platforms. Only the first is confirmed. Do not buy multiple versions expecting progression or Ace Pass purchases to transfer.'] },
      { heading: 'What friends should prepare for launch', paragraphs: ['Each player needs a supported version and the online requirements of their platform. Bandai Namco has not yet documented friend codes, party creation, account linking, or voice chat, so exact setup instructions must wait for the online manual or retail interface.'] },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 cross-platform?', a: 'Yes. Cross-platform multiplayer is an official Steam feature and part of Ace Combat Online.' },
      { q: 'Can PS5 play with Xbox and PC?', a: 'Those are the three confirmed platform families, but the publisher has not yet documented every party and matchmaking rule.' },
      { q: 'Does Ace Combat 8 have cross-save?', a: 'Cross-save or cross-progression has not been announced.' },
    ],
  },
  {
    slug: 'co-op',
    title: 'Online Co-op',
    searchTitle: 'Ace Combat 8 Co-op Missions Explained',
    description: 'Ace Combat 8 online co-op missions are confirmed. Learn what the official listing establishes and which player counts, rewards and campaign questions remain open.',
    answer: 'Yes. Ace Combat 8 has online co-op as part of Ace Combat Online. Co-op missions are confirmed, but Bandai Namco has not yet published the mission list, exact co-op party size, reward structure, or whether campaign missions can be played cooperatively.',
    confirmed: ['Steam lists Online Co-op.', 'Ace Combat Online includes co-op among its modes.', 'Co-op is part of the game’s online multiplayer offering.'],
    unknown: ['Exact co-op player count', 'Whether story campaign missions support co-op', 'Mission rewards, ranks and difficulty scaling'],
    sections: [
      { heading: 'What “co-op missions” confirms', paragraphs: ['The official description says players can sortie into online missions with pilots worldwide in modes including co-op. This confirms cooperative online sorties, not merely teams inside a competitive match.', 'It does not prove that the single-player campaign can be hosted with friends. Until the publisher says otherwise, treat Ace Combat Online co-op and Campaign Mode as separate offerings.'] },
      { heading: 'Co-op party size and matchmaking', paragraphs: ['No primary source currently gives a dedicated co-op party limit. PlayStation coverage mentions up to eight players for competitive combat, but that number should not be copied onto co-op without a mode-specific statement. Invite, public matchmaking, private room, and difficulty options remain undocumented.'] },
      { heading: 'Progression and rewards', paragraphs: ['Ace Pass rewards and aircraft progression exist in the wider game, but the publisher has not said how much online co-op contributes or whether missions have unique rewards. Exact XP, MRP, rank, and first-clear claims should wait for the retail interface.'] },
    ],
    faqs: [
      { q: 'Does Ace Combat 8 have co-op?', a: 'Yes. Online Co-op and co-op missions are officially confirmed.' },
      { q: 'Is the campaign co-op?', a: 'Campaign co-op has not been announced; official wording places co-op inside Ace Combat Online.' },
      { q: 'How many players are in co-op?', a: 'A mode-specific co-op player count has not yet been published.' },
    ],
  },
  {
    slug: 'pvp',
    title: 'Online PvP',
    searchTitle: 'Ace Combat 8 PvP Modes and Player Count',
    description: 'Ace Combat 8 online PvP is confirmed, with competitive aerial combat and cross-platform support. See the confirmed scope and currently unknown mode rules.',
    answer: 'Ace Combat 8 includes online PvP and cross-platform competitive play. Official PlayStation coverage describes competitive combat for up to eight players, while named PvP playlists, team sizes, ranked rules, and private-match options remain unannounced.',
    confirmed: ['Steam lists Online PvP.', 'Competitive combat supports up to eight players in official PlayStation coverage.', 'Cross-platform multiplayer is supported.'],
    unknown: ['Named PvP playlists and scoring rules', 'Ranked ladder and seasonal structure', 'Private rooms, bots and spectator settings'],
    sections: [
      { heading: 'Confirmed competitive scope', paragraphs: ['Steam separately lists Online PvP and Online Co-op, confirming that competitive play is not being inferred from the general multiplayer label. PlayStation’s 2026 game overview describes up to eight players for competitive combat.', 'The final distribution between free-for-all, team battles, objective modes, or rotating events has not been detailed.'] },
      { heading: 'Cross-platform matchmaking', paragraphs: ['PvP sits inside the same cross-platform online offering available on PS5, Xbox Series X|S, and Steam. Input separation, crossplay opt-out, regional servers, connection indicators, and anti-cheat behavior have not been documented, so this guide does not promise specific matchmaking controls.'] },
      { heading: 'Loadouts and competitive progression', paragraphs: ['Aircraft upgrades, special weapons, and Ace Pass progression are confirmed game systems, but their exact PvP restrictions are not. It is not yet known whether specific parts are normalized, whether certain aircraft are restricted, or how seasonal rewards relate to competitive rank.'] },
    ],
    faqs: [
      { q: 'Does Ace Combat 8 have PvP?', a: 'Yes. Steam officially lists Online PvP.' },
      { q: 'How many players are in Ace Combat 8 PvP?', a: 'Official PlayStation coverage describes competitive combat for up to eight players.' },
      { q: 'Is there ranked multiplayer?', a: 'A ranked ladder or ranked playlist has not yet been announced.' },
    ],
  },
  {
    slug: 'online-lobby',
    title: 'Online Lobby & Avatars',
    searchTitle: 'Ace Combat Online Lobby and Avatars',
    description: 'Explore the confirmed Ace Combat Online air-base lobby with a custom avatar before multiplayer sorties, plus current limits on social and party details.',
    answer: 'Ace Combat Online includes the series’ first online lobby: an air base that players explore with a customizable avatar before entering multiplayer games. Party tools, lobby capacity, social features, and avatar customization limits are not yet published.',
    confirmed: ['The lobby is set at an air base.', 'Players explore with a custom avatar.', 'The lobby is used before entering multiplayer games.'],
    unknown: ['Lobby player capacity', 'Text, voice and emote features', 'Party invites, clans and private spaces'],
    sections: [
      { heading: 'What players do in the air-base lobby', paragraphs: ['The official online description says players step into the series’ first online lobby and explore an air base with a custom avatar before diving into multiplayer games. This makes the lobby a navigable pre-match space rather than only a menu label.', 'Bandai Namco has not shown a complete activity list, so stores, training areas, minigames, or social hubs should not be assumed.'] },
      { heading: 'Avatar customization', paragraphs: ['Custom avatars are confirmed, and the Deluxe cosmetic set includes a Tasha Costume Set marked for Online Mode only. Ace Pass information also establishes cosmetic rewards. The full avatar editor, body options, slots, rarity system, and whether every cosmetic is earnable have not been detailed.'] },
      { heading: 'Lobby versus matchmaking', paragraphs: ['The air base is the social space before a sortie; matchmaking determines the actual mode and opponents. It is not yet clear whether players join persistent public instances, friend-only rooms, or regional hubs, nor how parties move together from the base into co-op or PvP.'] },
    ],
    faqs: [
      { q: 'Does Ace Combat 8 have an online lobby?', a: 'Yes. Ace Combat Online introduces the series’ first explorable online lobby.' },
      { q: 'Can you customize an avatar?', a: 'Yes. A custom avatar is used in the air-base lobby, and online cosmetics are confirmed.' },
      { q: 'How many players fit in a lobby?', a: 'Lobby capacity has not yet been announced.' },
    ],
  },
];

export const multiplayerSources = [
  { label: 'Official Steam listing', href: 'https://store.steampowered.com/app/2288340/ACE_COMBAT_8_WINGS_OF_THEVE/' },
  { label: 'Official Bandai Namco game page', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
  { label: 'Official PlayStation 2026 overview', href: 'https://blog.playstation.com/2026/07/14/19-unmissable-ps5-games-still-releasing-in-2026/' },
];
