const { createApp } = Vue;
import {contacts} from "./db.js";
const dt = luxon.DateTime;

createApp({
  data() {
    return {
      contacts,
      currChatIndex : 0,
      newMessage : "",
      search : "",
      darkMode : false,
    }
  },

  methods : {
    addNewMessage() {
      if(this.newMessage.length > 0) {
        const message = {
          date: dt.now().toFormat("D"),
          time: dt.now().toFormat("t"),
          message: this.newMessage,
          status: 'sent'
        }
        this.contacts[this.currChatIndex].messages.push(message);
        this.newMessage = "";
        this.bufferInputMessage();
        this.botAnswerMessage();
      }
    },

    botAnswerMessage() {
      setTimeout( () => {
        const answer = {
          date: dt.now().toFormat("D"),
          time: dt.now().toFormat("t"),
          message: 'Ok',
          status: 'received'
        }
        this.contacts[this.currChatIndex].messages.push(answer);
      },1500);
    },

    closeDropdownMenus(index) {
      this.contacts.forEach( contact => {
        contact.messages.forEach( (message,i) => {
          if(i !== index) message.dropdownVisible = false;
        })
      })
    },

    deleteMessage(index) {
      this.contacts[this.currChatIndex].messages.splice(index,1);
    },

    replaceInputMessage() {
      this.newMessage = this.contacts[this.currChatIndex].inputMessage;
    },

    bufferInputMessage() {
      this.contacts[this.currChatIndex].inputMessage = this.newMessage;
    }
  },

  computed : {
    filteredContacts() {
      return this.contacts.filter( contact => {
        return contact.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },

  mounted() {
    
  }

}).mount("#app")