import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//For inputting new course:
//this is the template
/*
  courses:[
    {
      //this is for the name of the course
      id: int,
      name: string
      Obj: [
        //this is for the sem and year
        {
        id: int,
        year: string,
        sem: string,
        subjects: [
            {
              //this is for the sem and year subjects
              sub: string, units: int, grades: float
            }
          ]
        }
      ]
    }
  ]
*/


export default new Vuex.Store({
  state: {
    courses: [
      //BSCpE
      {
        "id": 1,
        "name": 'BS in Computer Engineering',
        "nname": 'BSCpE',
        "dept": 'Engineering',
        'yearAndSemCount': 7,  
        "Obj": [
          {
            "id": 1,
            "year": '1ST',
            "sem": '1ST',
            "subjects": [
                    {"sub":'Differential Calculus', "units": 3, "grades": ''},  
                    {"sub":'Programming Logics and Design', "units": 2, "grades": ''},
                    {"sub":'Math in the Modern World', "units": 3, "grades": ''},
                    {"sub":'Chemistry for Engineers', "units": 4, "grades": ''},  
                    {"sub":'Computer Eng\'g as a Discipline', "units": 1, "grades": ''},
                    {"sub":'Science Technology and Society', "units": 3, "grades": ''},
                    {"sub":'Understanding the Self', "units": 3, "grades": ''},  
                    {"sub":'Physical Education 1', "units": 2, "grades": ''},
            ]
            },
            {
            id: 2,
            year: '1ST',
            sem: '2ND',
            subjects: [
                    {sub:'Object Oriented Programming', units: 2, grades: ''},  
                    {sub:'Physics for Engineers', units: 4, grades: ''},
                    {sub:'Integral Calculus', units: 3, grades: ''},
                    {sub:'Filipino 1', units: 3, grades: ''},  
                    {sub:'Discrete Mathematics', units: 3, grades: ''},
                    {sub:'Engineering Data Analysis', units: 3, grades: ''},
                    {sub:'Physical Education 2', units: 2, grades: ''},  
            ]
            },
            {
            id: 3,
            year: '2ND',
            sem: '1ST',
            subjects: [
                    {sub:'Differential Equations', units: 3, grades: ''},  
                    {sub:'Arts Appreciation', units: 3, grades: ''},
                    {sub:'Filipino 2', units: 3, grades: ''},
                    {sub:'Data Structures and Algorithms', units: 2, grades: ''},  
                    {sub:'Engineering Economics', units: 3, grades: ''},
                    {sub:'Fundamentals of Electrical Circuit', units: 4, grades: ''},
                    {sub:'Physical Education 3', units: 2, grades: ''},  
                    {sub:'Computer Aided Drafting', units: 1, grades: ''},
                    {sub:'Readings in the Philippine History', units: 3, grades: ''}
            ]
            },
            {
            id: 4,
            year: '2ND',
            sem: '2ND',
            subjects: [
                    {sub:'Fundamentals of Electronics Circuit', units: 4, grades: ''},  
                    {sub:'Ethics', units: 3, grades: ''},
                    {sub:'The Contemporary World', units: 3, grades: ''},
                    {sub:'Life and Works of Rizal', units: 3, grades: ''},  
                    {sub:'Software Design', units: 4, grades: ''},
                    {sub:'Numerical Methods', units: 3, grades: ''},
                    {sub:'Physical Education 4', units: 2,grades: ''},  
                    {sub:'Purposive Communication', units: 3, grades: ''}
            ]
            },
            {
            id: 5,
            year: '3RD',
            sem: '1ST',
            subjects: [
                    {sub:'Introduction to HDL', units: 1, grades: ''},  
                    {sub:'Computer Engg Drafting and Design', units: 1, grades: ''},
                    {sub:'The Entrepreneurial Mind', units: 3, grades: ''},
                    {sub:'Cognate/Elective Course 1', units: 3, grades: ''},  
                    {sub:'Logic Circuit and Design', units: 4, grades: ''},
                    {sub:'Feedbacks and Control System', units: 3, grades: ''},
                    {sub:'Operating Systems', units: 3,grades: ''},  
                    {sub:'Data and Digital Communication', units: 3, grades: ''},
                    {sub:'Fundamental of Mixed Signals and Sensor', units: 3, grades: ''}
            ]
            },
            {
            id: 6,
            year: '3RD',
            sem: '2ND',
            subjects: [
                    {sub:'Technopreneurship 101', units: 3, grades: ''},  
                    {sub:'Basic Occupational Safety and Health', units: 3, grades: ''},
                    {sub:'Computer Network and Security', units: 4, grades: ''},
                    {sub:'Microprocessors', units: 4, grades: ''},  
                    {sub:'Methods of Research', units: 3, grades: ''},
                    {sub:'CpE Laws and Professional Practice', units: 2, grades: ''},
                    {sub:'Cognate/Elective Course 2', units: 3,grades: ''},  
            ]
            },
            {
              id: 7,
              year: '4TH',
              sem: '1ST',
              subjects: [
                      {sub:'Embedded System', units: 4, grades: ''},  
                      {sub:'Computer Architecture and Organization', units: 4, grades: ''},
                      {sub:'Emerging Technologies in CpE', units: 3, grades: ''},
                      {sub:'CpE Practice and Design 1', units: 1, grades: ''},  
                      {sub:'Digital Signal Processing', units: 4, grades: ''},
                      {sub:'Elective Course', units: 3, grades: ''}
              ]
              }
            ]
      },
      //BSIS
      {
        "id": 2,
        "name": 'BS in Information System',
        "nname": 'BSIS',
        "dept": 'CSD',
        'yearAndSemCount': 4,  
        "Obj": [
          {
            "id": 1,
            "year": '1ST',
            "sem": '1ST',
            "subjects": [
                    {"sub":'Differential Calculus', "units": 3, "grades": ''},  
                    {"sub":'Programming Logics and Design', "units": 2, "grades": ''},
                    {"sub":'Math in the Modern World', "units": 3, "grades": ''},
                    {"sub":'Chemistry for Engineers', "units": 4, "grades": ''},  
                    {"sub":'Computer Eng\'g as a Discipline', "units": 1, "grades": ''},
                    {"sub":'Science Technology and Society', "units": 3, "grades": ''},
                    {"sub":'Understanding the Self', "units": 3, "grades": ''},  
                    {"sub":'Physical Education 1', "units": 2, "grades": ''},
            ]
            },
            {
            id: 2,
            year: '1ST',
            sem: '2ND',
            subjects: [
                    {sub:'Object Oriented Programming', units: 2, grades: ''},  
                    {sub:'Physics for Engineers', units: 4, grades: ''},
                    {sub:'Integral Calculus', units: 3, grades: ''},
                    {sub:'Filipino 1', units: 3, grades: ''},  
                    {sub:'Discrete Mathematics', units: 3, grades: ''},
                    {sub:'Engineering Data Analysis', units: 3, grades: ''},
                    {sub:'Physical Education 2', units: 2, grades: ''},  
            ]
            },
            {
            id: 3,
            year: '2ND',
            sem: '1ST',
            subjects: [
                    {sub:'Differential Equations', units: 3, grades: ''},  
                    {sub:'Arts Appreciation', units: 3, grades: ''},
                    {sub:'Filipino 2', units: 3, grades: ''},
                    {sub:'Data Structures and Algorithms', units: 2, grades: ''},  
                    {sub:'Engineering Economics', units: 3, grades: ''},
                    {sub:'Fundamentals of Electrical Circuit', units: 4, grades: ''},
                    {sub:'Physical Education 3', units: 2, grades: ''},  
                    {sub:'Computer Aided Drafting', units: 1, grades: ''},
                    {sub:'Readings in the Philippine History', units: 3, grades: ''}
            ]
            },
            {
            id: 4,
            year: '2ND',
            sem: '2ND',
            subjects: [
                    {sub:'Fundamentals of Electronics Circuit', units: 4, grades: ''},  
                    {sub:'Ethics', units: 3, grades: ''},
                    {sub:'The Contemporary World', units: 3, grades: ''},
                    {sub:'Life and Works of Rizal', units: 3, grades: ''},  
                    {sub:'Software Design', units: 4, grades: ''},
                    {sub:'Numerical Methods', units: 3, grades: ''},
                    {sub:'Physical Education 4', units: 2,grades: ''},  
                    {sub:'Purposive Communication', units: 3, grades: ''}
            ]
            },
            {
            id: 5,
            year: '3RD',
            sem: '1ST',
            subjects: [
                    {sub:'Introduction to HDL', units: 1, grades: ''},  
                    {sub:'Computer Engg Drafting and Design', units: 1, grades: ''},
                    {sub:'The Entrepreneurial Mind', units: 3, grades: ''},
                    {sub:'Cognate/Elective Course 1', units: 3, grades: ''},  
                    {sub:'Logic Circuit and Design', units: 4, grades: ''},
                    {sub:'Feedbacks and Control System', units: 3, grades: ''},
                    {sub:'Operating Systems', units: 3,grades: ''},  
                    {sub:'Data and Digital Communication', units: 3, grades: ''},
                    {sub:'Fundamental of Mixed Signals and Sensor', units: 3, grades: ''}
            ]
            },
            {
            id: 6,
            year: '3RD',
            sem: '2ND',
            subjects: [
                    {sub:'Technopreneurship 101', units: 3, grades: ''},  
                    {sub:'Basic Occupational Safety and Health', units: 3, grades: ''},
                    {sub:'Computer Network and Security', units: 4, grades: ''},
                    {sub:'Microprocessors', units: 4, grades: ''},  
                    {sub:'Methods of Research', units: 3, grades: ''},
                    {sub:'CpE Laws and Professional Practice', units: 2, grades: ''},
                    {sub:'Cognate/Elective Course 2', units: 3, grades: ''},  
            ]
            },
            {
              id: 7,
              year: '4TH',
              sem: '1ST',
              subjects: [
                      {sub:'Embedded System', units: 4, grades: ''},  
                      {sub:'Computer Architecture and Organization', units: 4, grades: ''},
                      {sub:'Emerging Technologies in CpE', units: 3, grades: ''},
                      {sub:'CpE Practice and Design 1', units: 1, grades: ''},  
                      {sub:'Digital Signal Processing', units: 4, grades: ''},
                      {sub:'Elective Course', units: 3, grades: ''}
              ]
              }
            ]
      }
      ]
  },
  
  getters: {
    courses: state => {
      return state.courses;
    },
    findCourse: state => name => {
      return state.courses.find(course => course.name == name);
    },
    findSemYear: state => (id, names) => {
      return state.courses.find(course => course.name == names).Obj.find(obj => obj.id == id);
    }
  }
})
