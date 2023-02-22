<script lang="ts">
  import { base } from '$app/paths';

  export let children: any[];
  export let slug = '';
  export const routePath = slug ? `${base}/${slug}` : base;
</script>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each children as { title, subtitle, link, node }}
    {@const href = link || `${routePath}/${node}`}
    {@const icon = link ? '🔗' : '📁'}
    <a {href} class="card card-hover flex flex-col">
      {#if subtitle}
        <article class="space-y-4 p-4">
          <div class="flex place-content-between">
            <h2 class="inline">{title}</h2>
            <span class="mt-1 md:mt-1.5">{icon}</span>
          </div>
          <p>{subtitle}</p>
        </article>
      {:else}
        <div class="flex place-content-between p-4">
          <h2 class="inline">{title}</h2>
          <span class="mt-1 md:mt-1.5">{icon}</span>
        </div>
      {/if}
    </a>
  {/each}
</div>
