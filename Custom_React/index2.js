
const mainContainer = document.getElementById('root');

let obj = {
type: 'a',
 attributes:{
  href:'google.com',
  target: "_blank"
 },
 Children: "click for google"

};

function customRender(whatToInject , WhereToInject){
const domElement = document.createElement(whatToInject.type);
domElement.innerHTML = whatToInject.Children;
domElement.setAttribute ('href', whatToInject.attributes.href);
domElement.setAttribute ('target', whatToInject.attributes.target);

mainContainer.appendChild(domElement)
};
customRender(obj, mainContainer)