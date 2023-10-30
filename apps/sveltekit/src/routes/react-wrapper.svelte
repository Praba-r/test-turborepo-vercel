<script>
    import { onMount } from 'svelte';
    import ReactDOM from 'react-dom';
    import React from 'react';
    export let path;
    export let subpath;
    export let props;
    let reactComponent;
    onMount(() => {
      import("ui").then((module) => { 
        reactComponent = true;
        const ReactComponent = module.Button;
        const reactContainer = document.createElement('div');
        // Render the React component
         ReactDOM.render(React.createElement(ReactComponent, props), reactContainer);
        // Attach the React component to the Svelte component's DOM
        document.getElementById('react-container').appendChild(reactContainer);
        
      });
    });
  </script>
  
  <div>
    <div id="react-container"></div>
  </div>