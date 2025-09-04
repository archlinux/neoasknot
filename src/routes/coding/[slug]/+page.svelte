<script lang="ts">
  import { resolve } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';

  let { data } = $props();
</script>

<div class="breadcrumbs">
  <ol>
    <li><a href={resolve('/')} class="no-underline!">🏠</a></li>
    <li><a href={resolve('/coding')} class="no-underline!">🧑‍💻 Coding</a></li>
    <li aria-current="page">{data.slug}</li>
  </ol>
</div>

<ChildGrid heading={data.heading} children={data.children} />
