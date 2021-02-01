console.log('dom file');

const body = document.querySelector('body');

 const styleBody = () =>{
    body.style.background = 'peachpuff'
}

 const addTitle = (text) =>{
    const title  = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
}


 const contact = "mario@the net Ninja.co.uk"

 export {styleBody, addTitle, contact}