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
            // Compute RSS link from post `slug`
            // This example assumes all posts are rendered as `/blog/[slug]` routes
            link: `/blog/${post.slug}/`,
        })),
        // (optional) inject custom xml
        customData: `<language>es-es</language>`,
    });
}
