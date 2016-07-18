import { Component, h, render, unmountComponentAtNode } from "preact";

export default function ShadowDOM(ComponentClass, CSSString) {
	class ShadowDOMComponentClass extends Component {
		setup(node) {
			if (!node) {
				console.warn(`ShadowDOM failed to create shadow dom for ${ComponentClass.displayName || "component"}, because node was falsy.`);
				return;
			}

			this.shadow = node.createShadowRoot();
			this._component = render(<ComponentClass {...this.props}/>, this.shadow);
			this.shadow.innerHTML += `<style>${CSSString}</style>`;
		}

		render() {
			return <div ref={this.setup.bind(this)}/>;
		}
	}
	ShadowDOMComponentClass.displayName = `ShadowDOM(${ComponentClass.displayName})`;

	return ShadowDOMComponentClass;
}


