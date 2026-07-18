export interface CharacterGuide {
  slug: string;
  name: string;
  callsign?: string;
  group: 'Joker Flight' | 'Queen Flight' | 'Endurance Crew';
  service: string;
  rank: string;
  role: string;
  description: string;
  answer: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faqs: { q: string; a: string }[];
}

export const characterGuides: CharacterGuide[] = [
  {
    slug: 'jan-cope', name: 'Jan Cope', callsign: 'Wings of Theve', group: 'Joker Flight',
    service: 'FCU Navy · CVW-6 · FAS-830', rank: 'Commander-rank officer', role: 'Original leader of Joker Flight',
    description: 'Jan Cope in Ace Combat 8 explained: the original Wings of Theve, Joker Flight leader, manufactured ace and charismatic gambler behind the FCU propaganda legend.',
    answer: 'Jan Cope is the original bearer of the Wings of Theve identity and leader of Joker Flight. The FCU selects him for a manufactured-ace propaganda project because of his evasive flying, then the player is later forced to carry the legend forward.',
    sections: [
      { heading: 'The original Wings of Theve', paragraphs: ['The official roster identifies Jan Cope as the commander-rank leader of Joker Flight and the man given the single sign Wings of Theve. The legend presents him as a heroic ace and symbol of hope tied to the occupied FCU capital, but the official biography states that the legend was not real.', 'Cope was selected because he could survive: his exceptional piloting and evasive maneuvers made him suitable for a public figure whose continued appearances could support morale.'] },
      { heading: 'Jan Cope, Rex and the player', paragraphs: ['Bandai Namco’s official character page uses the name Jan Cope. PlayStation’s hands-on report refers to the original figurehead as Rex and says the player begins as his navigator before taking on the Rex callsign after the first mission. These official accounts describe the same original Wings setup, although the final game will establish how the names are presented in every scene.', 'The player is therefore not Jan Cope. The player inherits the public identity and the burden of keeping the manufactured legend alive.'] },
      { heading: 'Personality outside the cockpit', paragraphs: ['Cope is described as sociable and charismatic, an inveterate gambler who sometimes fails to pay his debts but remains well liked. That contrast supports the central story idea: the person behind the national symbol is flawed and ordinary, while the propaganda image is deliberately larger than life.'] },
    ],
    faqs: [
      { q: 'Who is Jan Cope in Ace Combat 8?', a: 'He is the original Wings of Theve and the first leader of Joker Flight.' },
      { q: 'Is Jan Cope the player character?', a: 'No. The player later takes over the Wings of Theve identity.' },
      { q: 'Why was Jan Cope selected?', a: 'His exceptional evasive piloting made him suitable for the FCU’s manufactured-ace propaganda project.' },
    ],
  },
  {
    slug: 'ellington-baxter', name: 'Ellington Baxter', callsign: 'Professor', group: 'Joker Flight',
    service: 'FCU Navy · CVW-6 · FAS-830', rank: 'Lieutenant Commander', role: 'Joker Flight No. 2',
    description: 'Ellington “Professor” Baxter profile: Joker Flight No. 2, former university lecturer, stabilizing wingman and the thoughtful mentor Tasha calls Teach.',
    answer: 'Ellington “Professor” Baxter is Joker Flight’s No. 2 and the calm, knowledgeable officer who holds the squadron together. Before military service he was a university lecturer, though he does not reveal his academic field.',
    sections: [
      { heading: 'Role in Joker Flight', paragraphs: ['Baxter is a Lieutenant Commander and the second aircraft in Joker Flight. Official descriptions call him the calm hand that holds the rest of the squadron together, positioning him as the stabilizing presence beside a new leader carrying the Wings of Theve identity.', 'His role is not presented as passive support: Joker Flight aircraft composition and real-time wingman commands are confirmed campaign mechanics, making experienced wingmen part of the player’s tactical planning.'] },
      { heading: 'Why he is called Professor', paragraphs: ['Baxter previously worked as a university lecturer and is known for being highly knowledgeable and considerate. His callsign Professor reflects that background, but he has never told the squadron what subject he taught.', 'Tasha calls him Teach. The two are often found studying together in the mess, establishing a mentor-like relationship without reducing either character to a single cockpit role.'] },
      { heading: 'Relationship to the player', paragraphs: ['The player enters a damaged force and assumes a propaganda identity under severe pressure. Baxter’s seniority, composure and knowledge make him a likely source of operational continuity inside Joker Flight. Exact bond outcomes and dialogue branches have not been published, so this profile does not invent romance or loyalty mechanics.'] },
    ],
    faqs: [
      { q: 'Who is Professor in Ace Combat 8?', a: 'Professor is Ellington Baxter, Joker Flight No. 2.' },
      { q: 'What was Baxter’s job?', a: 'He was a university lecturer, but his field is not disclosed.' },
      { q: 'Why does Tasha call Baxter Teach?', a: 'It reflects his lecturer background and their habit of studying together.' },
    ],
  },
  {
    slug: 'tasha-severskya', name: 'Tasha Severskya', group: 'Joker Flight',
    service: 'FCU Navy · CVW-6 · FAS-830', rank: 'Ensign', role: 'Joker Flight No. 3',
    description: 'Tasha Severskya profile: Joker Flight No. 3, former Yuktobanian Zvezda aerobatic star, extreme-maneuver pilot and Deluxe cosmetic character.',
    answer: 'Tasha Severskya is Joker Flight’s No. 3 and a former star pilot with Yuktobania’s Zvezda aerobatic team. She was aboard Endurance to film publicity when the invasion began and remained with the carrier after war broke out.',
    sections: [
      { heading: 'From Zvezda to Joker Flight', paragraphs: ['Tasha begins from a very different background than the exhausted FCU personnel. She was a star in Yuktobania’s Zvezda acrobatic team and came aboard Endurance to shoot publicity footage, not to join a desperate retreat.', 'The sudden war leaves her on the carrier, where she becomes Joker Flight No. 3 with the rank of Ensign. Her aerobatic experience explains the extreme maneuvers highlighted in official character material.'] },
      { heading: 'Connections inside the squadron', paragraphs: ['Tasha calls Baxter Teach and studies with him in the mess, linking her high-skill flying to an explicitly curious, learning-oriented side. Coster is described as capable of keeping up with her maneuvers and providing cover, making their cockpit relationship another concrete part of Joker Flight’s chemistry.', 'These relationships support the campaign focus on squad bonds, but no exact affinity system or branch requirements have been confirmed.'] },
      { heading: 'Tasha cosmetics', paragraphs: ['The Deluxe customizable cosmetic set includes a Tasha Costume Set for Online Mode. It also includes an F/A-18C Team Zvezda skin, available in Online and Campaign after completing all missions. The shared Zvezda label ties the cosmetic directly to Tasha’s official background.'] },
    ],
    faqs: [
      { q: 'Who is Tasha in Ace Combat 8?', a: 'Tasha Severskya is Joker Flight No. 3 and a former Zvezda aerobatic pilot.' },
      { q: 'Why was Tasha on Endurance?', a: 'She was filming publicity footage when war broke out and then stayed aboard.' },
      { q: 'Is Tasha playable?', a: 'She is a wingman character; the official materials do not identify her as a separately playable campaign protagonist.' },
    ],
  },
  {
    slug: 'william-coster', name: 'William Coster', callsign: 'Noise', group: 'Joker Flight',
    service: 'FCU Navy · CVW-6 · FAS-830', rank: 'Lieutenant Junior Grade', role: 'Joker Flight No. 4',
    description: 'William “Noise” Coster profile: Joker Flight No. 4, rock-music fan and skilled covering wingman able to keep pace with Tasha’s extreme maneuvers.',
    answer: 'William “Noise” Coster is Joker Flight’s No. 4, a skilled wingman known for keeping up with Tasha’s extreme maneuvers and providing effective cover. He is also a committed rock fan who takes a compact music player into the cockpit.',
    sections: [
      { heading: 'The covering wingman', paragraphs: ['Coster holds the rank of Lieutenant Junior Grade and occupies the fourth position in Joker Flight. Official material defines his flying through two concrete strengths: he can keep pace with Tasha’s demanding maneuvers and provide effective cover.', 'That description fits the confirmed wingman-command system, which includes cover orders. It does not reveal his aircraft assignment, AI statistics or any unique combat perk.'] },
      { heading: 'Why his callsign is Noise', paragraphs: ['Coster is a diehard rock music fan and carries a compact player into the cockpit so he can listen during missions. His callsign Noise and music habit make him the most overtly audio-themed member of the team.', 'The official biography does not publish a soundtrack list, favorite band or music-triggered gameplay mechanic, so those details remain outside this profile.'] },
      { heading: 'Place in Joker Flight', paragraphs: ['Coster rounds out the four-aircraft team with the player, Baxter and Tasha. His ability to cover a more aggressive aerobatic pilot gives the squad a specific working relationship rather than four interchangeable wingmen. How the player’s commands modify that behavior will need retail testing.'] },
    ],
    faqs: [
      { q: 'Who is Noise in Ace Combat 8?', a: 'Noise is William Coster, Joker Flight No. 4.' },
      { q: 'What is Coster known for?', a: 'He provides effective cover and can keep up with Tasha’s extreme maneuvers.' },
      { q: 'Why is he called Noise?', a: 'The callsign matches his love of rock music and habit of listening in the cockpit.' },
    ],
  },
  {
    slug: 'kate-evans', name: 'Kate Evans', callsign: 'Little Bee', group: 'Queen Flight',
    service: 'FCU Navy · CVW-6 · FAS-830', rank: 'Lieutenant Commander', role: 'Leader of Queen Flight',
    description: 'Kate “Little Bee” Evans profile: Queen Flight leader, excellent pilot and protective Endurance officer who hides the strain of repeated battles.',
    answer: 'Kate “Little Bee” Evans is the Lieutenant Commander who leads Queen Flight, Endurance’s other flight. She is an excellent pilot focused on protecting the lives of both Queen and Joker Flight personnel.',
    sections: [
      { heading: 'Leader of the carrier’s other flight', paragraphs: ['Joker Flight is not the only operational flight aboard Endurance. Kate commands Queen Flight and therefore represents another line of aerial leadership within the same carrier air wing.', 'Official material describes her as cool and collected and says she does everything possible to protect pilots in both flights. That gives her responsibility beyond her own immediate team.'] },
      { heading: 'Battle strain and public composure', paragraphs: ['Kate constantly wears bandages that reflect the harsh battles she has fought. Even so, she hides her fears and presents a positive attitude to those under her command.', 'This mirrors the wider campaign theme of morale under collapse: the crew must continue projecting confidence while the FCU is occupied and its forces retreat. The biography confirms the emotional contrast but not a specific injury event.'] },
      { heading: 'Connection to Joker Flight', paragraphs: ['Kate’s priority includes Joker Flight’s survival, making her more than a background commander. The official material does not yet specify whether Queen Flight can receive player orders, appear as mission support, or become part of selectable squadron composition.'] },
    ],
    faqs: [
      { q: 'Who is Little Bee in Ace Combat 8?', a: 'Little Bee is Kate Evans, the leader of Queen Flight.' },
      { q: 'What is Queen Flight?', a: 'It is Endurance’s other flight, separate from Joker Flight.' },
      { q: 'Why does Kate wear bandages?', a: 'They reflect the harsh battles she has endured; no single injury scene has been officially identified.' },
    ],
  },
  {
    slug: 'jessica-pike', name: 'Jessica Pike', group: 'Endurance Crew',
    service: 'FCU Navy · Carrier Assault Unit', rank: 'Military Captain', role: 'Executive Officer of Endurance',
    description: 'Jessica Pike profile: pragmatic executive officer of the aircraft carrier Endurance who runs operations and recruits civilians during the FCU personnel crisis.',
    answer: 'Jessica Pike is the military captain and executive officer of Endurance. She oversees carrier operations in place of the easygoing Captain Gordon and recruits anyone available—including civilians—to keep the ship functioning.',
    sections: [
      { heading: 'Who runs Endurance operations', paragraphs: ['As executive officer, Pike oversees carrier operations in place of Captain Gordon. Her position makes her one of the central command figures aboard the aging ship that rescues the player and becomes the base of the counteroffensive.', 'The official biography frames Gordon as easygoing and Pike as pragmatic, establishing a leadership contrast even though Gordon does not yet have a full official character entry.'] },
      { heading: 'Operating through personnel collapse', paragraphs: ['The FCU invasion leaves the military scattered and Endurance short of trained people. Pike responds by recruiting anyone available, including civilians, to keep the carrier operational.', 'That decision shows the scale of the emergency and her willingness to prioritize survival over normal staffing boundaries. It does not establish a player-managed recruitment system.'] },
      { heading: 'Relationship to the player’s mission', paragraphs: ['Because Joker Flight sorties from Endurance, Pike’s operational decisions create the environment in which the new Wings of Theve identity can function. Exact briefing duties, command authority over Joker Flight and story-choice consequences remain to be shown in the campaign.'] },
    ],
    faqs: [
      { q: 'Who is Jessica Pike?', a: 'She is the executive officer who oversees operations aboard Endurance.' },
      { q: 'What is Jessica Pike’s rank?', a: 'The official roster describes her as a Military Captain.' },
      { q: 'Why does Pike recruit civilians?', a: 'Endurance faces desperate personnel shortages after the FCU collapse.' },
    ],
  },
  {
    slug: 'david-jenkins', name: 'David Jenkins', group: 'Endurance Crew',
    service: 'Carrier Endurance', rank: 'Major', role: 'Chief mechanic and maintenance officer',
    description: 'David Jenkins profile: Endurance chief mechanic, rescued former Air Force maintenance officer with frontline knowledge of Sotoan capabilities.',
    answer: 'David Jenkins is the Major serving as Endurance’s chief mechanic. He is a former Air Force maintenance officer rescued from a lifeboat after retreating west as the FCU front collapsed.',
    sections: [
      { heading: 'How Jenkins reaches Endurance', paragraphs: ['Jenkins begins the war at a base in eastern FCU. As the front collapses, he joins the retreat west and is eventually rescued from a lifeboat before taking a maintenance role aboard Endurance.', 'His route parallels the player’s rescue at sea and reinforces that the carrier is assembling a force from survivors rather than operating with a complete peacetime crew.'] },
      { heading: 'Chief mechanic and intelligence value', paragraphs: ['As chief mechanic, Jenkins is responsible for maintaining the aircraft on which Joker and Queen Flights depend. His previous Air Force position also gives him extensive knowledge of Sotoan capabilities from direct experience near the fighting.', 'The biography confirms his expertise but does not identify an aircraft-upgrade shop, named part tree or repair minigame tied specifically to him.'] },
      { heading: 'Potential campaign function', paragraphs: ['Aircraft selection and upgrades are confirmed pre-sortie systems, so a chief mechanic is a natural operational character. Until Bandai Namco shows the retail menus, this page does not claim that Jenkins personally sells parts, unlocks aircraft or assigns repairs.'] },
    ],
    faqs: [
      { q: 'Who is David Jenkins?', a: 'He is the Major and chief mechanic aboard Endurance.' },
      { q: 'Was Jenkins always in the Navy?', a: 'No. He is described as a former Air Force maintenance officer.' },
      { q: 'Does Jenkins run aircraft upgrades?', a: 'His maintenance role is confirmed, but a specific upgrade-menu function has not been announced.' },
    ],
  },
  {
    slug: 'adelina-santos', name: 'Adelina Santos', group: 'Endurance Crew',
    service: 'Carrier Endurance', rank: 'Highest-Ranking Senior Private', role: 'Medical Tech Officer and doctor',
    description: 'Adelina Santos profile: strong-willed Endurance doctor and Medical Tech Officer who advocates for wounded crew even when confronting senior command.',
    answer: 'Adelina Santos is Endurance’s strong-willed doctor and Medical Tech Officer. She is caring and popular with the crew, and she openly challenges senior officers when the treatment of wounded personnel is at stake.',
    sections: [
      { heading: 'Medical role aboard Endurance', paragraphs: ['Santos serves as the carrier’s doctor with the rank given in the official roster as Highest-Ranking Senior Private. On a retreating ship carrying military survivors and refugees, her work sits directly inside the human cost of the campaign.', 'The biography presents her as caring and supportive, with the crew liking her more than she seems to realize.'] },
      { heading: 'Willing to confront command', paragraphs: ['Her defining leadership trait is that she speaks plainly about caring for the wounded, even when the person she must challenge is the executive officer. This places her in potential tension with Jessica Pike’s pragmatic need to keep the carrier operational.', 'That contrast is confirmed at the character level, but no exact argument, medical-choice branch or casualty system has been published.'] },
      { heading: 'What her profile does not confirm', paragraphs: ['Ace Combat 8 includes first-person scenes between sorties and emphasizes squad bonds, so Santos may appear in the carrier’s narrative spaces. The official materials do not establish a healing mechanic, injury timer, romance path or player-controlled medical decision system.'] },
    ],
    faqs: [
      { q: 'Who is Adelina Santos?', a: 'She is the doctor and Medical Tech Officer aboard Endurance.' },
      { q: 'What is Santos known for?', a: 'She supports the crew and speaks up strongly for wounded personnel.' },
      { q: 'Is there a medical gameplay system?', a: 'No player-controlled medical system has been announced.' },
    ],
  },
];

export const characterSources = [
  { label: 'Official Bandai Namco character roster', href: 'https://www.bandainamcoent.com/games/ace-combat-8/characters' },
  { label: 'Official PlayStation campaign overview', href: 'https://blog.playstation.com/2026/06/02/ace-combat-8-wings-of-theve-launches-globally-october-2-on-ps5/' },
  { label: 'Official PlayStation hands-on', href: 'https://blog.playstation.com/2026/06/04/hands-on-report-ace-combat-8-wings-of-theve/' },
];
