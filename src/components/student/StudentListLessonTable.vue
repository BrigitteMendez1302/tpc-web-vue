<template>
  <v-row>
    <v-container v-for="(item, index) in filterLessons" :key="index">
      <v-row>
        <h2>{{item.fecha}}</h2>
      </v-row>
      <v-row>
        <v-container>
          <v-row  v-for="(lesson, index) in item.lessons" :key="index" class="data-row">
              <v-col class="data-col" align="center">{{ lesson.curso }}</v-col>
              <v-col class="data-col" align="center">{{ lesson.tutor }}</v-col>
              <v-col class="data-col" align="center">{{ lesson.hora }}</v-col>
              <v-col v-if="tipoVisible === true" class="data-col" align="center">{{ lesson.tipo }}</v-col>
              <v-col v-if="link.length" class="data-col" align="center">
                <v-btn class="" outlined color="indigo" @click="$emit('openDialog')">
                  Detalle
                </v-btn>
              </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </v-row>
</template>

<script>
export default {
  name: "StudentListLessonTable",

  props: {
    cursos:{
      type: Array,
      required: true
    },
    tipoVisible: {
      type: Boolean,
      required: false,
      default: false
    },
    tipo: {
      type: String,
      required: false,
      default: 'Todos'
    },
    curso: {
      type: String,
      required: false,
      default: 'Todos'
    },
    tutor: {
      type: String,
      required: false,
      default: 'Todos'
    },
    link: {
      type: Array,
      required: true
    }
  },
  data : () => {
    return {
    }
  },
  computed: {
    filterLessons()
    {
      console.log(this.link)
      return this.cursos.map((curso) =>
      {
        return {...curso, lessons: curso.lessons.filter((lesson) => {
            return  (lesson.tipo === this.tipo || this.tipo === 'Todos') &&
                    (lesson.tutor === this.tutor || this.tutor === 'Todos') &&
                    (lesson.curso === this.curso || this.curso === 'Todos')
          })}
      })
    }
  }
}
</script>

<style scoped>
.data-row
{
  padding: 5px 0;
  background-color: #F3F9FA;
  border-radius: 20px;
  margin-bottom: 15px;
}
.data-col
{
  margin: auto 0;
}
</style>