<script lang="ts">
  import ChildGrid from '$lib/ChildGrid.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<ChildGrid heading={data.heading} children={data.children} />
