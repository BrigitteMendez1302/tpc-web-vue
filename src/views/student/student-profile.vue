<template>

  <v-card class="profile">

    <v-container class="my-profile">
      <nav id="my">Mi Perfil</nav>
      <v-spacer class="divide"></v-spacer>

      <div id="div-profile">
        <v-card class="profilecard" color="rgba(3,64,120,0.19)">

          <div id="image-div">
            <v-img src="https://avatarfiles.alphacoders.com/152/152179.png" class="img"></v-img>
          </div>

          <div id="title-name-div">
            <v-card-title id="name"><b>{{user.firstName +" "+ user.lastName}}</b></v-card-title>
          </div>

          <div id="info">
            <v-card-text class="data-info">Codigo:
              <v-card-text class="data-info">{{user.id}}</v-card-text>
            </v-card-text>
            <v-spacer class="space"></v-spacer>
            <v-card-text class="data-info">Correo Electronico:
              <v-card-text class="data-info"> {{user.mail}}</v-card-text>
            </v-card-text>
            <v-spacer class="space"></v-spacer>
            <v-card-text class="data-info">Carrera:
              <v-card-text class="data-info">{{user.career.careerName}}</v-card-text>
            </v-card-text>
            <v-spacer class="space"></v-spacer>
            <v-card-text class="data-info">Ciclo:
              <v-card-text class="data-info">{{user.cycleNumber}}</v-card-text>
            </v-card-text>

          </div>

        </v-card>
      </div>

    </v-container>

  </v-card>


</template>

<script>
import TpcApiService from "@/services/tpc-api.service";

export default {
  name: "student-profile",
  components: {},
  data: function () {
    return {
      user: {}
    }
  },
  async beforeCreate() {
    try {
      let id = this.$route.params.id
      let response1 = await TpcApiService.getStudentById(id)
      this.user = response1.data

    } catch (e) {
      alert("Student not found")
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

* {
  font-family: "Roboto", sans-serif;
}

.profile {
  display: flex;
  height: 100%;
  width: 100%;
}

.divide {
  height: 10px;
}

.my-profile {
  height: 550px;
  width: 80%;
}

#my{
  display: flex;
  justify-content: center; /*centra horizontal*/

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
}

#div-profile {
  display: flex;
  justify-content: center; /*centra horizontal*/
  align-items: center;
  height: 480px;
  width: 100%;
}

.profilecard {
  width: 400px;
  height: 470px;
  border-radius: 25px;
}

#image-div {
  margin-top: 30px;
  width: 100%;
  height: 150px;
  border-radius: 0px;

  display: flex;
  justify-content: center; /*centra horizontal*/
  align-items: center;
}

.img {
  max-height: 150px;
  max-width: 150px;
}

#title-name-div {
  display: flex;
}

#name {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-left: 20px;
}

#info {
  margin-left: 20px;

  height: 250px;
}

.data-info {
  margin-top: -15px;

  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;

  color: black;
}

.space {
  margin-top: -40px;
}


</style>