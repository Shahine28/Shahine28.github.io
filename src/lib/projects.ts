import { getCollection } from 'astro:content';

export async function getSortedProjects()
{
    const projects = await getCollection('projects');
    return projects.sort((a, b) => b.data.order - a.data.order);
}

export async function getFeaturedProjects()
{
    const projects = await getCollection('projects');
    return projects
        .filter((p) => p.data.featured !== undefined)
        .sort((a, b) => (a.data.featured ?? 0) - (b.data.featured ?? 0));
}
