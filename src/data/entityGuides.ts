export interface EntityGuide {
  slug: string; title: string; searchTitle: string; description: string; answer: string;
  status: string; facts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
  sources: { label: string; href: string }[];
}

const game = 'https://www.bandainamcoent.com/games/ace-combat-8';
const characters = `${game}/characters`;
const walkthrough = `${game}/walkthrough`;
const psLaunch = 'https://blog.playstation.com/2026/06/02/ace-combat-8-wings-of-theve-launches-globally-october-2-on-ps5/';
const officialStore = 'https://store.bandainamcoent.com/merchandise/ace-combat/ace-combat-8/';

export const itemGuides: EntityGuide[] = [
  {
    slug:'f-4e-mobius-skin', title:'F-4E Mobius Squadron 25th Anniversary Skin', searchTitle:'F-4E Mobius Squadron 25th Anniversary Skin',
    description:'How the F-4E Mobius Squadron 25th Anniversary Skin is obtained and where it can be used in Ace Combat 8, based on the official Deluxe Edition listing.',
    answer:'The F-4E Mobius Squadron 25th Anniversary Skin is part of the Deluxe Edition cosmetic set. It can be used online immediately, while Campaign use unlocks only after completing every mission.', status:'Deluxe cosmetic set',
    facts:[{label:'Aircraft',value:'F-4E Phantom II'},{label:'Theme',value:'Mobius Squadron · 25th Anniversary'},{label:'Online use',value:'Included'},{label:'Campaign use',value:'After all missions'}],
    sections:[{heading:'How to obtain the Mobius skin',paragraphs:['Bandai Namco lists this aircraft skin inside the Deluxe Edition customizable cosmetic set. It is therefore not presented as a Standard Edition or free Ace Pass reward. The Deluxe Edition remains available after launch, although post-launch purchases do not receive the digital preorder early-access benefit.']},{heading:'Mode restrictions',paragraphs:['The official listing distinguishes online access from Campaign access: the skin is available online, but Campaign use requires completion of all missions. No individual retail price or separate purchase option has been announced.']}],
    faqs:[{q:'Is the Mobius skin in the Standard Edition?',a:'No. It is listed in the Deluxe Edition cosmetic set.'},{q:'Can it be used in Campaign?',a:'Yes, after completing all Campaign missions.'}], sources:[{label:'Official editions and cosmetic FAQ',href:game}],
  },
  {
    slug:'fa-18c-team-zvezda-skin', title:'F/A-18C Team Zvezda Skin', searchTitle:'F/A-18C Team Zvezda Skin Unlock Guide',
    description:'Official unlock and mode details for the F/A-18C Team Zvezda Skin in Ace Combat 8, including its connection to Tasha Severskya.',
    answer:'The F/A-18C Team Zvezda Skin is included in the Deluxe Edition cosmetic set. It is available online and becomes usable in Campaign after every mission is completed.', status:'Deluxe cosmetic set',
    facts:[{label:'Aircraft',value:'F/A-18C'},{label:'Theme',value:'Team Zvezda'},{label:'Character link',value:'Tasha Severskya'},{label:'Campaign use',value:'After all missions'}],
    sections:[{heading:'Why the Zvezda name matters',paragraphs:['Tasha Severskya was a star pilot in Yuktobania’s Zvezda aerobatic team before being stranded aboard Endurance when war began. The skin uses the same team identity, making it a character-linked aircraft cosmetic rather than evidence that Zvezda is a separate playable faction.']},{heading:'How the skin unlock works',paragraphs:['The item comes with the Deluxe customizable cosmetic set. Online use is included, while Campaign use is gated behind completing all missions. Bandai Namco has not listed it as an individual preorder bonus.']}],
    faqs:[{q:'Who is the Zvezda skin connected to?',a:'It is connected to Joker Flight pilot Tasha Severskya’s aerobatic-team background.'},{q:'Is it a preorder-only skin?',a:'No. It is listed as part of the Deluxe cosmetic set.'}], sources:[{label:'Official editions and cosmetic FAQ',href:game},{label:'Official Tasha profile',href:characters}],
  },
  {
    slug:'tasha-costume-set', title:'Tasha Costume Set', searchTitle:'Tasha Costume Set — Mode and Edition Details',
    description:'What the Tasha Costume Set includes at the currently confirmed level, which Ace Combat 8 edition supplies it, and its online-only restriction.',
    answer:'The Tasha Costume Set is an online-only customization item included with the Deluxe Edition cosmetic set. Bandai Namco has not published its individual costume pieces or a separate price.', status:'Online-only Deluxe cosmetic',
    facts:[{label:'Character',value:'Tasha Severskya'},{label:'Mode',value:'Online only'},{label:'Bundle',value:'Deluxe cosmetic set'},{label:'Separate price',value:'Not announced'}],
    sections:[{heading:'Confirmed use',paragraphs:['Unlike the two aircraft skins in the same bundle, the official description labels the Tasha Costume Set as Online Mode only. It should not be treated as a Campaign wardrobe unlock unless Bandai Namco changes that description.']},{heading:'What remains undisclosed',paragraphs:['The publisher has not shown a complete piece list, color variants, avatar-slot rules, or a separate store listing. This page tracks the confirmed entitlement without inventing visual components.']}],
    faqs:[{q:'Can the Tasha Costume Set be used in Campaign?',a:'No Campaign use is listed; the official description says Online Mode only.'},{q:'Does the set come with Deluxe?',a:'Yes, through the Deluxe customizable cosmetic set.'}], sources:[{label:'Official editions and cosmetic FAQ',href:game}],
  },
  {
    slug:'scarlet-missile-smoke', title:'Scarlet Missile Smoke', searchTitle:'Scarlet Missile Smoke Cosmetic — How to Get It',
    description:'How to obtain Scarlet Missile Smoke in Ace Combat 8 and the official online-only usage restriction for this Deluxe cosmetic effect.',
    answer:'Scarlet Missile Smoke is an online-only missile-smoke customization included in the Deluxe Edition cosmetic set. No Campaign use or standalone purchase has been announced.', status:'Online-only Deluxe cosmetic',
    facts:[{label:'Type',value:'Missile smoke color'},{label:'Color',value:'Scarlet'},{label:'Mode',value:'Online only'},{label:'Bundle',value:'Deluxe cosmetic set'}],
    sections:[{heading:'Cosmetic effect, not a weapon upgrade',paragraphs:['Scarlet Missile Smoke changes the visible smoke presentation in Online Mode. Nothing in the official listing indicates increased damage, tracking, speed, or another combat advantage.']},{heading:'Availability boundary',paragraphs:['It is bundled with Deluxe customization content and is not listed among the F-14A or Ace Combat Zero preorder bonuses. A standalone price and Campaign-equivalent setting have not been announced.']}],
    faqs:[{q:'Does Scarlet Missile Smoke improve missiles?',a:'No gameplay benefit is announced; it is described as cosmetic customization.'},{q:'Is it available offline?',a:'The official listing says Online Mode only.'}], sources:[{label:'Official editions and cosmetic FAQ',href:game}],
  },
  {
    slug:'premium-ace-pass-plus-voucher', title:'Premium Ace Pass Plus Voucher', searchTitle:'Premium Ace Pass Plus Voucher — Season Choice Explained',
    description:'How the Ace Combat 8 Premium Ace Pass Plus voucher works, including its one-season choice, 30-level skip and Deluxe Edition entitlement.',
    answer:'The Deluxe Edition voucher unlocks Premium Ace Pass Plus for one season chosen by the player. It includes the Premium reward track and an immediate 30-level skip, and it can be saved for a later season.', status:'One chosen season · Deluxe entitlement',
    facts:[{label:'Seasons covered',value:'One chosen season'},{label:'Level benefit',value:'Instant 30-level skip'},{label:'Can be saved',value:'Yes'},{label:'Included with',value:'Deluxe Edition'}],
    sections:[{heading:'The voucher is not locked to Season 1',paragraphs:['Bandai Namco states that the Deluxe voucher is not tied to a specific season. Owners can redeem it for Season 1 or hold it for a later season after more rewards are revealed. Premium and Premium Plus tiers can also be purchased separately.']},{heading:'If you use it for Season 1',paragraphs:['Season 1’s highlighted Premium aircraft is the ADFX-02 Morgan–PIXY. Redeeming the voucher for that season unlocks the aircraft immediately for Online Mode; Campaign use requires completing every mission.']}],
    faqs:[{q:'Must the voucher be used in Season 1?',a:'No. It can be saved and redeemed for a future season.'},{q:'What does Premium Plus add?',a:'It adds an immediate 30-level skip on top of Premium rewards.'}], sources:[{label:'Official Ace Pass FAQ',href:game}],
  },
  {
    slug:'aircraft-upgrade-items', title:'Aircraft Upgrade Items', searchTitle:'Aircraft Upgrade Items in the Free Ace Pass',
    description:'What is officially known about aircraft-upgrade items in Ace Combat 8, where they appear in the free Ace Pass and what stats remain unannounced.',
    answer:'Aircraft-upgrade items are confirmed seasonal rewards in the free Ace Pass. Their names, stat values, stacking rules and relationship to the freely combinable pre-sortie upgrade parts have not yet been published.', status:'Free Ace Pass rewards',
    facts:[{label:'Source',value:'Free Ace Pass'},{label:'Reward type',value:'Aircraft-upgrade items'},{label:'Seasonal',value:'Yes'},{label:'Exact stats',value:'Not published'}],
    sections:[{heading:'A free progression reward',paragraphs:['The official FAQ says the free Ace Pass contains cosmetics and aircraft-upgrade items along its seasonal track. Paid randomized loot boxes are not planned, and rewards are visible before purchase.']},{heading:'Do not confuse items with the parts menu',paragraphs:['The walkthrough separately confirms freely combinable upgrade parts in the sortie loadout. Bandai Namco has not yet explained whether Ace Pass upgrade items are those same parts, materials, or another item class, so this tracker keeps the systems distinct until the menu is shown.']}],
    faqs:[{q:'Are upgrade items only in the paid pass?',a:'No. Aircraft-upgrade items are explicitly listed in the free Ace Pass.'},{q:'Are their stats known?',a:'No complete item list or stat table has been published.'}], sources:[{label:'Official Ace Pass FAQ',href:game},{label:'Official gameplay walkthrough',href:walkthrough}],
  },
];

export const collectibleGuides: EntityGuide[] = [
  {
    slug:'aces-at-war-history-2029', title:'ACES at WAR: A HISTORY 2029', searchTitle:'ACES at WAR: A HISTORY 2029 Artbook',
    description:'What the ACES at WAR: A HISTORY 2029 book is, how many pages it contains and which physical Ace Combat 8 bundles include it.',
    answer:'ACES at WAR: A HISTORY 2029 is a physical 208-page art and lore book included with the Joker Flight Pack and the official Vinyl Collection. It is merchandise, not an in-game codex item.', status:'Physical collector item',
    facts:[{label:'Format',value:'Physical book'},{label:'Length',value:'208 pages'},{label:'Included in',value:'Joker Flight Pack · Vinyl Collection'},{label:'In-game item',value:'No'}],
    sections:[{heading:'What the book contains',paragraphs:['The official store presents ACES at WAR as a substantial companion book paired with the soundtrack collection. The main game page describes it as more than 200 pages, while the store specifies 208 pages.']},{heading:'Where it is sold',paragraphs:['It is included in the Joker Flight Pack and bundled with the Vinyl Collection. Regional availability, shipping and stock can change, so purchase decisions should use the live official store listing.']}],
    faqs:[{q:'Is ACES at WAR digital?',a:'The announced item is a physical 208-page book.'},{q:'Does it unlock game content?',a:'No in-game unlock is listed.'}], sources:[{label:'Official game edition page',href:game},{label:'Official merchandise store',href:officialStore}],
  },
  {
    slug:'the-vinyl-collection', title:'The Vinyl Collection', searchTitle:'Ace Combat 8 The Vinyl Collection — Contents',
    description:'Official contents of the Ace Combat 8 Vinyl Collection: 15 tracks, two white records, its companion artbook and limited production quantity.',
    answer:'The Vinyl Collection contains 15 soundtrack tracks on two white vinyl records plus the 208-page ACES at WAR book. The official store limits the collection to 2,999 units worldwide.', status:'Limited physical soundtrack',
    facts:[{label:'Tracks',value:'15'},{label:'Records',value:'Two white vinyl LPs'},{label:'Book',value:'208-page ACES at WAR'},{label:'Production',value:'2,999 worldwide'}],
    sections:[{heading:'Package contents',paragraphs:['The records ship with a slipcover and slipmat, and the set includes the same substantial ACES at WAR companion book associated with the Joker Flight Pack. This is a physical soundtrack product rather than downloadable game music.']},{heading:'Limited availability',paragraphs:['The official product page states a worldwide run of 2,999. Stock and eligible shipping regions can change; this guide records the announced edition facts rather than mirroring a potentially stale availability badge.']}],
    faqs:[{q:'How many tracks are included?',a:'The official collection lists 15 tracks.'},{q:'How many copies exist?',a:'The announced production is limited to 2,999 worldwide.'}], sources:[{label:'Official merchandise store',href:officialStore}],
  },
  {
    slug:'joker-flight-pack', title:'Joker Flight Pack', searchTitle:'Ace Combat 8 Joker Flight Pack Contents',
    description:'Everything officially included in the physical Ace Combat 8 Joker Flight Pack, including Deluxe content, artbook, vinyl soundtrack and preorder items.',
    answer:'The Joker Flight Pack is the physical collector bundle containing the Deluxe Edition, the 208-page ACES at WAR book, two soundtrack vinyl records with slipcover and slipmat, plus eligible preorder bonuses.', status:'Physical collector edition',
    facts:[{label:'Game edition',value:'Physical Deluxe'},{label:'Book',value:'ACES at WAR'},{label:'Music',value:'Two vinyl LPs'},{label:'Preorder content',value:'Where eligible'}],
    sections:[{heading:'Game and physical contents',paragraphs:['The bundle combines the full Deluxe game entitlement—including early access when eligible, Ace Pass Plus voucher and cosmetics—with physical collector pieces. The book and vinyl records do not themselves add game mechanics.']},{heading:'Check region and timing',paragraphs:['Physical stock, supported platform versions and preorder eligibility vary by storefront and time. The official game page is the stable source for the announced bundle structure; the store is the source for live inventory.']}],
    faqs:[{q:'Does the Joker Flight Pack include Deluxe?',a:'Yes. It contains a physical Deluxe Edition.'},{q:'Are the vinyl records sold as gameplay DLC?',a:'No. They are physical soundtrack merchandise.'}], sources:[{label:'Official editions page',href:game},{label:'Official merchandise store',href:officialStore}],
  },
  {
    slug:'endurance-xxl-mousepad', title:'Endurance XXL Mousepad', searchTitle:'Ace Combat 8 Endurance XXL Mousepad',
    description:'Official specifications for the Ace Combat 8 Endurance XXL Mousepad, including its blueprint art, dimensions and RGB lighting.',
    answer:'The Endurance XXL Mousepad is a 300 × 900 mm RGB desk mat featuring blueprint-style art of the carrier Endurance. It is official merchandise and provides no in-game unlock.', status:'Official physical merchandise',
    facts:[{label:'Dimensions',value:'300 × 900 mm'},{label:'Artwork',value:'Endurance blueprint'},{label:'Lighting',value:'RGB edge'},{label:'Game unlock',value:'None listed'}],
    sections:[{heading:'Design and size',paragraphs:['The wide desk-mat format uses technical blueprint imagery of the aircraft carrier that serves as the campaign’s operational base. The RGB edge is a physical lighting feature, not an Ace Combat 8 peripheral integration.']},{heading:'No digital entitlement',paragraphs:['The store listing does not include a DLC code, skin or other game reward. Availability and shipping should be checked on the official product page because merchandise inventory can change independently of game editions.']}],
    faqs:[{q:'Does the mousepad include DLC?',a:'No digital game entitlement is listed.'},{q:'What size is it?',a:'The official dimensions are 300 × 900 mm.'}], sources:[{label:'Official merchandise store',href:officialStore}],
  },
];

export const squadronGuides: EntityGuide[] = [
  {
    slug:'joker-flight', title:'Joker Flight', searchTitle:'Joker Flight Members and Role', description:'Joker Flight’s confirmed Ace Combat 8 members, carrier assignment and role under the inherited Wings of Theve identity.',
    answer:'Joker Flight is the four-aircraft FCU Navy flight led by the player after inheriting the Wings of Theve identity. Its confirmed pilots are the player, Ellington Baxter, Tasha Severskya and William Coster.', status:'FCU Navy · Endurance',
    facts:[{label:'Leader',value:'Player · Wings of Theve'},{label:'No. 2',value:'Ellington Baxter'},{label:'No. 3',value:'Tasha Severskya'},{label:'No. 4',value:'William Coster'}],
    sections:[{heading:'From propaganda project to combat unit',paragraphs:['Jan Cope originally carried the Wings of Theve title as the flight’s manufactured ace. After the opening disaster, the rescued player takes on that public identity and leads the remaining flight from Endurance.']},{heading:'A tactical squadron',paragraphs:['Players choose squadron aircraft composition and issue attack or cover commands during missions. Exact aircraft assignments and whether every member can fly every available role have not been published.']}],
    faqs:[{q:'How many pilots are in Joker Flight?',a:'It is presented as a four-aircraft flight: the player plus three named wingmen.'},{q:'Is Jan Cope the playable leader?',a:'He is the original Wings of Theve; the player later inherits the identity.'}], sources:[{label:'Official character roster',href:characters},{label:'Official campaign overview',href:psLaunch}],
  },
  {
    slug:'queen-flight', title:'Queen Flight', searchTitle:'Queen Flight and Kate Evans Explained', description:'What is officially known about Queen Flight, its leader Kate Evans and its relationship to Joker Flight aboard Endurance.',
    answer:'Queen Flight is Endurance’s other confirmed flight, led by Lieutenant Commander Kate “Little Bee” Evans. Kate is responsible for protecting pilots in both Queen and Joker Flights, but the remaining Queen roster is not yet public.', status:'FCU Navy · Endurance',
    facts:[{label:'Leader',value:'Kate Evans · Little Bee'},{label:'Base',value:'Carrier Endurance'},{label:'Other members',value:'Not announced'},{label:'Player commands',value:'Not confirmed'}],
    sections:[{heading:'The second Endurance flight',paragraphs:['Official character material distinguishes Queen Flight from Joker Flight and identifies Kate as its leader. It establishes a broader surviving carrier air wing without publishing names for every Queen pilot.']},{heading:'Relationship to Joker Flight',paragraphs:['Kate’s biography says she works to protect members of both flights. Official materials have not confirmed that Queen Flight joins the player’s selectable squadron composition or accepts direct commands.']}],
    faqs:[{q:'Who leads Queen Flight?',a:'Lieutenant Commander Kate “Little Bee” Evans.'},{q:'Are all Queen Flight members known?',a:'No. Only its leader has an official profile so far.'}], sources:[{label:'Official Kate Evans profile',href:characters}],
  },
];

export const worldGuides: EntityGuide[] = [
  {
    slug:'federation-of-central-usea', title:'Federation of Central Usea (FCU)', searchTitle:'Federation of Central Usea in Ace Combat 8', description:'The FCU’s role in Ace Combat 8’s 2029 war, its occupied capital Theve and the surviving Endurance-based counteroffensive.',
    answer:'The Federation of Central Usea is the player-aligned nation invaded by the Republic of Sotoa in July 2029. Its capital, Theve, falls during the rapid offensive, leaving scattered forces to regroup around Endurance.', status:'Player-aligned nation',
    facts:[{label:'Short name',value:'FCU'},{label:'Capital',value:'Theve'},{label:'Conflict begins',value:'July 2029'},{label:'Opponent',value:'Republic of Sotoa'}],
    sections:[{heading:'Collapse and occupation',paragraphs:['The Sotoan invasion quickly overwhelms the FCU, captures its capital and drives surviving forces west. That collapse creates the campaign’s opening situation rather than a balanced front line.']},{heading:'Why Wings of Theve matters',paragraphs:['The FCU turns an ace identity tied to the occupied capital into a morale symbol. The player inherits that manufactured legend while operating from Endurance.']}],
    faqs:[{q:'What does FCU stand for?',a:'Federation of Central Usea.'},{q:'What is the FCU capital?',a:'Theve, which is occupied during the invasion.'}], sources:[{label:'Official story page',href:game}],
  },
  {
    slug:'republic-of-sotoa', title:'Republic of Sotoa', searchTitle:'Republic of Sotoa — Ace Combat 8 Enemy Nation', description:'Confirmed facts about the Republic of Sotoa, the invading power in Ace Combat 8 and operator of the giant Land Battleship.',
    answer:'The Republic of Sotoa is the invading nation that attacks the FCU in July 2029. Its forces seize Theve and field advanced capabilities including the approximately 450-meter Land Battleship.', status:'Invading nation',
    facts:[{label:'Role',value:'Primary invading power'},{label:'Target',value:'Federation of Central Usea'},{label:'Known weapon',value:'Land Battleship'},{label:'Full order of battle',value:'Not published'}],
    sections:[{heading:'A rapid 2029 offensive',paragraphs:['Official story material frames Sotoa’s attack as a sudden invasion that pushes the FCU to the brink. The publisher has not yet released a complete political history, named leadership roster or full unit database.']},{heading:'Known military capability',paragraphs:['The walkthrough highlights Sotoa’s colossal Land Battleship, while chief mechanic David Jenkins is said to possess knowledge of Sotoan capabilities. Individual enemy aircraft assignments remain incomplete.']}],
    faqs:[{q:'Who invades the FCU?',a:'The Republic of Sotoa.'},{q:'Does Sotoa operate the Land Battleship?',a:'Yes. It is presented as a Sotoan colossal weapon.'}], sources:[{label:'Official story page',href:game},{label:'Official gameplay walkthrough',href:walkthrough}],
  },
  {
    slug:'theve', title:'Theve', searchTitle:'Theve — FCU Capital and Wings of Theve Meaning', description:'What Theve is in Ace Combat 8, why its occupation matters and how the capital gives the Wings of Theve identity its propaganda power.',
    answer:'Theve is the capital of the Federation of Central Usea. Sotoa occupies it early in the 2029 invasion, and the Wings of Theve ace identity is used as a symbol that the lost capital—and the FCU—can still be reclaimed.', status:'Occupied FCU capital',
    facts:[{label:'Nation',value:'Federation of Central Usea'},{label:'Type',value:'Capital city'},{label:'2029 status',value:'Occupied by Sotoa'},{label:'Namesake',value:'Wings of Theve'}],
    sections:[{heading:'Why the capital anchors the story',paragraphs:['The fall of Theve gives the campaign a clear strategic and emotional loss. The player is not merely assigned a callsign; they carry a public promise tied to the occupied national capital.']},{heading:'Known limits',paragraphs:['No official city map, explorable district list or dedicated mission sequence has been published. This entry records the confirmed narrative role without inventing geography.']}],
    faqs:[{q:'Is Theve a person?',a:'No. It is the FCU capital city.'},{q:'Why is the player called Wings of Theve?',a:'The identity is a morale symbol tied to the occupied capital.'}], sources:[{label:'Official story page',href:game}],
  },
  {
    slug:'endurance', title:'Aircraft Carrier Endurance', searchTitle:'Endurance Aircraft Carrier — Ace Combat 8 Base', description:'The aircraft carrier Endurance explained: its role as the player’s base, surviving crew, flights and place in the FCU counteroffensive.',
    answer:'Endurance is the aging FCU aircraft carrier that rescues the player at sea and becomes the operational base for Joker Flight, Queen Flight and a mixed crew of military survivors and civilians.', status:'FCU carrier · Player base',
    facts:[{label:'Type',value:'Aircraft carrier'},{label:'Flights',value:'Joker · Queen'},{label:'Executive officer',value:'Jessica Pike'},{label:'Chief mechanic',value:'David Jenkins'}],
    sections:[{heading:'A base assembled from survivors',paragraphs:['Endurance continues operating despite severe personnel shortages. Jessica Pike recruits available civilians, David Jenkins joins after rescue, and Adelina Santos provides medical care to the damaged crew.']},{heading:'Campaign function',paragraphs:['Joker Flight launches from the carrier, while first-person scenes between sorties deepen the crew story. The official material does not establish a freely explorable ship or management simulation.']}],
    faqs:[{q:'Is Endurance the player’s carrier?',a:'Yes. It becomes Joker Flight’s operational base after rescuing the player.'},{q:'Can you freely explore Endurance?',a:'First-person story scenes are confirmed, but free-roam exploration is not.'}], sources:[{label:'Official story and editions page',href:game},{label:'Official character roster',href:characters}],
  },
];
