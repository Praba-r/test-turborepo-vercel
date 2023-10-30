<script>
    import { Button } from "ui";
    import ReactWrapper from "./react-wrapper.svelte";
</script>
<div class="text-xl font-bold">Sveltekit</div>
<ReactWrapper path="ui/next_components/Button" subpath="Button" props = {{label:"click me",url:"https://google.com"}}/>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
