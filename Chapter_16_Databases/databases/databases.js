const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('.container button');
// console.log(button)


// function to get documents
const addRecipe = (recipe, id) => {

    let time = recipe.createdat.toDate();
    const html = `
    <li data-id="${id}">
    <div>${recipe.title}</div>
    <div>${time}</div>
    <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
    `;


    list.innerHTML += html;
}




// deleting recipe from the webpage
const deleteRecipe = (id)=>{
    const recipes = document.querySelectorAll('li');
    recipes.forEach( recipe =>{
        if( recipe.getAttribute( "data-id" ) === id){
            recipe.remove();
        }
    })

}


// Get Documents
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    // const types =snapshot.docChanges(); 

    snapshot.docChanges().forEach(change => {

        const doc = change.doc;
        if (change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        }else if( change.type === 'removed'){
            deleteRecipe(doc.id);
        }
    });
})

// unsub();
// db.collection("recipes").get().then((snapshot) =>{
// snapshot.docs.forEach(doc => {
//     // console.log(doc.id);
//     // console.log(doc.data());
//     addRecipe(doc.data(), doc.id);
// });
// }).catch( err => console.log(err));


// add document
form.addEventListener('submit', (e) => {
    e.preventDefault();// stops the page from reloading

    const now = new Date()

    const recipe = {
        title: form.recipe.value,
        createdat: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection("recipes").add(recipe).then(() => {
        console.log("recipe added");
    }).catch((err) => {
        console.log(err)
    })
        ;
})


// deleting data from the firestore wbsite

list.addEventListener('click', (e) => {
    // console.log(e);

    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        console.log(id);
        db.collection('recipes').doc(id).delete();
    }
})

//unsub() from database  changes

button.addEventListener('click', ()=>{
    unsub();
    console.log('unsubscribed from collection changes')
});