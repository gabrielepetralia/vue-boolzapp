const { createApp } = Vue;
import {contacts} from "./db.js";
const dt = luxon.DateTime;

const messageSentSound = new Audio("assets/sound/message-sent.mp3");
const messageReceivedSound = new Audio("assets/sound/message-received.mp3");

createApp({
  data() {
    return {
      contacts,
      currChatIndex : 0,
      newMessage : "",
      search : "",
      darkMode : false,
      notification : false,
      scrollDown : false,
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
        if(this.notification) messageSentSound.play();
        this.scrollDownChat();
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
        if(this.notification) messageReceivedSound.play();
        this.scrollDownChat();
      },1500);
    },

    scrollDownChat() {
      setTimeout(() => {
        const chatContent = document.querySelector('.chat-content');
        chatContent.scrollTop = chatContent.scrollHeight;
      }, 1);
    },

    scrollDownVisible() {
      const chatContent = document.querySelector('.chat-content');
      if (chatContent.scrollTop >= (chatContent.scrollHeight - chatContent.clientHeight) && chatContent.scrollTop > 0) {
        this.scrollDown = false;
      } else {
        this.scrollDown = true;
      };
    },

    // scroll() {
    //   const chatContent = document.querySelector('.chat-content');
    //   if (chatContent[0].scrollHeight - chatContent.scrollTop() == div.height())  return "ciao";
    // },

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