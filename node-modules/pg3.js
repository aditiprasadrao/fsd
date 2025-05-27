const student = {
  name: "John Doe",
  grade: 85,
  subjects: ["Maths", "Science", "English"],
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Grade: ${this.grade}`);
    console.log(`Subjects: ${this.subjects.join(", ")}`);
  }
};

// Determine pass/fail status
student.passed = student.grade >= 50;

// Display all non-function properties
for (let key in student) {
  if (typeof student[key] !== 'function') {
    console.log(`${key}: ${student[key]}`);
  }
}
