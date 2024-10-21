<script lang="ts">
  interface Children {
    readonly name: string;
    readonly description?: string;
    readonly href: string;
  }

  interface Props {
    heading: string;
    children: Children[];
  }

  let { heading, children }: Props = $props();
</script>

<h1 class="text-xl">{heading}</h1>

<nav
  aria-label="Current level of the decision tree"
  class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
>
  {#each children as { name, description, href }}
    {@const icon = /:\/\//.test(href) ? '🔗' : '📁'}
    <a
      {href}
      aria-label={name}
      class="card shadow-lg transition-all hover:-translate-y-1 hover:bg-base-200"
    >
      {#if description}
        <article class="card-body space-y-4 p-4">
          <h2 class="card-title place-content-between">
            {name}
            <span class="text-lg">{icon}</span>
          </h2>
          <p>{description}</p>
        </article>
      {:else}
        <div class="card-body p-4">
          <h2 class="card-title place-content-between">
            {name}
            <span class="text-lg">{icon}</span>
          </h2>
        </div>
      {/if}
    </a>
  {/each}
</nav>
