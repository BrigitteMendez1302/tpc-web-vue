export default {
    namespaced: true,
    state:{
        menu: [
            {
                name: 'Tutorias',
                push: '/tutor/tutorial'
            },
            {
                name: 'Talleres',
                push: '/tutor/workshops'
            },
            {
                name: 'Rendimiento',
                push: '/tutor/performance'
            },
            {
                name: 'Horarios',
                push: '/tutor/calendar'
            }
        ],
        clasesFecha: [
            {
                fecha: 'Hoy',
                lessons: [
                    {
                        curso: 'Programacion I',
                        hora: '13:00 - 15:00',
                        tipo: 'Taller',
                        id: 1
                    },
                    {
                        curso: 'Programacion II',
                        hora: '15:00 - 17:00',
                        tipo: 'Taller',
                        id: 2
                    },
                    {
                        curso: 'Programacion I',
                        hora: '17:00 - 19:00',
                        tipo: 'Taller',
                        id: 3
                    },

                ]
            },
            {
                fecha: 'Mañana',
                lessons: [
                    {
                        curso: 'Programacion I',
                        hora: '13:00 - 15:00',
                        tipo: 'Taller',
                        id: 4
                    },
                    {
                        curso: 'Programacion II',
                        hora: '15:00 - 17:00',
                        tipo: 'Taller',
                        id: 5
                    },
                    {
                        curso: 'Programacion I',
                        hora: '17:00 - 19:00',
                        tipo: 'Tutoria',
                        id: 6
                    },

                ]
            }
        ],
        performance: [
            {
                tipo: 'Tutoria',
                calificaicon: '4.5'
            },
            {
                tipo: 'Talleres',
                calificaicon: '3.5'
            }
        ],
        info: {}
    }
}