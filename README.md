## What
Simple plugin for detecting overlapping elements. No dependencies required.

## How
```html
<div class="first-thing-to-check"></div>
<div class="second-thing-to-check"></div>

<script src="path/to/bundle.js"></script>
<script>
    new OverlapWatch('.first-thing-to-check', '.second-thing-to-check');
</script>
```

That's it! The `overlapping` class will be added to both `.first-thing-to-check` and `.second-thing-to-check` whenever they overlap each other, and removed when they don't.

### Options
You can also pass an object with the following options (defaults specified)

```js
new OverlapWatch({
    elementA: null, // First element to watch. String or Element object (ie, `document.querySelector('...')` or `jQuery('...').get(0)`)
    elementB: null, // Second element to watch. String or Element object (ie, `document.querySelector('...')` or `jQuery('...').get(0)`)
    class: 'overlapping', // String with classname to add to overlapping elements (and remove when they stop overlapping)
    log: true, // Whether or not this watcher should log errors
    container: window // The container whose scroll this watcher will watch
})
```

### Methods
Save the instantiated and you'll have access to these methods:

* `refresh()` - checks and adds/removes overlapping classes as necessary. This is what the plugin runs internally on scroll and resize.

## Development
1. Clone this repo.
1. `npm install`
1. `npm run dev` for development.
1. `npm run build` for bundling/minification.
