import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 机体图鉴集合。每一架机体一个 .md 文件，写作团队后续只需要
// 复制一份现有文件改数值即可上新，不用碰代码。
const aircraft = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/aircraft' }),
  schema: z.object({
    name: z.string(),
    designation: z.string(), // 如 "F-14A"
    category: z.enum(['Multirole', 'Air Superiority', 'Attacker', 'Interceptor']),
    manufacturer: z.string().optional(),
    unlockMethod: z.string(), // 如 "Pre-order bonus", "Ace Pass reward", "Aircraft Tree"
    speed: z.number().min(1).max(5),
    mobility: z.number().min(1).max(5),
    stability: z.number().min(1).max(5),
    firepower: z.number().min(1).max(5),
    defense: z.number().min(1).max(5),
    specialWeaponSlots: z.number().default(2),
    confirmed: z.boolean().default(false),
    image: z.string().optional(),
    summary: z.string(),
    order: z.number().default(999),
    updatedAt: z.date(), // 每次改动数值时更新这个日期，页面上会显示"Last updated"，也是新鲜度信号
  }),
});

const editions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/editions' }),
  schema: z.object({
    name: z.string(),
    price: z.string().optional(),
    order: z.number().default(999),
    highlights: z.array(z.string()),
    updatedAt: z.date(),
  }),
});

// 快讯/新闻反应型内容 —— 这类"官方刚发消息、几小时内出解读"的短文
// 是新站对抗老牌wiki站的时间差打法：wiki类站点更新通常滞后几天，
// 而这类内容抓的是"新鲜事件词"的窗口期。
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.date(),
    sourceLabel: z.string().optional(), // 如 "Bandai Namco press release"
    sourceUrl: z.string().url().optional(),
  }),
});

export const collections = { aircraft, editions, news };
