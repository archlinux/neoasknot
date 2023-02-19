<script>
  import { base } from '$app/paths';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<ol class="breadcrumb">
  <li class="crumb"><a href="{base}/" class="!no-underline">🏠</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li class="capitalize">{data.slug}</li>
</ol>

<h1>{data.nodeContent.heading}</h1>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each data.nodeContent.children as { title, subtitle, link }}
    {@const icon = link ? '🔗' : '📁'}
    {@const url = link || `${base}/${data.slug}/${title}`}
    <a href={url} class="card card-hover flex flex-col">
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
