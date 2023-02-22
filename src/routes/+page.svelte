<script lang="ts">
  import ChildGrid from '$lib/ChildGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1 class="text-xl">{data.heading}</h1>

<ChildGrid children={data.children} />
