import {db} from "../firebase-config";
import {
    collection,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "./firebase-services";

const courseCollectionRef = collection(db,"courses")

class CourseDataService {
  
    // Add new Course
    addCourses = (newCourse) => {
        return addDoc(courseCollectionRef,newCourse)
    }

}

export default new CourseDataService();
