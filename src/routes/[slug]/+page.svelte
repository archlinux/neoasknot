<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';

  const slug = $page.params.slug;

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <meta
    name="description"
    content="Arch Linux {slug} topics that you may be interested in contributing to."
  />
  <title>{slug} · {data.roottitle}</title>
</svelte:head>

<div class="container mx-auto space-y-8 p-8">
  <ol class="breadcrumb">
    <li class="crumb"><span>🏠</span><a href="{base}/">Home</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="capitalize">{slug}</li>
  </ol>

  <h1>{data.content.default.heading}</h1>

  <section class="space-y-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each data.content.default.children as { title, subtitle, link }}
        {@const url = link ? link : base + '/' + slug + '/' + title}
        <a class="card card-hover flex flex-col" href={url}>
          <div class="space-y-4 p-4">
            <h2>{title}</h2>
            {#if subtitle}
              <article>
                <p>{subtitle}</p>
              </article>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>
