<script>
  import { base } from '$app/paths';

  /** @type {import('./$types').LayoutData} */
  export let data;
  const nodeContent = data.nodeImport.default;
</script>

<svelte:head>
  <meta
    name="description"
    content="Landing page for areas of Arch Linux you may be interested in contributing to."
  />
  <title>{nodeContent.title}</title>
</svelte:head>

<div class="container mx-auto space-y-8 p-8">
  <h1>{nodeContent.heading}</h1>

  <section class="space-y-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each nodeContent.children as { title, subtitle, link }}
        {@const url = link || base + '/' + title.toLowerCase()}
        <a class="card card-hover flex flex-col" href={url}>
          <div class="space-y-4 p-4">
            <article>
              <h2>{title}</h2>
              <p>{subtitle}</p>
            </article>
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>
