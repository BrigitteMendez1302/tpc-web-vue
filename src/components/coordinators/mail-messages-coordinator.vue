<template>
  <div class="container">
    <form @submit.prevent="sendEmail">
      <label>De: </label>
      <input
          type="text"
          v-model="para"
          name="name"
          placeholder="Nombre"
      >
      <label>Para: </label>
      <input
          type="text"
          v-model="name"
          name="email"
          placeholder="Nombre"
      >

      <label>Enviar a: </label>
      <input
          type="email"
          v-model="email"
          name="email"
          placeholder="Email"
      >
      <label>Reenviar a:</label>
      <input
          type="email"
          v-model="reply_to"
          name="email"
          placeholder="Email"
      >
      <label>Message</label>
      <textarea
          name="message"
          v-model="message"
          cols="30" rows="5"
          placeholder="Message">
          </textarea>

      <input type="submit" value="Send">
    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: 'ContactUs',
  data() {
    return {
      para: '',
      message: '',
      reply_to: '',
      name: '',
      email: '',
    }
  },


  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_rl9810w', 'template_a2lopxh', e.target, 'user_XNDDXXeETYng6c0MHGviG', {
          para: "Jose",
          message: "olah",
          reply_to: "tpcprueba28@gmail.com",
          name: "Carolina",
          email: "tpcprueba28@gmail.com",
        })
        console.log('it works!!!')
      } catch (error) {
        console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },
  }
}
</script>

<style scoped>
* {box-sizing: border-box;}
label {
  float: left;
}
input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type=submit]:hover {
  background-color: #b8c7b9;
}
.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}
</style>
