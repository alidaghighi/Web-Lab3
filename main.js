import { fetchStudents } from './database.js';


fetchStudents((students_data) => {
    console.log(students_data);
});