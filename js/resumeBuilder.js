/*
* This is the main Java Script file containing all the JSON objects and
* code to display all the components of Resume.
*/

/*
 ***************************************************************
 **********************  bio   ********************************
 ***************************************************************
 */
var bio = {
    "name": "Sanjana Choudhary",
    "role": "Web Developer",
    "contacts": {
        "email": "jaiswal.sanjana31@gmail.com",
        "mobile": "5593922100",
        "twitter": "@JaiswalSanjana",
        "gitHub": "https://github.com/jaiswal.sanjana31",
        "location": "Clovis, CA"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "Welcome To the Awesome Resume",
    "skills": ["awesomeness", "Python", "HTML", "JS"]
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgitHub = HTMLgithub.replace("%data%", bio.contacts.gitHub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)

    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedPhone);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedgitHub);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedPhone);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedgitHub);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill of bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        }
    }
}

bio.display();
/*
 ***************************************************************
 **********************   Work  ********************************
 ***************************************************************
 */

var work = {
    "jobs": [{
            "employer": "H&R block",
            "title": "CSP",
            "location": "Clovis, CA",
            "dates": "dec 2016 - april 2017",
            "description": "Working on front desk. Taking care of clients, managing files and calling clients and making an appointments."
        },
        {
            "employer": "Self",
            "title": "Tutor",
            "location": "Clovis, CA",
            "dates": "Jan 2015 - Dec 2016",
            "description": "Helping kids with Maths and English."
        }
    ]
}

work.display = function() {
    if (work.jobs.length > 0) {
        for (workIndex in work.jobs) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[workIndex]["employer"]);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[workIndex]["title"]);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[workIndex]["location"]);
            var formattedWorkYears = HTMLworkDates.replace("%data%", work.jobs[workIndex]["dates"]);
            var formattedWorkDesc = HTMLworkDescription.replace("%data%", work.jobs[workIndex]["description"]);
            $('.work-entry:last').append(formattedEmployer + formattedWorkTitle);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedWorkYears);
            $('.work-entry:last').append(formattedWorkDesc);
        }
    }
}

work.display();
/*
 ***************************************************************
 **********************   Projects  ****************************
 ***************************************************************
 */
var projects = {
    "projects": [{
            "title": "my frist website",
            "dates": "27th Oct 2016",
            "description": "my first website using HTML, CSS",
            "images": ["images/portfolio1.png", "images/portfolio2.png"]
        },
        {
            "title": "code my own quiz",
            "dates": "30th Jan 2017",
            "description": "code my own quiz using PYTHON",
            "images": ["images/quiz.png"]
        }
    ]
}

projects.display = function() {

    if (projects.projects.length > 0) {
        for (projectIndex in projects.projects) {
            $('#projects').append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectIndex]["title"]);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projectIndex]["dates"]);
            var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[projectIndex]["description"]);
            $('.project-entry:last').append(formattedProjectTitle);
            $('.project-entry:last').append(formattedProjectDates);
            $('.project-entry:last').append(formattedProjectDesc);
            for (imageUrl of projects.projects[projectIndex]["images"]) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", imageUrl);
                $('.project-entry:last').append(formattedProjectImage);
            }
        }
    }
}
projects.display();

/*
 ***************************************************************
 **********************   Education ****************************
 ***************************************************************
 */

var education = {
    "schools": [{
            "name": "RPS College Patna",
            "location": "Patna, India",
            "degree": "Bachelor of Arts",
            "majors": "Psychology",
            "dates": "Sep 2003 - April 2008",
            "url": "https://www.facebook.com/R-P-S-CollegeChakeyajVaishali-1620614534844564/"
        },
        {
            "name": "RPS College Patna",
            "location": "Patna, India",
            "degree": "12th",
            "majors": "Science",
            "dates": "Aug 2000 - June 2002",
            "url": "https://www.facebook.com/R-P-S-CollegeChakeyajVaishali-1620614534844564/"
        }
    ],

    "onlineCourses": [{
        "title": "Udacity Nano Degree - Introduction to Programming",
        "school": "Udacity",
        "dates": "Oct 2007 - March 2017",
        "url": "https://www.udacity.com/"
    }]
};
education.display = function() {
    if (education.schools.length > 0) {
        for (school of education.schools) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", school.majors);

            $('.education-entry:last').append(formattedSchoolName);
            $('.education-entry:last').append(formattedSchoolDegree);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolLocation);
            $('.education-entry:last').append(formattedSchoolMajors);
        }
    }
    if (education.schools.length > 0) {
        for (onlineCourse of education.onlineCourses) {
            $('#education').append(HTMLonlineClasses);
            $('#education').append(HTMLschoolStart);
            var formattedCourseTille = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", onlineCourse.url);
            var formattedOnlineUrl = formattedOnlineUrl.replace("#", onlineCourse.url);

            $('.education-entry:last').append(formattedCourseTille);
            $('.education-entry:last').append(formattedOnlineSchool);
            $('.education-entry:last').append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineUrl);
        }
    }
}
education.display();

// Display the Google map with location pins for places of work, projects and
// Education

$("#mapDiv").append(googleMap);
