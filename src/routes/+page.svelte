<script>
  import ChildGrid from '$lib/ChildGrid.svelte';

  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<h1>{data.nodeContent.heading}</h1>

<ChildGrid {...data.nodeContent} />
