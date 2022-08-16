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

  // Delete Course
  deleteCourse = (id) => {
    const courseDoc = doc(db, "courses", id);
    return deleteDoc(courseDoc);
  };

  // Get all Courses
  getAllCourses = () => {
    return getDocs(courseCollectionRef);
  };

  // Get Course by Id
  getCourse = (id) => {
    const courseDoc = doc(db, "courses", id);
    return getDoc(courseDoc);
  };
}

export default new CourseDataService();
