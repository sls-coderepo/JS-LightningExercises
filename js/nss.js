const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

let fullTimeInstructors = nashvilleSoftwareSchool.instructors.fullTime;
let partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime;

console.log(`Part Time Instructors: ${partTimeInstructors}`)
console.log(`Full Time Instructors: ${fullTimeInstructors}`)


console.log(`Fulltime Instructor: ${fullTimeInstructors[4]}`)
console.log(`Parttime Instructor: ${partTimeInstructors[0]}`)