<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { page } from '$app/stores';
  const slug = $page.params.slug;
</script>

<svelte:head>
  <meta
    name="description"
    content="Arch Linux {slug} topics that you may be interested in contributing to."
  />
  <title>{slug} · {data.roottitle}</title>
</svelte:head>

<div class="container mx-auto p-8 space-y-8">
  <ol class="breadcrumb">
    <li class="crumb"><span>🏠</span><a href="/">Home</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="capitalize">{slug}</li>
  </ol>

  <h1>{data.content.default.heading}</h1>

  <section class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each data.content.default.children as { title, subtitle, link }}
        {@const url = link ? link : slug + '/' + title}
        <a class="card card-hover flex flex-col" href={url}>
          <div class="p-4 space-y-4">
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
