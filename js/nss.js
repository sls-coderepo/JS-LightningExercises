const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

for (let i = 0; i < nashvilleSoftwareSchool.instructors.partTime.length; i++){
    console.log(`PartTime Instructors: ${nashvilleSoftwareSchool.instructors.partTime[i]}`)
}

for (let i = 0; i < nashvilleSoftwareSchool.instructors.fullTime.length; i++){
    console.log(`FullTime Instructors: ${nashvilleSoftwareSchool.instructors.fullTime[i]}`)
}

console.log(`Fulltime Instructor: ${nashvilleSoftwareSchool.instructors.fullTime[4]}`)
console.log(`Parttime Instructor: ${nashvilleSoftwareSchool.instructors.partTime[0]}`)