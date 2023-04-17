"use strict";

const insertDepartment = document.querySelector(".department__container--list");
const StudyMaterialNotesList = document.querySelector(
  ".study_material_notes-list"
);
const unitHandler = document.querySelector(".study_material_unit-list");
const semesterHeading = document.querySelector(".semester-no");
const homeButton = document.querySelector("#home");
const aboutUsButton = document.querySelector("#about-us");
const sectionInformationContainer = document.querySelectorAll(
  ".section-container-info"
);
const semesterUnitContainer = document.querySelector(
  ".study_material_unit-container"
);
const semesterQpcontainer = document.querySelector(".semester-qn-container");
const section01 = document.querySelector("#section-01");
let previousSubject;
const sectionHeadingList = document.querySelector(".section-01-heading-list");
const studyMaterialUnitList = document.querySelector(
  ".study_material_unit-list"
);
const containerelement = document.querySelector(".container");
const departmentElement = document.querySelector(".department-modal-link");
console.log(departmentElement);
const containerBox1 = document.querySelector(".container--box");
const containerBox2 = document.querySelector(".container-02");
const departmentNameList = document.querySelector(".departmenti-name-list");
const deptHeading = document.querySelectorAll(".department-heading");
const departmentContainer = document.querySelector(
  ".department__container-department"
);
const courseContainer = document.querySelector(
  ".department__container-courses "
);
const semesterContainer = document.querySelector(
  ".department__container-semester"
);
const studyMaterialList = document.querySelector(".study_material-list");
const departmentLink = document.querySelector(".department-menu");
const semesterList = document.querySelector(".semester-list");
const engineeringCourseList = document.querySelector(".department-course-list");
let previousLink;
let currentsemester;
let previousUnit;
let previousCourse;
const departmentInVels = [
  "agriculture",
  "basic science",
  "computing sciences",
  "engineering",
  "hotel and catering management",
  "law",
  "martime studies",
  "mass communication",
  "music and fine art",
  "ocean engineering",
  "pharmaceutical science",
  "physiotherapy",
];
const course = [];
const EngineeringSemesterSubject = [];
const unSortedDepartment = departmentInVels.map((data) => {
  const upperCase = data.charAt(0).toUpperCase() + data.slice(1);
  return `School of ${upperCase}`;
});
console.log(unSortedDepartment);
const department = unSortedDepartment.sort();
department.forEach((val) => {
  const html = `
  <a href="#" class="department-name" data-id="${val.slice(10)}">${val}</a>
  `;
  departmentNameList.insertAdjacentHTML("beforeend", html);
});
homeButton.addEventListener("click", () => {
  section01.scrollIntoView({ behavior: "smooth" });
});
aboutUsButton.addEventListener("click", () => {});

const addUnactive = (Element) => {
  Element.classList.add("unactive");
};
departmentElement.addEventListener("mouseenter", () => {
  containerelement.classList.remove("unactive");
  containerelement.classList.add("active");
  departmentLink.style.color = "white";
});
departmentElement.addEventListener("mouseleave", () => {
  containerelement.classList.add("unactive");
  containerelement.classList.remove("active");
  courseContainer.classList.add("unactive");
  semesterContainer.classList.add("unactive");
  departmentLink.style.color = " #ced4da";
  addUnactive(containerBox2);
  removeunactive(containerBox1);
  if (StudyMaterialNotesList.children[0]) {
    removeAllChildNodes(StudyMaterialNotesList);
  }
  if (studyMaterialUnitList.children[0]) {
    removeAllChildNodes(studyMaterialUnitList);
  }
  if (previousCourse) {
    currentElementRendering(previousCourse, " #ced4da", "1.4rem", "600");
    previous.classList.remove("current-element-direction");
  }
  if (previousLink) {
    currentElementRendering(previousLink, " #ced4da", "3rem", 600);
    previousLink.classList.remove("current__link");
    previousLink.classList.remove("current-element-direction");
  }
  if (previous) {
    previous.classList.remove("current-element-direction");
    currentElementRendering(previous, " #ced4da", "1.5rem", "600");
  }
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  console.log(parent);
}
let previous;
const Engineering_course = [
  "B.E Automobile Engineering",
  "B.Tech Biotechnology Engineering",
  "B.E Civil Engineering",
  "B.E Electrical and Electronics Engineering",
  "B.E Electronics and Communication Engineering",
  "BE Mechanical Engineering",
  "B.E Computer Science and Engineering",
  "B.Tech Automation and Robotics ",
  "B.Tech Information Technology",
  "B.Tech CSE in Artificial Intelligence & Machine Learning",
  "B.Tech CSE in Data Science",
];
// course('Engineering':{Engineering})
const renderCourse = (course) => {
  course.forEach((course, i) => {
    const html = `<li> <a href="#" class="department-course-link"  data-id="${i}">${course}</a></li>`;
    engineeringCourseList.insertAdjacentHTML("beforeend", html);
  });
};
const removeunactive = (Element) => {
  Element.classList.remove("unactive");
};
const semester = [
  "I Semseter",
  "II Semseter",
  "III Semseter",
  "IV Semseter",
  "V Semseter",
  "VI Semseter",
  "VII Semseter",
  "VIII Semester",
];
const renderSemester = (semester) => {
  semester.forEach((sem, i) => {
    const html = `<li class="semester-link-container"><a href="#" class="semester-link" data-id=${
      i + 1
    }>${sem}</a></li>`;
    semesterList.insertAdjacentHTML("beforeend", html);
  });
};
const Engineering = {
  departmentName: "Engineering",
  Engineering_course,
  renderCourse,
  semester,
  renderSemester,
};
const AIMLSubject = [
  ["Chemistry", "Mathematics I", "Programming for Problem Solving"],
  [
    "English",
    "Physics",
    "Mathematics II",
    "Basic Electrical Engineering",
    "Engineering Graphics and Design",
    // "English Laboratory",
    // "Physics Laboratory",
    "Electrical Engineering Laboratory",
  ],
  [
    "Mathematics III",
    "Digital Electronics",
    "Operating Systems",
    "Data Structures and Algorithms",
    "Foundations of AI and ML",
    // "Operating Systems Lab",
    // "Data Structures and Algorithms Lab",
    "Personality Development I",
    "Basic Life Skills",
  ],
  [
    "Mathematics-IV",
    "Computer Organization and Architecture",
    "Database Management Systems",
    "Computer Networks",
    "Programming for AI & ML",
    // "Database Management Systems Lab",
    // "Computer Networks Lab",
    // "Personality Development II",
    // "Environmental Science and Engineering",
    // "Constitution of India",
  ],
  [
    "Java and Web Programming",
    "Mobile Application Development",
    "Professional Elective Course - I",
    "Open Elective Course - I",
    "Deep Learning and Predictive modelling",
    // "Java and Web Programming Lab",
    // "Mobile Application Development Lab",
    // "Personality Development III",
  ],
  [
    ".Net Programming",
    "Cognitive Learning",
    // ".Net Programming Lab",
    // "Cognitive Learning Lab",
    "Personality Development - IV",
  ],
  ["Full Stack Web Development", "Full Stack Web Development Lab"],
];
EngineeringSemesterSubject.push({ 9: AIMLSubject });
console.log(EngineeringSemesterSubject);
course.push(Engineering);
console.log(course);
const notes = ["syllabus", "Qn paper", "staff", "books"];
const currentElementRendering = (eTarget, color, fontSize, fontWeight) => {
  eTarget.style.color = `${color}`;
  eTarget.style.fontSize = `${fontSize}`;
  eTarget.style.fontWeight = `${fontWeight}`;
};
let previousSemester;
const totalUnit = [
  "Unit 1 Notes",
  "Unit 2 Notes",
  "Unit 3 Notes",
  "Unit 4 Notes",
  "Unit 5 Notes",
];
let previousHeadingList;
// = '<a class="current__link" data-no="1">History</a>';
sectionHeadingList.addEventListener("click", (e) => {
  if (previousHeadingList) {
    previousHeadingList.classList.remove("current__link");
    currentElementRendering(previousHeadingList, " #ced4da", "4rem", 600);
  }
  if (!e.target || e.target === sectionHeadingList) {
    return;
  }
  sectionInformationContainer.forEach((node) => {
    if (
      !node.classList.contains("unactive") &&
      e.target.dataset.no !== node.dataset.no
    ) {
      addUnactive(node);
    }
  });
  sectionInformationContainer.forEach((node) => {
    if (e.target.dataset.no === node.dataset.no) {
      removeunactive(node);
    }
  });
  console.log(e.target.dataset.no);
  e.target.classList.add("current__link");
  currentElementRendering(e.target, "white", "4.05rem", 600);
  previousHeadingList = e.target;
});
////
//
//

const renderUnitSubject = (e, subJectId) => {
  if (previousUnit) {
    currentElementRendering(previousUnit, " #ced4da", "2rem", "600");
    previousUnit.classList.remove("current-element-direction");
  }
  // if (studyMaterialUnitList.children[0]) {
  //   // removeAllChildNodes(studyMaterialUnitList);
  // }
  if (!e.target.classList.contains("unit-link") || !e.target) {
    return;
  }
  const unitId = e.target.dataset.unit;
  if (!unitId || !subJectId) {
    return;
  }
  89;
  e.target.href = `subjects/EngineeringSubject/${subJectId.replace(
    /[^a-zA-Z0-9 ]/g,
    ""
  )}/${unitId}.pdf`;
  e.target.classList.add("current-element-direction");

  previousUnit = e.target;
  // C:\Users\dell\Desktop\vels folder - Copy\subjects\EngineeringSubject\MathematicsIV\IV.pdf
};
// =--------------------------------------------------------------------------------------------------------------------//
// /

const semesterEvent = (e, val) => {
  addUnactive(semesterContainer);

  if (previousCourse) {
    currentElementRendering(previousCourse, "#ced4da", "1.4rem", "600");
    previousCourse.classList.remove("current-element-direction");
  }

  if (semesterList.children[0]) {
    removeAllChildNodes(semesterList);
  }
  console.log(e.target);
  if (
    !e.target ||
    e.target === courseContainer ||
    e.target === deptHeading[1] ||
    !e.target.classList.contains("department-course-link")
  ) {
    return;
  }
  const departmentId = e.target.dataset.id;
  // console.log(departmentId);
  removeunactive(semesterContainer);

  val.renderSemester(semester);
  e.target.classList.add("current-element");
  e.target.classList.add("current-element-direction");
  semesterContainer.addEventListener("click", (e) => {
    if (previousSemester) {
      currentElementRendering(previousSemester, "#ced4da", "1.5rem", "600");
      previousSemester.classList.remove("current-element-direction");
    }

    if (
      !e.target ||
      e.target === semesterContainer ||
      e.target === deptHeading[3] ||
      !e.target.classList.contains("semester-link")
    ) {
      return;
    }
    previousSemester = e.target;
    e.target.classList.add("current-element-direction");
    const id = e.target.dataset.id;
    EngineeringSemesterSubject.forEach((val) => {
      const objId = Object.keys(val);
      const [arr] = [...objId];

      if (departmentId === arr) {
        addUnactive(containerBox1);
        removeunactive(containerBox2);
        currentsemester = [id, val];
      }
    });

    console.log(e.target.dataset.id);

    currentElementRendering(e.target, "white", "1.5rem", "600");
  });

  currentElementRendering(e.target, "white", "1.55rem", "600");
  previousCourse = e.target;
};

// let previous;
departmentContainer.addEventListener("click", (e) => {
  addUnactive(courseContainer);
  addUnactive(semesterContainer);
  if (previous) {
    currentElementRendering(previous, " #ced4da", "1.5rem", "600");
    previous.classList.remove("current-element-direction");
  }
  if (engineeringCourseList.children[0]) {
    removeAllChildNodes(engineeringCourseList);
  }
  if (
    !e.target ||
    e.target === departmentContainer ||
    e.target === deptHeading[0] ||
    !e.target.classList.contains("department-name")
  ) {
    return;
  }

  const department = e.target.dataset.id;
  if (e.target.classList.contains("department-name")) {
    e.target.classList.add("current-element-direction");
  }
  currentElementRendering(e.target, "white", "1.55rem", "600");
  previous = e.target;
  course.forEach((val) => {
    if (department === val.departmentName) {
      val.renderCourse(Engineering_course);
      removeunactive(courseContainer);
      courseContainer.addEventListener("click", (e) => {
        semesterEvent(e, val);
      });
    }
  });
});
studyMaterialList.addEventListener("click", (e) => {
  if (StudyMaterialNotesList.children[0]) {
    removeAllChildNodes(StudyMaterialNotesList);
  }
  if (previousLink) {
    currentElementRendering(previousLink, " #ced4da", "3rem", 600);
    previousLink.classList.remove("current-element-direction");
  }
  if (
    !e.target ||
    e.target === studyMaterialList ||
    !e.target.classList.contains("study_material-link")
  ) {
    return;
  }

  const dataId = e.target.dataset.id;
  const [semesterId, courseName] = currentsemester;
  const { 9: SemseterSubjecwise } = courseName;

  // e.target.classList.add("current__link");
  if (studyMaterialUnitList.children[0]) {
    removeAllChildNodes(studyMaterialUnitList);
  }
  if (!semesterQpcontainer.classList.contains("unactive")) {
    addUnactive("unactive");
  }
  if (
    dataId === "Notes" ||
    dataId === "Syllabus" ||
    dataId === "Qn Papers" ||
    dataId == "Books"
  ) {
    removeunactive(semesterHeading);
    SemseterSubjecwise[semesterId - 1].forEach((sub) => {
      const html = `
    <li data-id=${sub.replace(/\s+/g, "")}>
      <div class="aligning" >
        <a href = "#" class="study_material-links subject_link" data-id=${sub.replace(
          /\s+/g,
          ""
        )} >${sub}</a>
        <span class="icons-container subject_link" data-id=${sub.replace(
          /\s+/g,
          ""
        )} >
                <svg
                  
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />              
                </svg>
          </span>
        </div>
     </li>
    `;

      StudyMaterialNotesList.insertAdjacentHTML("beforeend", html);
    });
  }

  console.log(e.target.dataset.id, "Notes");
  // const
  if (e.target.dataset.id === "Notes") {
    console.log("in notes");
    StudyMaterialNotesList.addEventListener("click", (e) => {
      if (previousSubject) {
        currentElementRendering(previousSubject, " #ced4da", "2rem", "600");
        previousSubject.classList.remove("current-element-direction");
      }
      if (studyMaterialUnitList.children[0]) {
        removeAllChildNodes(studyMaterialUnitList);
      }

      if (!e.target || e.target === StudyMaterialNotesList) {
        return;
      }
      const subJectId = e.target.dataset.id;
      console.log(subJectId);
      totalUnit.forEach((unit, i) => {
        const no = ["I", "II", "III", "IV", "V", "Iv"];
        const html = ` <li>
                        <a href="#" class="study_material-link unit-link" data-unit =${no[i]}>${unit}</a>
                      </li>`;

        studyMaterialUnitList.insertAdjacentHTML("beforeend", html);
      });
      removeunactive(semesterUnitContainer);

      unitHandler.addEventListener("click", (e) => {
        renderUnitSubject(e, subJectId);
        // ---------------------------------------------------------------------------------
      });

      currentElementRendering(e.target, "white", "2.05rem", "600");
      e.target.classList.add("current-element-direction");

      previousSubject = e.target;
    });
  }
  if (e.target.dataset.id === "Syllabus") {
    StudyMaterialNotesList.addEventListener("click", (e) => {
      // addUnactive(studyMaterialUnitList);
      console.log("in syllabus");
      if (previousSubject) {
        currentElementRendering(previousSubject, " #ced4da", "2rem", "600");
        previousSubject.classList.remove("current-element-direction");
      }
      if (!e.target || !e.target.classList.contains("subject_link")) {
        return;
      }
      const subJectId = e.target.dataset.id;
      console.log(subJectId);
      if (!subJectId) {
        return;
      }
      console.log(
        `Syllabus/EngineeringSyllabus/${subJectId.replace(
          /[^a-zA-Z0-9 ]/g,
          ""
        )}.pdf`
      );
      e.target.href = `Syllabus/EngineeringSyllabus/${subJectId.replace(
        /[^a-zA-Z0-9 ]/g,
        ""
      )}.pdf`;
      // C:\Users\dell\Desktop\vels folder - Copy\Syllabus\EngineeringSyllabus\ComputerNetworks.pdf
      currentElementRendering(e.target, "white", "2.05rem", "600");
      e.target.classList.add("current-element-direction");

      previousSubject = e.target;
    });
  }
  if (e.target.dataset.id === "Qn Papers") {
    StudyMaterialNotesList.addEventListener("click", (e) => {
      console.log("qn paper");
      if (previousSubject) {
        currentElementRendering(previousSubject, " #ced4da", "2rem", "600");
        previousSubject.classList.remove("current-element-direction");
      }
      if (!e.target || !e.target.classList.contains("subject_link")) {
        return;
      }
      const subJectId = e.target.dataset.id;
      console.log(subJectId);
      if (!subJectId) {
        return;
      }
      // removeunactive(semesterQpcontainer);
      currentElementRendering(e.target, "white", "2.05rem", "600");
      e.target.classList.add("current-element-direction");

      previousSubject = e.target;
    });
  }
  currentElementRendering(e.target, "white", "3.05rem", 600);
  e.target.classList.add("current-element-direction");

  previousLink = e.target;
});
const myString = "math-IV";

const newString = myString.replace(/[^a-zA-Z0-9 ]/g, "");

console.log("Original string: " + myString);
console.log("String with symbols removed: " + newString);
console.log("hello");
