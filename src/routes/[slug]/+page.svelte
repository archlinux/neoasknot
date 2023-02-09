<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  const slug = $page.params.slug;

  /** @type {import('./$types').PageData} */
  export let data;
  const nodeContent = data.nodeImport.default;
</script>

<svelte:head>
  <meta
    name="description"
    content="Arch Linux {slug} topics that you may be interested in contributing to."
  />
  <title>{slug} · {data.rootTitle}</title>
</svelte:head>

<ol class="breadcrumb">
  <li class="crumb"><span>🏠</span><a href="{base}/">Home</a></li>
  <li class="crumb-separator" aria-hidden>&rsaquo;</li>
  <li class="capitalize">{slug}</li>
</ol>

<h1>{nodeContent.heading}</h1>

<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  {#each nodeContent.children as { title, subtitle, link }}
    {@const url = link || base + '/' + slug + '/' + title}
    <a class="card card-hover flex flex-col" href={url}>
      {#if subtitle}
        <article class="space-y-4 p-4">
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </article>
      {:else}
        <div class="p-4">
          <h2>{title}</h2>
        </div>
      {/if}
    </a>
  {/each}
</div>
