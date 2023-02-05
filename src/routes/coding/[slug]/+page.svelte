<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import { page } from '$app/stores';
  const slug = $page.params.slug;
</script>

<svelte:head>
  <meta
    name="description"
    content="Arch Linux projects using {slug} that you may be interested in contributing to."
  />
  <title>{slug} · {data.roottitle}</title>
</svelte:head>

<div class="container mx-auto space-y-8 p-8">
  <ol class="breadcrumb">
    <li class="crumb"><span>🏠</span><a href="/">Home</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li class="crumb"><span>🧑‍💻</span><a href="/coding">Coding</a></li>
    <li class="crumb-separator" aria-hidden>&rsaquo;</li>
    <li>{slug}</li>
  </ol>

  <h1>Projects using {slug}</h1>

  <section class="space-y-4">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each data.content.default.children as { title, subtitle, link }}
        <a class="card card-hover flex flex-col" href={link}>
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
