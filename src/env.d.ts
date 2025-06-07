declare module '*.md' {
  import type { SvelteComponent } from 'svelte';
  const component: SvelteComponent;
  export default component;
  export const metadata: {
    title?: string;
    date?: string;
    category?: string;
    description?: string;
    thumbnail?: string;
    thumbnail_webp?: string;
  };
} 