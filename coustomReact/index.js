function render(main, element) {
  target = document.createElement(element.type);
  for (key in element.prop) {
    target.setAttribute(key, element.prop[key]);
  }
  target.innerHTML = element.child;
  main.appendChild(target);
}
main = document.querySelector("#root");
element = {
  type: "a",
  prop: {
    href: "https://google.com",
    target: "_blank",
  },
  child: "click me",
};
render(main, element);
