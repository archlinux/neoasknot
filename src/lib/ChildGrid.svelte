<script lang="ts">
  import { base } from '$app/paths';

  interface Children {
    readonly title: string;
    readonly subtitle?: string;
    readonly link?: string;
    readonly node?: string;
  }

  export let children: Children[];
  export let slug = '';
  export const routePath = slug ? `${base}/${slug}` : base;
</script>

<div class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
  {#each children as { title, subtitle, link, node }}
    {@const href = link || `${routePath}/${node}`}
    {@const icon = link ? '🔗' : '📁'}
    <a
      {href}
      class="card shadow-lg transition-all hover:-translate-y-1 hover:bg-base-200"
    >
      {#if subtitle}
        <article class="card-body space-y-4 p-4">
          <h2 class="card-title place-content-between">
            {title}
            <span class="text-lg">{icon}</span>
          </h2>
          <p>{subtitle}</p>
        </article>
      {:else}
        <div class="card-body p-4">
          <h2 class="card-title place-content-between">
            {title}
            <span class="text-lg">{icon}</span>
          </h2>
        </div>
      {/if}
    </a>
  {/each}
</div>
