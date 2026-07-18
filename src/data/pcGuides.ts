export interface PcGuide {
  slug: string; title: string; description: string; answer: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { q: string; a: string }[];
}

export const pcGuides: PcGuide[] = [
  {
    slug: 'windows-11', title: 'Windows 11 Requirement',
    description: 'Does Ace Combat 8 run on Windows 10? The official Steam minimum specification lists Windows 11 64-bit; Windows 10 support is not confirmed.',
    answer: 'Ace Combat 8 officially requires 64-bit Windows 11 on PC. Steam does not list Windows 10, so a Windows 10 system is outside the published minimum specification even if its hardware is otherwise fast enough.',
    facts: [{ label: 'Official OS', value: 'Windows 11 64-bit' }, { label: 'Windows 10', value: 'Not listed' }, { label: 'Store', value: 'Steam' }],
    sections: [
      { heading: 'Treat the OS line as a compatibility requirement', paragraphs: ['The minimum table names Windows 11 rather than “Windows 10 or later.” Until Bandai Namco publishes a broader support statement, Windows 10 compatibility should not be promised.', 'A machine meeting the CPU and GPU minimums can still fall outside support because of its operating system. Check the OS edition and 64-bit architecture before buying or preloading.'] },
      { heading: 'What has not been confirmed', paragraphs: ['The listing does not explain whether the Windows 11 requirement depends on a specific build, TPM setting, Secure Boot setting or DirectStorage. It also does not confirm Linux, SteamOS or Proton support.'] },
      { heading: 'A safe pre-purchase check', paragraphs: ['Open Windows Settings, choose System and About, then confirm the Windows specification and system type. Also compare the GPU, CPU, memory, DirectX and storage requirements because the OS check alone is not sufficient.'] },
    ],
    faqs: [{ q: 'Will Ace Combat 8 run on Windows 10?', a: 'Windows 10 is not in the official minimum specification, so support is not confirmed.' }, { q: 'Is 32-bit Windows supported?', a: 'No supported 32-bit configuration is listed; the requirement is Windows 11 64-bit.' }, { q: 'Is Steam Deck supported?', a: 'The published requirements do not confirm SteamOS, Proton or Steam Deck support.' }],
  },
  {
    slug: 'ray-tracing-gpu', title: 'Ray-Tracing GPU Requirement',
    description: 'Ace Combat 8 requires a hardware ray-tracing GPU on PC. Compare the official RTX 2060 and RX 6600 XT minimums and the separate Shader Model requirement.',
    answer: 'A hardware ray-tracing-capable graphics card is required for Ace Combat 8 on PC. The official minimum models are the GeForce RTX 2060 6GB and Radeon RX 6600 XT 8GB, alongside DirectX 12 and Shader Model 6.6 or higher.',
    facts: [{ label: 'NVIDIA minimum', value: 'RTX 2060 6GB' }, { label: 'AMD minimum', value: 'RX 6600 XT 8GB' }, { label: 'API', value: 'DX12 / SM 6.6+' }],
    sections: [
      { heading: 'Ray tracing is part of the minimum', paragraphs: ['Steam states that a hardware ray-tracing-capable GPU is required. That is different from an optional visual preset: buyers should not assume a non-RT card qualifies simply because it can run other DirectX 12 games.', 'The named cards are the official comparison points. A different GPU should be checked for hardware ray-tracing support, Shader Model 6.6 support, memory and overall performance rather than judged only by its generation name.'] },
      { heading: 'Do not infer the recommended GPU yet', paragraphs: ['Steam currently marks the recommended specification as TBD. The minimum cards target an estimated upscaled 1080p, 30fps and Low settings, so they do not establish the hardware needed for native 1080p, 60fps, higher presets or higher resolutions.'] },
      { heading: 'Laptop and integrated graphics need exact verification', paragraphs: ['Laptop GPUs can differ from desktop models with a similar name, and the listing gives no laptop-specific minimum. Integrated GPUs are not listed. Compare the exact model and supported features instead of relying on an RTX or Radeon brand label alone.'] },
    ],
    faqs: [{ q: 'Can I disable ray tracing and use an older GPU?', a: 'The official requirement says a hardware ray-tracing-capable GPU is required; no non-RT fallback is confirmed.' }, { q: 'Is an RTX 2060 enough?', a: 'The 6GB RTX 2060 is the listed NVIDIA minimum for the estimated Low, upscaled-1080p, 30fps target.' }, { q: 'What is the recommended GPU?', a: 'The official recommended PC specification is still TBD.' }],
  },
  {
    slug: 'storage-ssd', title: 'SSD & Storage Requirement',
    description: 'Ace Combat 8 needs 125GB of available SSD storage on PC. Learn what the official requirement confirms and what it does not say about SSD type.',
    answer: 'Ace Combat 8 requires 125GB of available space on an SSD according to Steam. An HDD-only installation is outside the published minimum; the listing does not specify SATA versus NVMe or disclose the final download size.',
    facts: [{ label: 'Free space', value: '125GB' }, { label: 'Drive type', value: 'SSD required' }, { label: 'SATA/NVMe', value: 'Not specified' }],
    sections: [
      { heading: 'Available space is not necessarily download size', paragraphs: ['The 125GB figure is the required free storage capacity. Compressed download size, unpacking overhead, day-one updates and future add-ons can differ, so keeping extra free space is prudent without inventing a precise buffer.', 'The game should be installed on an SSD. Merely having an SSD elsewhere in the PC does not satisfy the storage line if the game itself is placed on a hard disk.'] },
      { heading: 'No SSD interface is named', paragraphs: ['Steam says SSD but does not name SATA, NVMe, PCIe generation or a minimum read speed. This guide therefore does not claim that an NVMe drive is mandatory or that a particular SSD will improve frame rate.'] },
      { heading: 'Plan space for the edition, not assumptions', paragraphs: ['The Deluxe Edition and Ace Pass add content, but the store has not published separate installed-size totals for each edition. Check the final client estimate at installation and keep the official 125GB minimum available.'] },
    ],
    faqs: [{ q: 'Can Ace Combat 8 run from an HDD?', a: 'An HDD installation does not meet the official PC minimum, which explicitly requires an SSD.' }, { q: 'Does it require an NVMe SSD?', a: 'No SSD interface or speed is specified; only an SSD and 125GB of available space are listed.' }, { q: 'Is the download exactly 125GB?', a: 'Not necessarily. The published number is available storage space, not a confirmed compressed download size.' }],
  },
  {
    slug: 'performance-target', title: 'PC Performance Target',
    description: 'Ace Combat 8 minimum PC performance target explained: estimated upscaled 1080p, 30fps and Low settings, with drops possible in intensive scenes.',
    answer: 'The official minimum PC configuration targets an estimated upscaled 1080p at 30fps on Low settings. Steam warns that frame rate may drop in graphics-intensive scenes, and the recommended specification remains TBD.',
    facts: [{ label: 'Resolution', value: '1080p, upscaled' }, { label: 'Frame rate', value: '30fps estimated' }, { label: 'Preset', value: 'Low' }],
    sections: [
      { heading: 'This is an estimate, not a locked guarantee', paragraphs: ['Steam couples the minimum hardware table to an estimated target and explicitly notes possible drops in graphics-intensive scenes. It should not be rewritten as “stable 30fps” or used as evidence for console performance.', 'The word upscaled also means the target is not a promise of native 1920×1080 rendering. The listing does not name the upscaling technology, quality mode or internal resolution.'] },
      { heading: 'There is no official 60fps build yet', paragraphs: ['Because recommended CPU, GPU and memory are still TBD, no official configuration can yet be labeled the 1080p/60fps, 1440p or 4K requirement. Community estimates and other games’ benchmarks are not substitutes for AC8 testing.'] },
      { heading: 'How to use the minimum table', paragraphs: ['Treat the listed CPU, GPU, 16GB memory, Windows 11, SSD and graphics API as one complete baseline. Meeting one component does not compensate for missing hardware ray tracing, an unsupported OS or insufficient storage.'] },
    ],
    faqs: [{ q: 'Does the minimum spec guarantee 30fps?', a: 'No. It is an estimated target and Steam warns of drops in intensive scenes.' }, { q: 'Is 1080p native?', a: 'No; the official target specifically says 1080p upscaled.' }, { q: 'What PC is required for 60fps?', a: 'No official 60fps configuration has been published because the recommended specification is TBD.' }],
  },
];

export const pcSource = { label: 'Official Steam system requirements', href: 'https://store.steampowered.com/app/2288340/ACE_COMBAT_8_WINGS_OF_THEVE/' };
