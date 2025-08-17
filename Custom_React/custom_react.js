function customRender(whatToInject, WhereToInject){
  // const domElement = document.createElement(whatToInject.type)
  // domElement.innerHTML  = whatToInject.Children;
  // domElement.setAttribute('href', reactElement.props.href);
  // domElement.setAttribute('target', reactElement.props.target);

  // mainContainer.appendChild(domElement)
  
  /** another way of writing code of above*/
  const domElement = document.createElement(whatToInject.type)
  domElement.innerHTML = whatToInject.Children;
  for(const prop in reactElement.props){
       if(prop === 'children')continue;
       domElement.setAttribute(prop, reactElement.props[prop])
  }
  mainContainer.appendChild(domElement)

}


const reactElement = {
  type: 'a',  // create a tag such for buttonn type eill be button
  props: {
    href: 'google.com', // where to redirect when clicked
    // if you want to open in new tab then use target as _blank ; 
    target: '_blank'
  },
  Children: 'click me to visit google' // text which needs to be visible  
}

const mainContainer = document.getElementById('root')

customRender(/*what to inject=> */ reactElement , /*where to inject=> */ mainContainer )

