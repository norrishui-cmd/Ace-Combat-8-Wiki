export interface LanguageGuide {
  slug: string;
  title: string;
  description: string;
  answer: string;
  support: { interface: string; audio: string; subtitles: string };
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
}

export const languageGuides: LanguageGuide[] = [
  {
    slug: 'english-dub', title: 'English Dub & Subtitles',
    description: 'Ace Combat 8 English language support confirmed: English interface, full voice audio and subtitles, plus the language difference for the Ace Combat Zero preorder port.',
    answer: 'Ace Combat 8 supports English interface text, full English voice audio and English subtitles on Steam. English is one of only two listed full-audio languages, alongside Japanese.',
    support: { interface: 'Yes', audio: 'Full English audio', subtitles: 'Yes' },
    sections: [
      { heading: 'What full English support includes', paragraphs: ['Steam marks all three English columns: interface, full audio and subtitles. That means menus and on-screen text are localized, spoken dialogue has an English track, and English subtitle text is available.', 'The listing confirms availability, but not individual voice actors, subtitle customization, caption speaker labels or whether every incidental radio line is transcribed.'] },
      { heading: 'Can you switch to Japanese audio?', paragraphs: ['Japanese is also marked for full audio. The store table does not document the in-game switching workflow or whether the choice can be changed per save, so exact menu instructions should wait for the retail options screen.'] },
      { heading: 'English in the Ace Combat Zero bonus', paragraphs: ['The Steam version of Ace Combat Zero included with eligible preorders also supports English, but its language set is smaller than Ace Combat 8. The bonus lists Japanese, English, French, Italian, German and Spanish, so do not assume every AC8 subtitle language carries over to the port.'] },
    ],
    faqs: [{ q: 'Does Ace Combat 8 have an English dub?', a: 'Yes. Steam lists full English audio.' }, { q: 'Does it have English subtitles?', a: 'Yes. English interface and subtitles are both confirmed.' }, { q: 'Can I use Japanese voices with English text?', a: 'Both tracks and English text are available, but the final audio/text combination menu has not been shown.' }],
  },
  {
    slug: 'japanese-audio', title: 'Japanese Audio & Subtitles',
    description: 'Ace Combat 8 Japanese support confirmed: Japanese interface, full voice audio and subtitles, with English also available as the other full-audio option.',
    answer: 'Ace Combat 8 supports Japanese interface text, full Japanese voice audio and Japanese subtitles. Japanese and English are the two full-audio languages listed on Steam.',
    support: { interface: 'Yes', audio: 'Full Japanese audio', subtitles: 'Yes' },
    sections: [
      { heading: 'Complete Japanese localization', paragraphs: ['All three Japanese support columns are checked on Steam, covering interface, full audio and subtitles. Players do not need to rely on English menus to use the Japanese voice track.', 'The listing does not yet name the voice cast or specify regional differences in recorded dialogue. Cast announcements should be added only from publisher or actor sources.'] },
      { heading: 'Japanese audio with other subtitles', paragraphs: ['Steam confirms the Japanese track and multiple subtitle languages, but it does not show which audio and text combinations the game menu permits. Modern PC releases often allow independent selection, yet this guide will not state that as a guaranteed setting until the retail menu is visible.'] },
      { heading: 'Japanese support in Ace Combat Zero', paragraphs: ['Japanese is also supported by the Steam preorder version of Ace Combat Zero. That port offers six languages rather than the 13 listed for Ace Combat 8, so players should compare the two language tables separately.'] },
    ],
    faqs: [{ q: 'Does Ace Combat 8 have Japanese voices?', a: 'Yes. Steam lists full Japanese audio.' }, { q: 'Are the menus available in Japanese?', a: 'Yes. Japanese interface and subtitles are confirmed.' }, { q: 'Is Japanese in the Ace Combat Zero bonus?', a: 'Yes. Japanese is one of the six listed languages for the Steam bonus port.' }],
  },
  {
    slug: 'chinese', title: 'Chinese Language Support',
    description: 'Ace Combat 8 Chinese support explained: Simplified and Traditional Chinese interface and subtitles are confirmed, but no Chinese full voice audio is listed.',
    answer: 'Ace Combat 8 supports both Simplified Chinese and Traditional Chinese for interface text and subtitles. Steam does not list Chinese full voice audio; the confirmed spoken tracks are English and Japanese.',
    support: { interface: 'Simplified + Traditional', audio: 'No Chinese audio listed', subtitles: 'Simplified + Traditional' },
    sections: [
      { heading: 'Simplified Chinese support', paragraphs: ['Steam checks the interface and subtitle columns for Simplified Chinese. Players can therefore use localized menus and read subtitle text, while spoken dialogue uses one of the available audio tracks.', 'The listing does not distinguish regional terminology, font options or subtitle size settings.'] },
      { heading: 'Traditional Chinese support', paragraphs: ['Traditional Chinese receives the same listed support: interface and subtitles, without a full Chinese audio check. It is a separate Steam language entry rather than an assumption derived from Simplified Chinese availability.'] },
      { heading: 'The preorder bonus has a smaller language set', paragraphs: ['The Steam version of Ace Combat Zero lists only Japanese, English, French, Italian, German and Spanish. Chinese is not in that published bonus-language list, even though Ace Combat 8 itself supports both Chinese text variants.'] },
    ],
    faqs: [{ q: 'Does Ace Combat 8 support Simplified Chinese?', a: 'Yes. Simplified Chinese interface and subtitles are confirmed.' }, { q: 'Does it support Traditional Chinese?', a: 'Yes. Traditional Chinese interface and subtitles are confirmed.' }, { q: 'Is there Chinese voice acting?', a: 'Steam does not list a Chinese full-audio track.' }],
  },
  {
    slug: 'ace-combat-zero', title: 'Ace Combat Zero Bonus Languages',
    description: 'Ace Combat Zero preorder bonus language list: Japanese, English, French, Italian, German and Spanish on Steam, fewer than Ace Combat 8 supports.',
    answer: 'The Steam preorder version of Ace Combat Zero: The Belkan War supports Japanese, English, French, Italian, German and Spanish. It does not inherit Ace Combat 8’s complete 13-language list.',
    support: { interface: 'Six listed languages', audio: 'Not separated in the bonus note', subtitles: 'Not separated in the bonus note' },
    sections: [
      { heading: 'The six listed languages', paragraphs: ['Steam explicitly lists Japanese, English, French, Italian, German and Spanish for the Ace Combat Zero bonus. The note presents one supported-language list rather than separate interface, audio and subtitle columns.', 'Because the format differs from the main game’s table, this page does not claim that all six include full voice audio.'] },
      { heading: 'Why the bonus differs from Ace Combat 8', paragraphs: ['Ace Combat 8 lists 13 interface/subtitle languages and two full-audio tracks. The port is based on a 2006 title and has a smaller published localization set, so players should verify the bonus language they need before choosing a platform.'] },
      { heading: 'Platform versions', paragraphs: ['The preorder bonus is tied to the purchased platform: PlayStation identifies a PS5-ported version and Steam identifies a Steam version. Platform-holder listings should be treated as the final source for regional availability and presentation.'] },
    ],
    faqs: [{ q: 'Which languages are in the Steam Ace Combat Zero bonus?', a: 'Japanese, English, French, Italian, German and Spanish.' }, { q: 'Does the bonus support Chinese?', a: 'Chinese is not in Steam’s published six-language bonus list.' }, { q: 'Does it support every Ace Combat 8 language?', a: 'No. The main game has a broader 13-language list.' }],
  },
];

export const languageSources = [
  { label: 'Official Steam language table', href: 'https://store.steampowered.com/app/2288340/ACE_COMBAT_8_WINGS_OF_THEVE/' },
];
