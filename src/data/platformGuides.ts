export interface PlatformGuide {
  slug: string;
  name: string;
  shortName: string;
  status: 'Confirmed' | 'Not announced';
  answer: string;
  description: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  sources: { label: string; href: string }[];
}

export const platformGuides: PlatformGuide[] = [
  {
    slug: 'ps5',
    name: 'PlayStation 5',
    shortName: 'PS5',
    status: 'Confirmed',
    answer: 'Yes. Ace Combat 8: Wings of Theve is confirmed for PS5 and launches on October 2, 2026. It is a current-generation release; no PS4 version has been announced.',
    description: 'Ace Combat 8 is confirmed for PS5 on October 2, 2026. See release timing, editions, preorder bonuses, multiplayer support, and the current PSVR2 status.',
    facts: [
      { label: 'Release', value: 'October 2, 2026' },
      { label: 'Early access', value: 'September 28, 3:00 PM PDT' },
      { label: 'Edition options', value: 'Standard and Deluxe' },
      { label: 'PS4 upgrade', value: 'No PS4 version announced' },
    ],
    sections: [
      {
        heading: 'What PS5 players get',
        paragraphs: ['The PS5 release includes the single-player campaign and Ace Combat Online. Bandai Namco lists both single-player and multiplayer for the game. The Deluxe Edition adds three days of early access, a Premium Ace Pass Plus voucher, and a cosmetic set.'],
        bullets: ['All preorders include the playable F-14A.', 'The preorder version of Ace Combat Zero: The Belkan War is a PS5 port of the 2006 PS2 game.', 'Deluxe early access begins before the standard October 2 launch.'],
      },
      {
        heading: 'PS5 release and unlock time',
        paragraphs: ['PlayStation published exact launch timing: October 1 at 3:00 PM PT / 6:00 PM ET, October 2 at 12:00 AM CEST, and October 2 at 7:00 AM JST. Store timing can differ by region, so use the countdown shown on your own PlayStation Store purchase as the final check.'],
      },
      {
        heading: 'Is there a PSVR2 mode?',
        paragraphs: ['A PSVR2 mode is not listed on the official game or PlayStation product pages as of July 17, 2026. The campaign uses first-person story scenes, but that presentation is not confirmation of VR support. Buy the game for its standard PS5 modes unless Bandai Namco announces otherwise.'],
      },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 on PS5?', a: 'Yes. PS5 is one of the three officially confirmed platforms.' },
      { q: 'Does the PS5 preorder include Ace Combat Zero?', a: 'Yes. Bandai Namco and PlayStation list a PS5-ported version of Ace Combat Zero: The Belkan War plus the playable F-14A as preorder bonuses.' },
      { q: 'Can PS5 players start early?', a: 'Digital Deluxe Edition preorder early access begins September 28, 2026 at 3:00 PM PDT.' },
    ],
    sources: [
      { label: 'Official Bandai Namco game page', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'PlayStation release announcement', href: 'https://blog.playstation.com/2026/06/02/ace-combat-8-wings-of-theve-launches-globally-october-2-on-ps5/' },
    ],
  },
  {
    slug: 'xbox-series-x-s',
    name: 'Xbox Series X|S',
    shortName: 'Xbox Series X|S',
    status: 'Confirmed',
    answer: 'Yes. Ace Combat 8 is confirmed for Xbox Series X and Xbox Series S on October 2, 2026. Xbox One is not included in Bandai Namco’s announced platform list.',
    description: 'Ace Combat 8 is confirmed for Xbox Series X|S. Check launch date, editions, preorder content, cross-platform multiplayer, and Xbox One compatibility status.',
    facts: [
      { label: 'Release', value: 'October 2, 2026' },
      { label: 'Consoles', value: 'Xbox Series X and Series S' },
      { label: 'Multiplayer', value: 'Confirmed' },
      { label: 'Xbox One version', value: 'Not announced' },
    ],
    sections: [
      {
        heading: 'Confirmed Xbox release',
        paragraphs: ['Bandai Namco consistently lists Xbox Series X|S beside PS5 and Steam. The Xbox release includes the campaign and multiplayer, with Standard and Deluxe digital editions offered for preorder. The official Bandai Namco Store also lists Xbox Series X physical options in supported regions.'],
      },
      {
        heading: 'Xbox preorder and Deluxe content',
        paragraphs: ['The preorder offer includes Ace Combat Zero: The Belkan War and the playable F-14A. Deluxe adds three days of early access, the Premium Ace Pass Plus voucher, and cosmetics. Availability and whether a particular item is physical or digital can vary by country, so verify the selected platform and format before checkout.'],
      },
      {
        heading: 'Cross-platform play',
        paragraphs: ['Official PlayStation coverage describes Ace Combat Online as supporting cross-platform play, co-op missions, and competitive combat for up to eight players. Bandai Namco has not yet published every matchmaking and opt-out detail, so this page does not assume how crossplay settings will work on Xbox at launch.'],
      },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 on Xbox Series S?', a: 'Yes. The official platform label is Xbox Series X|S, which includes Series S.' },
      { q: 'Is Ace Combat 8 coming to Xbox One?', a: 'No Xbox One version has been announced. The official list names only Xbox Series X|S in the Xbox family.' },
      { q: 'Is Ace Combat 8 on Xbox Game Pass?', a: 'Bandai Namco has not announced a Game Pass release as of July 17, 2026. A normal Xbox release does not by itself mean Game Pass inclusion.' },
    ],
    sources: [
      { label: 'Official Bandai Namco game page', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'Official systems walkthrough news', href: 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-walkthrough-trailer-dives-into-aerial-combat-game-play-and-customization' },
    ],
  },
  {
    slug: 'pc',
    name: 'PC (Steam)',
    shortName: 'PC',
    status: 'Confirmed',
    answer: 'Yes. Ace Combat 8 is confirmed for Windows PC through Steam on October 2, 2026. Bandai Namco has not announced an Epic Games Store or Microsoft Store PC version.',
    description: 'Ace Combat 8 is confirmed for PC via Steam. Find the release date, store availability, system requirement status, preorder bonuses, and Steam Deck guidance.',
    facts: [
      { label: 'Store', value: 'Steam' },
      { label: 'Release', value: 'October 2, 2026' },
      { label: 'Developer', value: 'Bandai Namco Aces Inc.' },
      { label: 'Engine', value: 'Unreal Engine 5' },
    ],
    sections: [
      {
        heading: 'PC storefront and editions',
        paragraphs: ['The official announcement names PC via Steam. Standard and Deluxe editions are available for preorder, while the collector-style Joker Flight Pack is sold only in selected configurations and regions. Do not assume that a console physical bonus is included with a Steam purchase; compare the contents shown for the exact SKU.'],
      },
      {
        heading: 'PC requirements and performance',
        paragraphs: ['The game uses Unreal Engine 5, but an engine name alone cannot tell you the required GPU, CPU, memory, storage, or expected frame rate. Use the current Steam requirement table when it becomes available and compare it with your exact hardware. Our system requirements page tracks confirmed specifications separately from estimates.'],
      },
      {
        heading: 'Steam Deck and handheld PCs',
        paragraphs: ['A Steam release does not guarantee Steam Deck verification. Valve has not published a compatibility result that we can rely on as of July 17, 2026. Handheld performance will depend on final requirements, anti-cheat behavior, controls, and launch optimization, so wait for a Valve rating or tested retail build before buying specifically for a handheld.'],
      },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 coming to PC?', a: 'Yes. Bandai Namco confirms a Windows PC release through Steam.' },
      { q: 'Will Ace Combat 8 be on Epic Games Store?', a: 'No Epic Games Store version has been announced. Steam is the only confirmed PC storefront as of July 17, 2026.' },
      { q: 'Does the PC preorder include Ace Combat Zero?', a: 'Bandai Namco lists Ace Combat Zero: The Belkan War and the playable F-14A as preorder bonuses; check the Steam offer in your region before purchase.' },
    ],
    sources: [
      { label: 'Official Bandai Namco game page', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'Official systems walkthrough news', href: 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-walkthrough-trailer-dives-into-aerial-combat-game-play-and-customization' },
    ],
  },
  {
    slug: 'ps4',
    name: 'PlayStation 4',
    shortName: 'PS4',
    status: 'Not announced',
    answer: 'No PS4 version of Ace Combat 8 has been announced. Bandai Namco lists PS5, Xbox Series X|S, and PC via Steam, making this a current-generation release based on all official information available July 17, 2026.',
    description: 'Is Ace Combat 8 on PS4? No PS4 version is announced. See the confirmed platform list, what PS4 owners can do, and why backward compatibility does not apply.',
    facts: [
      { label: 'PS4 status', value: 'Not announced' },
      { label: 'PlayStation platform', value: 'PS5 only' },
      { label: 'Release', value: 'October 2, 2026' },
      { label: 'Upgrade path', value: 'None announced' },
    ],
    sections: [
      {
        heading: 'Why the PS4 listing is absent',
        paragraphs: ['Every official announcement and product page currently names PlayStation 5, not PlayStation 4. That is stronger evidence than retailer placeholders or search snippets. Until Bandai Namco adds PS4 to its platform list, treat the game as unavailable on PS4.'],
      },
      {
        heading: 'Backward compatibility does not help',
        paragraphs: ['PS5 can run many PS4 games, but backward compatibility only works in that direction. A native PS5 game cannot be installed or played on PS4. Buying the PS5 edition therefore does not create a PS4 copy, and no cross-generation bundle or upgrade program has been announced.'],
      },
      {
        heading: 'Options for PS4 owners',
        paragraphs: ['Ace Combat 7: Skies Unknown remains the main modern-series option on PS4. For Ace Combat 8, the confirmed choices are PS5, Xbox Series X|S, or a compatible Windows PC. If you are considering a console upgrade, wait for final performance comparisons before choosing hardware solely for this game.'],
      },
    ],
    faqs: [
      { q: 'Will Ace Combat 8 release on PS4?', a: 'Bandai Namco has not announced a PS4 release. Only PS5 is named for PlayStation.' },
      { q: 'Can I play the PS5 disc on PS4?', a: 'No. PS4 cannot run PS5 games.' },
      { q: 'Is there a PS4-to-PS5 upgrade?', a: 'No upgrade path is announced because there is no announced PS4 edition.' },
    ],
    sources: [
      { label: 'Official Bandai Namco platform list', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'Official PlayStation game page', href: 'https://www.playstation.com/en-us/games/ace-combat-8-wings-of-theve/' },
    ],
  },
  {
    slug: 'xbox-one',
    name: 'Xbox One',
    shortName: 'Xbox One',
    status: 'Not announced',
    answer: 'No Xbox One version of Ace Combat 8 has been announced. The official Xbox platform is Xbox Series X|S; Xbox One is absent from Bandai Namco’s release information.',
    description: 'Is Ace Combat 8 coming to Xbox One? No version is announced. Check the confirmed Xbox consoles, compatibility limits, and current Game Pass/cloud status.',
    facts: [
      { label: 'Xbox One status', value: 'Not announced' },
      { label: 'Confirmed Xbox', value: 'Series X|S' },
      { label: 'Game Pass', value: 'Not announced' },
      { label: 'Cloud option', value: 'Not announced' },
    ],
    sections: [
      {
        heading: 'The confirmed Xbox platforms',
        paragraphs: ['Bandai Namco’s platform list says Xbox Series X|S. That wording covers both current Xbox consoles but not Xbox One, Xbox One S, or Xbox One X. Retailer pages can sometimes use broad “Xbox” labels, so verify that a listing specifically says Series X|S.'],
      },
      {
        heading: 'Can cloud gaming make it playable on Xbox One?',
        paragraphs: ['Only if a supported cloud service adds the game. No Xbox Game Pass or Xbox Cloud Gaming release has been announced as of July 17, 2026, so cloud play should not be treated as an Xbox One solution. We will update the conclusion only after Microsoft or Bandai Namco publishes a specific announcement.'],
      },
      {
        heading: 'What to buy instead',
        paragraphs: ['Xbox Series S is included in the confirmed platform label and is the lower-cost current Xbox route, while Series X supports disc-based purchases. PC via Steam and PS5 are the other confirmed platforms. Check final performance and edition availability before upgrading.'],
      },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 on Xbox One?', a: 'No Xbox One edition has been announced.' },
      { q: 'Does Xbox Series X|S include Xbox One?', a: 'No. Series X|S identifies the current Xbox generation only.' },
      { q: 'Can Xbox One stream Ace Combat 8?', a: 'No streaming option has been announced. Game Pass and Xbox Cloud Gaming inclusion are currently unconfirmed.' },
    ],
    sources: [
      { label: 'Official Bandai Namco platform list', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'Official release announcement', href: 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-takes-flight-this-october' },
    ],
  },
  {
    slug: 'nintendo-switch-2',
    name: 'Nintendo Switch 2',
    shortName: 'Switch 2',
    status: 'Not announced',
    answer: 'Ace Combat 8 has not been announced for Nintendo Switch 2 or the original Switch. The confirmed launch platforms are PS5, Xbox Series X|S, and PC via Steam.',
    description: 'Is Ace Combat 8 on Nintendo Switch 2? No Switch version is announced. See the official platform list and how to judge future port claims without relying on rumors.',
    facts: [
      { label: 'Switch 2 status', value: 'Not announced' },
      { label: 'Original Switch', value: 'Not announced' },
      { label: 'Confirmed launch', value: 'PS5, Xbox Series X|S, Steam' },
      { label: 'Port date', value: 'None' },
    ],
    sections: [
      {
        heading: 'Current Switch 2 status',
        paragraphs: ['Nintendo hardware does not appear on the official Ace Combat 8 product page, preorder selector, or June 2026 release announcement. There is therefore no confirmed Switch 2 release date, edition, preorder bonus, or upgrade path.'],
      },
      {
        heading: 'Could a port happen later?',
        paragraphs: ['A future port is possible in the ordinary sense that publishers can add platforms later, but Bandai Namco has not promised one. Ace Combat 7 eventually reached Nintendo Switch years after its original release; that history does not confirm the same plan or timing for Ace Combat 8.'],
      },
      {
        heading: 'How to verify a real announcement',
        paragraphs: ['Look for Switch 2 in Bandai Namco’s platform selector and on Nintendo’s own store or news channels. A retailer placeholder, PEGI-style database entry, social post, or article repeating another rumor is not enough on its own. This page records the official status and date checked.'],
      },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 coming to Switch 2?', a: 'No Switch 2 version has been announced as of July 17, 2026.' },
      { q: 'Is Ace Combat 8 on Nintendo Switch?', a: 'No original Switch version is announced either.' },
      { q: 'Does Ace Combat 7 on Switch confirm an Ace Combat 8 port?', a: 'No. A previous game’s port does not confirm platforms or timing for the sequel.' },
    ],
    sources: [
      { label: 'Official Bandai Namco platform list', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'Official release announcement', href: 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-takes-flight-this-october' },
    ],
  },
  {
    slug: 'steam-deck',
    name: 'Steam Deck',
    shortName: 'Steam Deck',
    status: 'Not announced',
    answer: 'Steam Deck compatibility is not confirmed. Ace Combat 8 is coming to Steam, but that does not establish a Valve Verified rating, acceptable handheld performance, or launch-day compatibility.',
    description: 'Will Ace Combat 8 run on Steam Deck? Compatibility is not confirmed. Learn what Steam availability means, what remains unknown, and when a safe verdict is possible.',
    facts: [
      { label: 'Steam release', value: 'Confirmed' },
      { label: 'Deck rating', value: 'Not confirmed' },
      { label: 'Launch', value: 'October 2, 2026' },
      { label: 'Safe verdict', value: 'Wait for rating or retail tests' },
    ],
    sections: [
      {
        heading: 'Steam does not equal Steam Deck Verified',
        paragraphs: ['The Windows PC version is confirmed for Steam. Valve evaluates Deck compatibility separately and can rate a game Verified, Playable, Unsupported, or Unknown. Until the store displays a result based on the release build, any compatibility claim is an estimate.'],
      },
      {
        heading: 'What will determine compatibility',
        paragraphs: ['A useful Deck verdict requires more than whether the executable launches. Frame rate during dense cloud effects and superweapon battles, controller prompts, text size, launcher behavior, online services, and sleep/resume stability all matter. Final PC requirements will also show whether the handheld clears the baseline hardware target.'],
      },
      {
        heading: 'Best buying advice for handheld players',
        paragraphs: ['Do not preorder solely for Steam Deck use unless you are comfortable testing within Steam’s applicable refund rules. Wait for Valve’s badge and independent testing of campaign and online modes on the retail build. Performance on newer Windows handhelds will also need device-specific tests.'],
      },
    ],
    faqs: [
      { q: 'Is Ace Combat 8 Steam Deck Verified?', a: 'No confirmed Valve rating is available as of July 17, 2026.' },
      { q: 'Will Ace Combat 8 be on Steam?', a: 'Yes. Steam is the officially announced PC storefront.' },
      { q: 'Can I assume it runs because Ace Combat 7 does?', a: 'No. The sequel uses different technology and online systems, so the previous game cannot establish compatibility.' },
    ],
    sources: [
      { label: 'Official Bandai Namco platform list', href: 'https://www.bandainamcoent.com/games/ace-combat-8' },
      { label: 'Official systems walkthrough news', href: 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-walkthrough-trailer-dives-into-aerial-combat-game-play-and-customization' },
    ],
  },
];

export const confirmedPlatforms = platformGuides.filter((guide) => guide.status === 'Confirmed');
export const unannouncedPlatforms = platformGuides.filter((guide) => guide.status === 'Not announced');
