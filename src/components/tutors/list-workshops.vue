<template>
  <div>
    <v-list subheader>
      <h1>Mis talleres</h1>
<!--      <v-subheader class="subtitle-1" >Lunes 14 de Junio</v-subheader>-->
    </v-list>

<!--    <v-divider></v-divider>-->

    <v-list subheader>
<!--      <v-subheader class="subtitle-1">Martes 15 de Junio</v-subheader>-->
      <v-list-item class=" ma-3 content"
                   v-for="lesson in lessons"
                   :key="lesson.id"
      >
        <v-list-item-content>
          <v-list-item-title class="m-list-item-title">{{lesson.course.name}}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
          <v-list-item-title class="m-list-item-title" >{{formatAMPM(lesson.startDate)}}</v-list-item-title>
        </v-list-item-content>
        <!--        v-text="chat.title"-->
        <v-list-item-content>
          <div>
            <v-btn class="ml-percent" color="white" @click="navigateToSeeWorkshop(lesson.id)">Ver mas</v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import LessonApiService from '../../services/lesson-api.service'
export default {
  name: "listWorkshops",
  data: function() {
    return {
      lessons: [],
      displayLessons: [],
      week:[],
    }
  },
    async created() {
      this.week = this.getWeek(new Date());
      try{
        let start = this.formatDateIsoDate(this.week[0]);
        let end = this.formatDateIsoDate(this.week[6]);
        let id = this.$route.params.id;
        let response = await LessonApiService.getWorkshopsList(start,
            end, id, 1)
        this.lessons = response.data
      }
      catch (e) {
        alert("No hay talleres programados para esta semana")
        this.$router.push('/')
      }
  },
  methods:{
    formatAMPM(isoDate) {
      let date = new Date(isoDate)
      let days = date.getDay();
      let strDays = this.formatDaySpanish(days-1);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let ampm = hours >= 12 ? ' pm ' : ' am ';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let strTime = strDays + hours + ':' + minutes + ' ' + ampm;
      return strTime;
  },
    formatDaySpanish(num){
      var weekday=["Lunes ", "Martes ", "Miércoles ", "Jueves ", "Viernes ", "Sábado ", "Domingo "]
      return weekday[num];
    },
    formatDateIsoDate(paramDate){
      let date = new Date(paramDate);
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = '0' + dt;
      }
      if (month < 10) {
        month = '0' + month;
      }
      return year+'-' + month + '-'+dt
    },
    navigateToSeeWorkshop(id) {
      this.$router.push({name: 'see-specific-workshop', params: { workshopId: id}});
    },
    getWeek(fromDate){
      let sunday = new Date(fromDate.setDate(fromDate.getDate()-fromDate.getDay()))
          ,result = [new Date(sunday).toISOString()];
      while (sunday.setDate(sunday.getDate()+1) && sunday.getDay()!==0) {
        result.push(new Date(sunday).toISOString());
      }
      return result;
    },
}
}

</script>

<style scoped>

.f-end{
  align-content: flex-end;
  justify-content: flex-start;
}
.m-list-item-title{
  font-size: 15px;
}
h1{
  font-size: 20px;
  margin-top: 1em;
  margin-left: .7em;
}
.content{
  background-color: #F3F9FA;
  /*border: 5px solid red;*/
  border-radius: .3em;
}
.ml-percent{
  margin-left: 25%;
  min-width: 60px;
  height: 30px !important;
  color: #1282A2;
  border: 1px solid #1282A2 !important;
}
@media screen and (max-width: 500px) {
  .ml-percent{
    margin-left: 0%;
  }
}
</style>