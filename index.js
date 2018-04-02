const React = {
  createElement(tags, prop = {}, content){
    if (typeof tags !== 'string') { 
      throw new Error('The value of the tag is incorrect');
    }   
    
    if (typeof prop !== 'object' && 
        typeof prop !== 'undefined'
    ) {  
        throw new Error('The value of the property is incorrect');
    } 
     
    if (!Array.isArray(content) &&
        typeof content !== 'string'&&
        typeof content !== 'undefined'
    ) { 
        throw new Error('The value of the content is incorrect');
    } 
    
    let tag = document.createElement(tags);
    let keys = Object.keys(prop);
    
    if (prop) {
      keys.forEach (key => {
        key === "style"
          ? Object.assign(tag.style,prop.style)
          : Object.assign(tag,prop)
      })
    } 
    
    const append = elem => 
      tag.appendChild( 
        typeof elem === 'string'   
          ? document.createTextNode(elem) 
          : elem    
      ); 
    
    if (Array.isArray(content)) {  
      content.forEach(append)
    } else if (typeof content === 'string') {
      append(content)
    } 
      
    return tag;  
  }, 
   
  render(content, place) {
     if (content === 'string' || 
         content instanceof window.Element) {  
        place.appendChild(content); 
     } else {
        throw new Error('The value of the content is incorrect');
     }
  }  
}

const app = 
  React.createElement('div', { style: { backgroundColor: 'red' } }, [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node', 
    React.createElement('div', { textContent: 'Text content' }),
  ]);
      
React.render(
  app,
  document.getElementById('root'),
);