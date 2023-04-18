const { createApp } = Vue;
import {contacts} from "./db.js";
const dt = luxon.DateTime;

createApp({
  data() {
    return {
      contacts,
      currChatIndex : 0,
      newMessage : "",
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
      },2000);
    }
  },

  mounted() {
    
  }

}).mount("#app")