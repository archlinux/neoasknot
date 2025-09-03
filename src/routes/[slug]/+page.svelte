<script lang="ts">
  import { resolve } from '$app/paths';
  import ChildGrid from '$lib/ChildGrid.svelte';

  let { data } = $props();
</script>

<div class="breadcrumbs">
  <ol>
    <li><a href={resolve('/')} class="no-underline!">🏠</a></li>
    <li class="capitalize">{data.slug}</li>
  </ol>
</div>

<ChildGrid heading={data.heading} children={data.children} />
