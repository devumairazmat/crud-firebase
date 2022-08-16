import { db } from "../firebase-config";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "./firebase-services";

const courseCollectionRef = collection(db, "courses");

class CourseDataService {
  // Add new Course
  addCourses = (newCourse) => {
    return addDoc(courseCollectionRef, newCourse);
  };

  // Update Course
  updateCourse = (id, updateCourse) => {
    const courseDoc = doc(db, "courses", id);
    return updateDoc(courseDoc, updateCourse);
  };

  
}

export default new CourseDataService();
