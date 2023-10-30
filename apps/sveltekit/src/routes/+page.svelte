<script>
    import { Button,Options } from "ui";
    import ReactWrapper from "./react-wrapper.svelte";
</script>
<div class="text-xl font-bold">Sveltekit</div>
<react:Button label="click me" url="https://google.com"/>
<div class="pt-3">
    <react:Options/>
</div>

