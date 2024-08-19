// to initiate any project on node js first start with "npm init"
// then create a new file called "index.js" from the package








// Step 1: Initialize an array of grades
let grades = [85, 92, 78, 88, 90, 67, 95];

// Display the initial grades
console.log('Initial Grades:', grades);

// Step 2: Add and Remove Grades
// Add a grade to the end of the array
grades.push(82);
console.log('After push:', grades);

// Remove the last grade from the array
grades.pop();
console.log('After pop:', grades);

// Add a grade to the beginning of the array
grades.unshift(75);
console.log('After unshift:', grades);

// Remove the first grade from the array
grades.shift();
console.log('After shift:', grades);

// Step 3: Modify the Array
// Insert and remove elements at specific positions
grades.splice(2, 1, 85); // Remove 1 element at index 2, insert 85
console.log('After splice:', grades);

// Create a new array containing a portion of the original array
let gradesSlice = grades.slice(1, 4);
console.log('Grades slice (1, 4):', gradesSlice);

// Step 4: Combine and Split Arrays
// Merge two arrays of grades
let newGrades = [77, 89];
let combinedGrades = grades.concat(newGrades);
console.log('After concat:', combinedGrades);

// Create a string from the array of grades, separated by commas
let gradesString = combinedGrades.join(', ');
console.log('Grades as string:', gradesString);

// Step 5: Reverse and Sort Grades
// Reverse the order of grades
combinedGrades.reverse();
console.log('After reverse:', combinedGrades);

// Sort the grades in ascending order
combinedGrades.sort((a, b) => a - b);
console.log('After sort:', combinedGrades);

// Step 6: Iterate and Transform Grades
// Print each grade
combinedGrades.forEach(grade => console.log('Grade:', grade));

// Create a new array of grades, each increased by 5 points
let increasedGrades = combinedGrades.map(grade => grade + 5);
console.log('Grades increased by 5:', increasedGrades);

// Step 7: Filter and Analyze Grades
// Create an array of passing grades (above 70)
let passingGrades = combinedGrades.filter(grade => grade > 70);
console.log('Passing grades:', passingGrades);

// Calculate the total sum of grades
let totalSum = combinedGrades.reduce((total, grade) => total + grade, 0);
console.log('Total sum of grades:', totalSum);

// Locate the first grade that is exactly 88
let grade88 = combinedGrades.find(grade => grade === 88);
console.log('First grade that is 88:', grade88);

// Find the index of the first grade that is below 70
let indexBelow70 = combinedGrades.findIndex(grade => grade < 70);
console.log('Index of first grade below 70:', indexBelow70);

// Check if any grade is below 60
let anyBelow60 = combinedGrades.some(grade => grade < 60);
console.log('Any grade below 60:', anyBelow60);

// Check if all grades are above 50
let allAbove50 = combinedGrades.every(grade => grade > 50);
console.log('All grades above 50:', allAbove50);

// Check if a specific grade exists in the array
let includesGrade85 = combinedGrades.includes(85);
console.log('Includes grade 85:', includesGrade85);
