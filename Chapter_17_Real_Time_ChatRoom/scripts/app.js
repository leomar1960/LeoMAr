// dom queries
// this when you extract the html elements which i want to listen 
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMssg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

///////////////////////////////////////////////////////////////////////
// this is what hapeesn when the users engage
//add a new chat
newChatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => { newChatForm.reset() })
        .catch(err => console.log(err));

})
//update username 
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    //update the name via the chatroom class
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    //reset the form
    newNameForm.reset();
    //show then hide the update meesage
    updateMssg.innerText = `Your name was update to ${newName}`;
    setTimeout(() => {
        updateMssg.innerText = '';
    }, 3000);
})

//update the chat room
rooms.addEventListener('click', e =>{
    console.log(e);
    if(e.target.tagName === "BUTTON"){
        chatUI.clear();
    }
   chatroom.updateRoom(e.target.getAttribute('id'));
   chatroom.getChats( chat => { chatUI.render(chat)})

})
/////////////////////////////////////////////////////////////////////
//this is where the code starts
//check local storage for a name
const username = localStorage.username ? localStorage.username:'anon';

//class instances 
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);


//get the chats and render 
chatroom.getChats(data => chatUI.render(data));