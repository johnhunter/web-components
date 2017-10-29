const id = 'hello-world';

class HelloWorld extends HTMLElement {

    // Monitor the 'name' attribute for changes.
    static get observedAttributes() { return ['name'] }

    constructor() {
        console.log('%s is constructed', id);
        super();

        // Create a shadow root that is closed to external modification
        const shadow = this.attachShadow({ mode: 'closed' });
        let greeting = document.createElement('div');
        greeting.classList.add('greeting');
        shadow.appendChild(greeting);
        this.greeting = greeting;
    }

    connectedCallback() {
        console.log('%s is connected', id);
    }

    disconnectedCallback() {
        console.log('%s is disconnected', id);
    }

    adoptedCallback(oldDocument, newDocument) {
        console.log('%s is adopted', id, oldDocument, newDocument);
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        console.log('%s attribute %s changed to %s', id, attr, newValue);
        if (attr == 'name') {
            this.greeting.textContent = `Hello ${newValue}`;
        }
    }
}

// Define the new element
customElements.define(id, HelloWorld);
