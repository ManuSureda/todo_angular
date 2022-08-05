import { Injectable } from '@angular/core';
import { Student } from '../models/student';

// le indica a la app q se tiene que proveer en la raiz del proyecto y estar disponible para toda la app
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentList = new Array<Student>();
  private studentId = 0;

  constructor() { }

  add(student: Student){
    this.studentId++;
    student.studentId = this.studentId;
    this.studentList.push(student);
  }

  getAll(){
    return this.studentList;
  }

  getById(studentId: number){
    let students = this.studentList.filter(student => {
      return student.studentId == studentId;
    });

    return (students.length > 0) ? students[0] : null;
  }  
}