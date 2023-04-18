const { createApp } = Vue;
import {contacts} from "./db.js";

createApp({
  data() {
    return {
      contacts,
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