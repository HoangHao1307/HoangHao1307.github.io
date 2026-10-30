export function getReadingTime(content: string = ''): string {
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/```[\s\S]*?```/g, '');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
