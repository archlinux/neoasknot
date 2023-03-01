<script lang="ts">
  import { base } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="breadcrumbs">
  <ol>
    <li><a href="{base}/" class="!no-underline">🏠</a></li>
    <li><a href="{base}/coding" class="!no-underline">🧑‍💻 Coding</a></li>
    <li>{data.slug}</li>
  </ol>
</div>

<h1 class="text-xl">Projects using {data.slug}</h1>

<ChildGrid children={data.children} />
