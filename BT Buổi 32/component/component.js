class F8 {
  constructor() {}

  static component(name, option) {
    customElements.define(name, () => {
      customElements.define(
        name,
        class extends HTMLElement {
          constructor() {
            super();
          }

          connectedCallback() {
            console.log("hi");
          }
        }
      );
    });
  }
}
