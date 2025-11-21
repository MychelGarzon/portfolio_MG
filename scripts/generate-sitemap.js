// scripts/generate-sitemap.js
import fs from 'fs';
import { create } from 'xmlbuilder';
import projectsData from '../src/data/projectsData.js'; // Adjust path as needed
import blogData from '../src/data/blogData.js';         // Adjust path as needed

const baseUrl = 'https://mychelgarzon.netlify.app/'; // 🛑 REPLACE WITH YOUR URL

const root = create('urlset', { version: '1.0', encoding: 'UTF-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

// 1. Add Static Pages
const pages = ['', '/projects', '/workflows', '/blog', '/contact', '/skills'];
pages.forEach(page => {
    const url = root.ele('url');
    url.ele('loc', `${baseUrl}${page}`);
    url.ele('changefreq', 'weekly');
    url.ele('priority', page === '' ? '1.0' : '0.8');
});

// 2. Add Dynamic Project Pages
projectsData.forEach(project => {
    const url = root.ele('url');
    url.ele('loc', `${baseUrl}/projects/${project.id}`);
    url.ele('changefreq', 'monthly');
    url.ele('priority', '0.7');
});

// 3. Add Dynamic Blog Pages
blogData.forEach(post => {
    const url = root.ele('url');
    url.ele('loc', `${baseUrl}/blog/${post.id}`);
    url.ele('changefreq', 'monthly');
    url.ele('priority', '0.7');
});

const xml = root.end({ pretty: true });
fs.writeFileSync('./public/sitemap.xml', xml);

console.log('✅ Sitemap generated successfully!');