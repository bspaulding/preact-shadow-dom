# preact-shadow-dom

Render your preact component to shadow DOM:

```javascript
import ShadowDOM from "preact-shadow-dom";

var MyComponent = () => (
	<div className="my-component-class">
		<h1>My Component</h1>
	</div>
);

var ShadowMyComponent = ShadowDOM(MyComponent);
```


With CSS, injected into the shadow DOM root:

```javascript
import ShadowDOM from "preact-shadow-dom";
import styles from "styles.css";

var MyComponent = () => (
	<div className="my-component-class">
		<h1>My Component</h1>
	</div>
);

// styles is raw css that will be injected into the shadow dom
var ShadowMyComponent = ShadowDOM(MyComponent, styles);
```

## Related

[preact-custom-element](https://github.com/bspaulding/preact-custom-element)
