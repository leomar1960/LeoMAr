//adding a new chat document
//setting up a real time listener
//updating the username
// updating the room



class Chatroom{
    constructor(room,username){
        this.room =room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    async addChat(message){
        // format a chat object 
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save the chat document 
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        this.chats
        .where('room','==', this.room).orderBy('created_at')
        .onSnapshot(snapshot =>{// we are going to add a snapshot which is a live listener and will be looking for changes of remove or add
              snapshot.docChanges().forEach( change => {// and will pas that change to in order to be evaluates and print the change of the instace
                //   console.log(change);
                  if(change.type == 'added'){
                      callback(change.doc.data());
                  }
              });
          });
    }

    updateName(username){
        this.username = username;
    }

    updateRoom(room){
        this.room = room;
        console.log(room);
    }
}

const chatroom = new Chatroom('general', 'shaun');


chatroom.getChats((data)=>{
    console.log(data);
})

chatroom.updateRoom('gaming');


// chatroom.addChat('hello everyone')
// .then(()=> console.log('chat added'))
// .catch(err => console.log(err));
// console.log(chatroom);