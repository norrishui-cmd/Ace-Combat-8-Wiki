export interface GameplayGuide {
  slug: string;
  title: string;
  searchTitle: string;
  description: string;
  answer: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
  sources: { label: string; href: string }[];
}

const officialWalkthrough = 'https://www.bandainamcoent.com/games/ace-combat-8/walkthrough';
const officialSystems = 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-walkthrough-trailer-dives-into-aerial-combat-game-play-and-customization';
const playstationLaunch = 'https://blog.playstation.com/2026/06/02/ace-combat-8-wings-of-theve-launches-globally-october-2-on-ps5/';
const playstationHandsOn = 'https://blog.playstation.com/2026/06/04/hands-on-report-ace-combat-8-wings-of-theve/';

export const gameplayGuides: GameplayGuide[] = [
  {
    slug: 'aircraft-upgrades',
    title: 'Aircraft Upgrades & Parts',
    searchTitle: 'Aircraft Upgrades and Parts Explained',
    description: 'How Ace Combat 8 aircraft upgrades work: freely combine parts before missions, tailor jets to objectives, and separate confirmed systems from unknown slot limits.',
    answer: 'Ace Combat 8 lets you upgrade aircraft by freely combining parts before a sortie. Parts are used to tailor a jet to the mission and your preferred style; exact part names, slot limits, and stat values have not yet been published.',
    facts: [
      { label: 'System', value: 'Pre-sortie aircraft parts' },
      { label: 'Purpose', value: 'Tailor a jet to each mission' },
      { label: 'Exact parts', value: 'Not yet listed' },
      { label: 'Paid consumables', value: 'No planned consumables' },
    ],
    sections: [
      {
        heading: 'How the upgrade loop works',
        paragraphs: ['The official walkthrough places aircraft upgrades in the preparation flow: read the mission objective, choose a suitable aircraft and special weapon, then combine upgrade parts. This makes the system a loadout decision rather than a permanent promise that one jet is always best.', 'Bandai Namco has not shown the complete part screen or confirmed whether every aircraft uses the same number of slots. Any current “best build” list would therefore be speculative.'],
      },
      {
        heading: 'Upgrade items and the Ace Pass',
        paragraphs: ['The official Ace Pass FAQ says rewards can include items used to upgrade aircraft. It also says there are no current plans for consumables, whether purchased or included as pass rewards. That distinction matters: upgrade items are part of progression, but the publisher is not describing one-use paid boosts.'],
      },
      {
        heading: 'What to decide before equipping parts',
        paragraphs: ['Use the briefing to identify the main target mix and expected threats. A mission dominated by aircraft, ground targets, ships, or a superweapon can justify different aircraft, weapons, and parts. Wait for the retail stat screen before assigning exact percentages or declaring a universal meta.'],
      },
    ],
    faqs: [
      { q: 'Can you upgrade aircraft in Ace Combat 8?', a: 'Yes. Bandai Namco confirms that players freely combine parts to tailor aircraft before missions.' },
      { q: 'Are upgrade parts consumable?', a: 'Bandai Namco says there are currently no plans for consumables in purchases or Ace Pass rewards.' },
      { q: 'What are the best upgrade parts?', a: 'A complete part list and final stat values are not available yet, so a reliable best-parts ranking is not possible.' },
    ],
    sources: [{ label: 'Official gameplay walkthrough', href: officialWalkthrough }, { label: 'Official Ace Combat 8 FAQ', href: 'https://www.bandainamcoent.com/games/ace-combat-8' }],
  },
  {
    slug: 'special-weapons',
    title: 'Special Weapons',
    searchTitle: 'Special Weapons and Loadouts Explained',
    description: 'Ace Combat 8 special weapons explained: choose mission-specific weapons during sortie preparation, understand confirmed loadout logic, and avoid unverified weapon lists.',
    answer: 'Special weapons return in Ace Combat 8 and are selected as part of mission preparation. The right choice depends on the objective and target mix, but Bandai Namco has not yet published the full weapon roster or final aircraft compatibility table.',
    facts: [
      { label: 'Confirmed', value: 'Multiple special weapons' },
      { label: 'Selection', value: 'Before the mission' },
      { label: 'Best choice', value: 'Depends on objective' },
      { label: 'Full roster', value: 'Not yet published' },
    ],
    sections: [
      {
        heading: 'Where special weapons fit in a sortie',
        paragraphs: ['The official walkthrough shows a preparation sequence built around three connected choices: aircraft, special weapon, and upgrade parts. Mission briefings provide the context for those choices, so weapon selection should answer a specific problem rather than follow one generic tier list.', 'A weapon that helps against clustered ground units may be a poor answer to a mission centered on agile enemy aircraft. Anti-ship and superweapon encounters create different priorities again.'],
      },
      {
        heading: 'What is confirmed and what is not',
        paragraphs: ['Bandai Namco confirms a variety of special weapons and says players should adjust strategy to the objective. It has not released a complete abbreviation list, ammunition counts, range values, lock-on rules, damage numbers, or every aircraft-to-weapon pairing.', 'Pages that currently claim a complete retail weapon list are mixing series history or trailer interpretation with confirmed Ace Combat 8 data. This guide will add individual weapon entries only when a primary source or retail build supplies concrete values.'],
      },
      {
        heading: 'A safe loadout decision rule',
        paragraphs: ['First identify whether the mission emphasizes air, ground, naval, or giant targets. Then choose an aircraft role and special weapon that cover the dominant threat while leaving the standard missile and gun available for secondary targets. Recheck the briefing whenever a failed attempt reveals a different bottleneck.'],
      },
    ],
    faqs: [
      { q: 'Does Ace Combat 8 have special weapons?', a: 'Yes. The official walkthrough confirms a variety of selectable special weapons.' },
      { q: 'Can every aircraft use every special weapon?', a: 'Bandai Namco has not published the final compatibility table.' },
      { q: 'What is the best special weapon?', a: 'There is no confirmed universal best choice; the official preparation flow emphasizes matching the weapon to the mission objective.' },
    ],
    sources: [{ label: 'Official gameplay walkthrough', href: officialWalkthrough }, { label: 'Official systems overview', href: officialSystems }],
  },
  {
    slug: 'wingman-commands',
    title: 'Wingman Commands',
    searchTitle: 'Wingman Commands and Squadron Control',
    description: 'How Ace Combat 8 wingman commands work: set squadron aircraft, issue attack and cover orders in real time, and understand what remains unconfirmed before launch.',
    answer: 'As Joker Flight leader, you choose the squadron’s aircraft composition and issue real-time wingman orders. Attack and cover commands are officially confirmed; the complete command list and control mapping are not yet published.',
    facts: [
      { label: 'Role', value: 'Joker Flight commander' },
      { label: 'Confirmed orders', value: 'Attack and cover' },
      { label: 'Timing', value: 'During combat' },
      { label: 'Squad setup', value: 'Aircraft composition selectable' },
    ],
    sections: [
      {
        heading: 'What the squad leader controls',
        paragraphs: ['Ace Combat 8 makes squad leadership part of both preparation and combat. Before a mission, the player determines the composition of the squadron’s fighter jets. In the air, tactical orders direct wingmen to attack or provide cover.', 'This is more specific than ambient radio support: official materials describe player-issued commands as a route to leading the team to victory.'],
      },
      {
        heading: 'Attack versus cover',
        paragraphs: ['An attack order is the aggressive option when you want wingmen engaging threats instead of staying close. Cover is the defensive counterpart, useful when the player needs protection while approaching an objective or escaping pressure. The publisher has not yet given cooldowns, target-selection rules, or AI priority logic, so those details should not be inferred from earlier games.'],
      },
      {
        heading: 'Squad bonds and campaign context',
        paragraphs: ['Joker Flight consists of the player and three allied pilots. Official story coverage also emphasizes deepening bonds between missions. The exact relationship between bond state and combat performance has not been explained, so this guide keeps narrative bonding separate from confirmed command mechanics.'],
      },
    ],
    faqs: [
      { q: 'Can you command wingmen in Ace Combat 8?', a: 'Yes. Real-time attack and cover orders are officially confirmed.' },
      { q: 'Can you choose your squadron aircraft?', a: 'Yes. PlayStation’s official overview says players determine the squadron’s fighter-jet composition during missions.' },
      { q: 'How many pilots are in Joker Flight?', a: 'The player leads three allied pilots, forming a four-aircraft flight.' },
    ],
    sources: [{ label: 'Official PlayStation launch overview', href: playstationLaunch }, { label: 'Official systems overview', href: officialSystems }],
  },
  {
    slug: 'mrp',
    title: 'MRP & Aircraft Unlocks',
    searchTitle: 'MRP Currency and Aircraft Unlocks',
    description: 'Ace Combat 8 MRP explained: earn the in-game currency from missions and use it to unlock additional fighter jets, with no invented farming rates or unlock prices.',
    answer: 'MRP is an in-game currency earned in missions and used to unlock additional fighter jets. Exact mission payouts, aircraft prices, farming routes, and whether online modes award the same rates have not yet been published.',
    facts: [
      { label: 'Earned from', value: 'Missions' },
      { label: 'Used for', value: 'Additional fighter jets' },
      { label: 'Real-money status', value: 'Not described as paid currency' },
      { label: 'Exact prices', value: 'Not yet published' },
    ],
    sections: [
      {
        heading: 'Confirmed MRP progression loop',
        paragraphs: ['Bandai Namco’s official walkthrough states that players earn MRP in missions and spend it to unlock additional fighter jets. This connects completing sorties directly to expanding the aircraft roster.', 'The wording does not establish specific payout amounts, difficulty bonuses, replay bonuses, or a separate multiplayer economy. Those questions require the retail progression screen.'],
      },
      {
        heading: 'MRP versus the Ace Pass',
        paragraphs: ['MRP aircraft unlocks and Ace Pass rewards are separate confirmed systems. The pass can contain playable aircraft, cosmetics, and aircraft-upgrade items, while MRP is explicitly earned in missions to unlock additional jets. Do not assume every aircraft is available through both routes.'],
      },
      {
        heading: 'How to plan purchases before exact prices are known',
        paragraphs: ['Unlock aircraft that answer an immediate mission need rather than spending from an unverified tier list. Aircraft roles include fighters, attack aircraft, multirole aircraft, and electronic warfare aircraft. Save enough flexibility to cover different objective types until the full tree and prices are visible.'],
      },
    ],
    faqs: [
      { q: 'What is MRP in Ace Combat 8?', a: 'MRP is mission-earned in-game currency used to unlock additional fighter jets.' },
      { q: 'Can you buy MRP with real money?', a: 'Official materials do not describe MRP as a purchasable currency.' },
      { q: 'What is the fastest MRP farm?', a: 'Reliable farming rates cannot be calculated until mission payouts and replay rules are available.' },
    ],
    sources: [{ label: 'Official gameplay walkthrough', href: officialWalkthrough }, { label: 'Official game and Ace Pass FAQ', href: 'https://www.bandainamcoent.com/games/ace-combat-8' }],
  },
  {
    slug: 'mission-briefings',
    title: 'Mission Briefings',
    searchTitle: 'Mission Briefings and Loadout Planning',
    description: 'Use Ace Combat 8 mission briefings to identify objectives, choose aircraft and special weapons, and build a loadout without relying on unconfirmed mission lists.',
    answer: 'Mission briefings provide strategic information before each sortie and are the starting point for choosing an aircraft, special weapon, and upgrade parts. They are confirmed gameplay tools, not just story presentation.',
    facts: [
      { label: 'When', value: 'Before each sortie' },
      { label: 'Purpose', value: 'Strategic mission insight' },
      { label: 'Drives', value: 'Aircraft, weapon and parts choice' },
      { label: 'Full mission list', value: 'Not yet published' },
    ],
    sections: [
      {
        heading: 'Read the objective before choosing a jet',
        paragraphs: ['The official systems overview says mission briefings encourage players to adapt aircraft and tactics to each combat scenario. That means the briefing should be read as a loadout input: identify the primary target class, threats, terrain, and any special victory condition before selecting equipment.', 'Choosing solely by favorite aircraft can leave a loadout poorly matched to ground, naval, or giant targets.'],
      },
      {
        heading: 'Turn briefing information into a loadout',
        paragraphs: ['Start with the aircraft role that covers the dominant objective. Choose a special weapon that improves efficiency against the likely target mix, then use upgrade parts to reinforce the plan or cover a weakness. Wingman aircraft composition adds another layer when the player’s own jet cannot cover everything.'],
      },
      {
        heading: 'What this page does not claim',
        paragraphs: ['Bandai Namco has not published the full campaign mission list, rank thresholds, named ace spawn conditions, or S-rank requirements. This pre-release page explains the confirmed planning system; mission-by-mission walkthroughs will only be indexed when retail evidence supports exact steps.'],
      },
    ],
    faqs: [
      { q: 'Does Ace Combat 8 have mission briefings?', a: 'Yes. Official materials confirm strategic briefings before sorties.' },
      { q: 'What should I choose after the briefing?', a: 'Match the aircraft, special weapon, parts, and squadron composition to the objective and threats.' },
      { q: 'Is the complete mission list available?', a: 'No complete official campaign mission list has been published yet.' },
    ],
    sources: [{ label: 'Official systems overview', href: officialSystems }, { label: 'Official gameplay walkthrough', href: officialWalkthrough }],
  },
  {
    slug: 'high-g-turns',
    title: 'High-G Turns',
    searchTitle: 'High-G Turns and Defensive Maneuvers',
    description: 'Ace Combat 8 high-G turns explained from confirmed controls: use the maneuver to evade missiles and stay on target, with PS5 DualSense trigger behavior noted.',
    answer: 'High-G turns are a confirmed defensive maneuver used while evading missiles and repositioning in dogfights. On PS5, official hands-on coverage says holding R2 and L2 performs the turn with DualSense trigger resistance.',
    facts: [
      { label: 'Purpose', value: 'Rapid defensive turning' },
      { label: 'PS5 input shown', value: 'Hold R2 + L2' },
      { label: 'Feedback', value: 'DualSense trigger resistance' },
      { label: 'Other platforms', value: 'Final mapping not published' },
    ],
    sections: [
      {
        heading: 'When to use a high-G turn',
        paragraphs: ['Bandai Namco identifies high-G turns as part of surviving missile pressure while staying focused on mission objectives. The maneuver trades forward momentum for a tighter change of direction, making timing important: turning too early can waste the angle, while turning without an exit plan can leave the aircraft slow.', 'Exact speed loss and stall behavior should be measured in the retail build rather than copied from Ace Combat 7.'],
      },
      {
        heading: 'PS5 controls and feedback',
        paragraphs: ['PlayStation’s hands-on report says acceleration uses R2, deceleration uses L2, and holding both executes a high-G turn. Adaptive trigger resistance communicates the aircraft’s power through the controller. Control presets and remapping options have not been fully documented.'],
      },
      {
        heading: 'High-G turns are one tool, not every dodge',
        paragraphs: ['Missile evasion also depends on awareness, timing, geometry, speed, and terrain. Use the warning and target information to decide whether a tight break, sustained turn, terrain use, or a change in engagement is safer. Final advanced advice will need tested missile behavior.'],
      },
    ],
    faqs: [
      { q: 'Are high-G turns in Ace Combat 8?', a: 'Yes. They are explicitly included in official combat descriptions.' },
      { q: 'How do you high-G turn on PS5?', a: 'The official hands-on description says to hold R2 and L2 together.' },
      { q: 'Are the Xbox and PC controls confirmed?', a: 'The final default mappings and remapping options have not been fully published.' },
    ],
    sources: [{ label: 'Official PlayStation hands-on', href: playstationHandsOn }, { label: 'Official systems overview', href: officialSystems }],
  },
  {
    slug: 'clouds-weather',
    title: 'Clouds & Weather',
    searchTitle: 'Clouds, Weather and Living Skies',
    description: 'Ace Combat 8 Living Skies explained: dynamic multi-layered clouds, inclement weather and terrain affect situational planning, with unsupported gameplay claims excluded.',
    answer: 'Ace Combat 8 uses dynamic multi-layered cloudscapes and inclement weather as part of its Living Skies presentation and challenge. Official materials confirm weather navigation, but not every visibility, sensor, icing, or lightning effect.',
    facts: [
      { label: 'System', value: 'Dynamic multi-layered clouds' },
      { label: 'Challenge', value: 'Inclement-weather navigation' },
      { label: 'Engine', value: 'Unreal Engine 5' },
      { label: 'Exact penalties', value: 'Not fully published' },
    ],
    sections: [
      {
        heading: 'What Living Skies means',
        paragraphs: ['Bandai Namco describes the campaign’s skies as dynamic, multi-layered cloudscapes rather than a flat background. The announcement also calls out the challenge of navigating inclement weather across realistic cloud expanses and detailed terrain.', 'This supports weather-aware route planning, but it does not yet establish every mechanical penalty players may remember from Ace Combat 7.'],
      },
      {
        heading: 'How weather changes battlefield reading',
        paragraphs: ['Dense cloud layers and poor conditions can reduce visual certainty and make terrain or target approach more important. Large-scale anti-ground, anti-ship, and superweapon encounters may require balancing cover, visibility, altitude, and the objective. Exact sensor or missile effects need retail testing.'],
      },
      {
        heading: 'Performance considerations',
        paragraphs: ['The PC minimum target is 1080p upscaled at roughly 30 fps on Low, with drops possible in graphics-intensive scenes. Because the official PC requirements also mandate a ray-tracing-capable GPU and SSD, players should compare final performance tests rather than assume cloud settings are inexpensive.'],
      },
    ],
    faqs: [
      { q: 'Does weather affect Ace Combat 8 gameplay?', a: 'Bandai Namco describes inclement weather as a navigation challenge, but has not listed every mechanical effect.' },
      { q: 'What are Living Skies?', a: 'The term refers to the game’s dynamic multi-layered cloudscapes and detailed aerial environments.' },
      { q: 'Can clouds be turned off?', a: 'No complete graphics-options menu has been published.' },
    ],
    sources: [{ label: 'Official game page', href: 'https://www.bandainamcoent.com/games/ace-combat-8' }, { label: 'Official announcement', href: 'https://www.bandainamcoent.com/news/ace-combat-8-wings-of-theve-coming-in-2026' }],
  },
  {
    slug:'squadron-composition', title:'Squadron Composition', searchTitle:'Squadron Aircraft Composition Explained',
    description:'How Ace Combat 8 squadron composition works during missions, what choices are confirmed and which pilot or aircraft restrictions remain undisclosed.',
    answer:'Ace Combat 8 lets the player determine the squadron’s fighter-jet composition during missions. This is separate from real-time attack and cover orders; exact reassignment timing and aircraft restrictions are not yet public.',
    facts:[{label:'Unit',value:'Joker Flight'},{label:'Player choice',value:'Squadron aircraft composition'},{label:'Commands',value:'Attack · Cover'},{label:'Restrictions',value:'Not yet published'}],
    sections:[{heading:'Composition is a mission-planning layer',paragraphs:['Official PlayStation coverage says players determine the squadron’s fighter-jet composition during missions. Together with mission briefings, special weapons and upgrade parts, this makes allied aircraft part of the sortie plan rather than fixed scenery.']},{heading:'What the reveal does not settle',paragraphs:['The publisher has not shown whether every named pilot can use every aircraft, whether composition can change after launch, or which menu controls the choice. Those limits require final-game evidence.']}],
    faqs:[{q:'Can you choose wingman aircraft?',a:'Squadron fighter-jet composition is confirmed, but the full assignment rules are not published.'},{q:'Is composition the same as wingman commands?',a:'No. Composition selects the squadron setup; attack and cover are real-time orders.'}],
    sources:[{label:'Official PlayStation campaign overview',href:playstationLaunch},{label:'Official gameplay walkthrough',href:officialWalkthrough}],
  },
  {
    slug:'wreckage-chain-reactions', title:'Wreckage Chain Reactions', searchTitle:'Wreckage Chain Reactions and Debris Damage',
    description:'How destroyed giant targets can create damaging wreckage chain reactions in Ace Combat 8 and what remains unknown about debris damage.',
    answer:'Destroying sections of colossal targets can create wreckage chain reactions that damage nearby targets. The mechanic rewards target order and positioning, but exact blast radius, damage and friendly-fire rules are not published.',
    facts:[{label:'Trigger',value:'Destroyed colossal target sections'},{label:'Effect',value:'Nearby target damage'},{label:'Use',value:'Target-order planning'},{label:'Exact values',value:'Not published'}],
    sections:[{heading:'Destruction becomes an offensive tool',paragraphs:['The official walkthrough shows that wreckage from giant targets can strike surrounding enemies. Instead of treating every marked target as isolated, players can look for clustered structures and choose a destruction order that produces secondary damage.']},{heading:'Evidence boundary',paragraphs:['A trailer demonstration confirms the interaction, not a universal rule for every building or aircraft. Blast radius, scoring credit, self-damage and difficulty scaling need retail testing before a numerical guide is reliable.']}],
    faqs:[{q:'Can debris damage other targets?',a:'Yes. Official footage and text confirm wreckage chain reactions around colossal targets.'},{q:'Is the damage value known?',a:'No official numerical value has been published.'}],
    sources:[{label:'Official systems overview',href:officialSystems},{label:'Official gameplay walkthrough',href:officialWalkthrough}],
  },
  {
    slug:'superweapon-damage-zones', title:'Superweapon Damage Zones', searchTitle:'Superweapon Damage Zones and Target Containers',
    description:'How Ace Combat 8 changes giant-target combat by allowing damage outside designated target containers, with confirmed Land Battleship context.',
    answer:'Ace Combat 8 allows colossal weapons to take damage outside the designated target containers shown on the HUD. Giant targets can also attack beyond those containers, making the whole structure tactically relevant.',
    facts:[{label:'Target type',value:'Colossal weapons'},{label:'Damage',value:'Outside HUD target containers'},{label:'Enemy attacks',value:'Also beyond containers'},{label:'Known example',value:'~450 m Land Battleship'}],
    sections:[{heading:'Not limited to highlighted weak points',paragraphs:['The walkthrough explicitly says players can damage colossal targets outside designated zones. HUD containers remain useful target information, but they are not the only physically meaningful part of the encounter.']},{heading:'The Land Battleship example',paragraphs:['The approximately 450-meter Land Battleship demonstrates the scale of these encounters. Players must read weapons, structure and surrounding targets rather than chase only one highlighted box. Exact component health remains unpublished.']}],
    faqs:[{q:'Can you damage a superweapon outside target boxes?',a:'Yes. That capability is explicitly confirmed for colossal targets.'},{q:'How long is the Land Battleship?',a:'Official coverage describes it as approximately 450 meters long.'}],
    sources:[{label:'Official gameplay walkthrough',href:officialWalkthrough},{label:'Official PlayStation hands-on',href:playstationHandsOn}],
  },
  {
    slug:'first-person-scenes', title:'First-Person Story Scenes', searchTitle:'First-Person Story Scenes and Campaign Choices',
    description:'What Ace Combat 8 first-person ground and cockpit scenes add between sorties, including confirmed choices and the limits of current branch information.',
    answer:'Ace Combat 8 uses first-person ground and cockpit scenes to place the player inside Endurance’s story between sorties. Player choices are confirmed, but a free-roam carrier, dialogue tree or complete ending structure is not.',
    facts:[{label:'Perspective',value:'First person'},{label:'Locations shown',value:'Ground · Cockpit · Endurance context'},{label:'Choices',value:'Confirmed'},{label:'Free roam',value:'Not confirmed'}],
    sections:[{heading:'Story from the pilot’s viewpoint',paragraphs:['Bandai Namco describes seamless first-person scenes on the ground and in the cockpit. The perspective connects mission action to the people aboard Endurance and the burden of maintaining the Wings of Theve identity.']},{heading:'Choices without invented branches',paragraphs:['Official hands-on coverage says choices and survival affect the unfolding story, but no complete branch map, affinity score or ending count has been released. This page tracks the system without labeling unshown options as routes.']}],
    faqs:[{q:'Are there first-person scenes?',a:'Yes. Ground and cockpit story scenes are officially confirmed.'},{q:'Can you freely explore Endurance?',a:'Free-roam exploration has not been announced.'}],
    sources:[{label:'Official game page',href:'https://www.bandainamcoent.com/games/ace-combat-8'},{label:'Official PlayStation hands-on',href:playstationHandsOn}],
  },
];
