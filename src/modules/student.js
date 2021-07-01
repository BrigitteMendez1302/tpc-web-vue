export default {
    namespaced: true,
    state:{
        menu: [
            {
                name: 'Talleres',
                push: '/student/workshops'
            },
            {
                name: 'Tutorias',
                push: '/student/tutorial'
            },
            {
                name: 'Reservas',
                push: '/student/lessons'
            },
            {
                name: 'Horarios',
                push: '/student/calendar'
            }
        ],
        cursosFecha: [
            {
                fecha: 'Lunes 13 de Junio',
                lessons: [
                    {
                        curso: 'Programacion I',
                        tutor: 'Rodrigo Uribe',
                        hora: '13:00 - 15:00',
                        tipo: 'Taller',
                        id: 1
                    },
                    {
                        curso: 'Programacion II',
                        tutor: 'Lucas Moreno',
                        hora: '15:00 - 17:00',
                        tipo: 'Taller',
                        id: 2
                    },
                    {
                        curso: 'Programacion I',
                        tutor: 'Rodrigo Uribe',
                        hora: '17:00 - 19:00',
                        tipo: 'Taller',
                        id: 3
                    },

                ]
            },
            {
                fecha: 'Martes 14 de Junio',
                lessons: [
                    {
                        curso: 'Programacion I',
                        tutor: 'Rodrigo Uribe',
                        hora: '13:00 - 15:00',
                        tipo: 'Taller',
                        id: 4
                    },
                    {
                        curso: 'Programacion II',
                        tutor: 'Josealdo Camogliano',
                        hora: '15:00 - 17:00',
                        tipo: 'Taller',
                        id: 5
                    },
                    {
                        curso: 'Programacion I',
                        tutor: 'Rodrigo Uribe',
                        hora: '17:00 - 19:00',
                        tipo: 'Tutoria',
                        id: 6
                    },

                ]
            }
        ],
        info: {}
    }
}