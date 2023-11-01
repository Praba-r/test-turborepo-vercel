<script>
    
    let childWindow;

    function openChildWindow() {
        childWindow = window.open("http://localhost:3001/", "ChildWindow", "width=400,height=300");
    }

    function sendMessageToChild() {
        if (childWindow) {
            const message = "Hello from Parent Window!";
            childWindow.receiveMessage(message);
        }
    }
</script>
<div class="text-xl font-bold">Sveltekit</div>
<button on:click={openChildWindow} class="btn btn-primary">Open Child Window</button>
<button on:click={sendMessageToChild}>Send Message to Child</button>
<div class="pt-3">
</div>

