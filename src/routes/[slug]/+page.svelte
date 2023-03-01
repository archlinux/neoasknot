<script lang="ts">
  import { base } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="breadcrumbs">
  <ol>
    <li><a href="{base}/" class="!no-underline">🏠</a></li>
    <li class="capitalize">{data.slug}</li>
  </ol>
</div>

<h1 class="text-xl">{data.heading}</h1>

<ChildGrid children={data.children} slug={data.slug} />
