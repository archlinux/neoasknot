<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<svelte:head>
  <meta
    name="description"
    content="Landing page for areas of Arch Linux you may be interested in contributing to."
  />
  <title>{data.content.default.title}</title>
</svelte:head>

<div class="container mx-auto space-y-8 p-8">
  <h1>{data.content.default.heading}</h1>

  <section class="space-y-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each data.content.default.children as { title, subtitle, link }}
        {@const url = link ? link : '/' + title.toLowerCase()}
        <a class="card card-hover flex flex-col" href={url}>
          <div class="space-y-4 p-4">
            <h2>{title}</h2>
            <article>
              <p>{subtitle}</p>
            </article>
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>
