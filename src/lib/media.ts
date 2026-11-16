// Astro only optimizes images, so looping videos are resolved here through Vite to get hashed URLs.
// A missing file throws, which fails the build instead of shipping a broken player.
const videos = import.meta.glob<string>('/src/content/projects/*/media/*.mp4', { query: '?url', import: 'default', eager: true });

export function resolveVideo(projectId: string, relativePath: string): string
{
    const key = '/src/content/projects/' + projectId + '/' + relativePath.replace(/^\.\//, '');
    const url = videos[key];
    if (!url)
    {
        throw new Error('Video not found for project "' + projectId + '": ' + relativePath + ' (expected at ' + key + ')');
    }
    return url;
}
