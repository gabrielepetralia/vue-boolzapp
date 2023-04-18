const { createApp } = Vue;
import {contacts} from "./db.js";

createApp({
  data() {
    return {
      contacts,
      currChatIndex : 0,
    }
  },

  methods : {
    printContacts() {
      console.log(contacts);
    }
  },

  mounted() {
    this.printContacts();
  }

}).mount("#app")