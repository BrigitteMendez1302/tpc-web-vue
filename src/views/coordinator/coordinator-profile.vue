<template>
  <v-card class="profile">

    <v-container class="my-profile">
      <nav id="my">Mi Perfil</nav>
      <v-spacer class="separate"></v-spacer>

      <div id="div-profile">

        <v-card class="profilecard" color="rgba(3,64,120,0.19)" >
          <div id="image-div">
            <v-img src="https://campusdata.uark.edu/resources/images/articles/2017-09-26_02-35-12-PMcochran500edited-2.jpg" class="img"></v-img>
          </div>

          <v-spacer class="divider-img-name"></v-spacer>

          <div id="title-name-div">
            <v-card-title id="name"><b>{{user.firstName +" "+ user.lastName}}</b></v-card-title>
            <v-spacer class="divider-img-name-reset"></v-spacer>
            <v-card-title class="personal-info-title">Informacion de contacto</v-card-title>
          </div>

          <div id="info">
            <v-card-text class="data-info">Cargo: Docente</v-card-text>
            <v-spacer class="space"></v-spacer>
            <v-card-text class="data-info">Universidad: {{user.account.university.universityName}}</v-card-text>
            <v-spacer class="space"></v-spacer>
            <v-card-text class="data-info">Facutad: {{user.faculty.name}}</v-card-text>
            <v-spacer class="space"></v-spacer>
            <v-card-text class="data-info">Correo Electronico: {{user.mail}}</v-card-text>
          </div>

          <div class="div-button">
            <v-btn class="edit-profile">Editar Perfil</v-btn>
          </div>

        </v-card>

        <v-card class="coursescard" color="rgba(3,64,120,0.19)" >
          <v-card-title class="title-courses-card">Cursos</v-card-title>
          <v-list color="rgba(3,64,120,0.0)"
                  v-for="course in courses"
                  :key="course.id">
            <v-list-item class="course">{{course.name}}</v-list-item>
          </v-list>
        </v-card>

      </div>

    </v-container>

  </v-card>

</template>

<script>
import TpcApiService from "@/services/tpc-api.service";

export default {
  name: "coordinator-profile",
  data: function () {
    return {
      user: {},
      courses: []
    }
  },
  async beforeCreate() {
    try {
      let id = this.$route.params.id
      let response1 = await TpcApiService.getCoordinatorById(id)
      this.user = response1.data

      let response2 = await TpcApiService.getUserCoursesById(id)
      this.courses = response2.data

    } catch (e) {
      alert("Tutor not found")
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

.separate {
  height: 10px;
}

.my-profile {
  height: 550px;
  width: 80%;
}

#my{
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  padding-left: 65px;
}

.divider-img-name {
  height: 10px;
}
.divider-img-name-reset {
  margin-top: -20px;
}

#image-div {
  margin-top: 30px;
  width: 100%;
  height: 120px;

  display: flex;
  justify-content: center; /*centra horizontal*/
}

.img {
  max-height: 150px;
  max-width: 150px;
}

#div-profile {
  display: flex;
  justify-content: space-around;
  height: 450px;
  width: 100%;
}

.profilecard {
  width: 400px;
  height: 480px;
}

.img {
  max-height: 150px;
  max-width: 150px;
}

.coursescard {
  height: 480px;
  width: 400px;
  background: rgba(3,64,120,0.32);
}


#name {
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  margin-left: 20px;
}

.personal-info-title {
  font-family: Source Sans Pro;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  margin-left: 20px;
}

#info {
  margin-left: 20px;
  height: 140px;
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

.title-courses-card {
  margin-left: 20px;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  margin-top: 20px;
}

.course {
  margin-left: 40px;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
}

.div-button {
  display: flex;
  margin-top: 23px;
  justify-content: center; /*centra horizontal*/
}

.edit-profile {
  font-family: Roboto;
  font-size: 15px;
  text-align: center;
  height: 30px;
}
</style>