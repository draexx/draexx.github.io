import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const blog = await getCollection('blog');
    return rss({
        title: 'Pedro Carranza | De Bits a Bots',
        description: 'Especialista en transformación de sistemas legacy e integración de IA.',
        site: context.site,
        items: blog.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>es-es</language>`,
    });
}
