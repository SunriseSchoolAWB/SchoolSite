const courses = ['PG', 'NR', 'LKG', 'UKG', '1', '2', '3', '4', '5'];
const course_info = {
    'PG': {'name':'Playclass', 'age': '2-3', 'color1': '#4C6D93', 'color2':'#C8DEE5'},
    'NR': {'name':'Nursery', 'age': '3-4', 'color1': '#846446', 'color2':'#E7D6C7'},
    'UKG': {'name':'Upper Kindergarten', 'age': '5-6', 'color1': '#4A8069', 'color2':'#CEE8E3'},
    'LKG': {'name':'Lower Kindergarten', 'age': '4-5', 'color1': '#7C447D', 'color2':'#EBD5EC'},
    '1': {'name':'1', 'age': '6-7', 'color1': '#1F446E', 'color2':'#B6D0ED'},
    '2': {'name':'2', 'age': '7-8', 'color1': '#79413E', 'color2':'#E9D2D0'},
    '3': {'name':'3', 'age': '8-9', 'color1': '#574C9A', 'color2':'#E0DBFF'},
    '4': {'name':'4', 'age': '9-10', 'color1': '#C24F21', 'color2':'#FECACA'},
    '5': {'name':'5', 'age': '10-11', 'color1': '#2C6C1E', 'color2':'#B9D6B4'}
};
var month_list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function selectCourse(dir){
    clearInterval(next_course_interval_id);
    var current_course = document.getElementById("course-current-card");
    var current_course_name = current_course.getAttribute('name');
    var current_course_index = courses.indexOf(current_course_name);
    var next_course_index = (courses.length + (current_course_index + dir)) % (courses.length); 
    var next_course = courses[next_course_index];
    current_course.setAttribute('name', next_course);
    current_course.innerHTML = '<p>'+next_course+'</p>';
    document.getElementById("course-current-class").innerText = course_info[next_course]["name"];
    document.getElementById("course-current-age").innerText = course_info[next_course]["age"];
    document.getElementById("course-current-card").style.setProperty('border-color', course_info[next_course]["color1"]);
    document.getElementById("path902").style.setProperty('stroke', course_info[next_course]["color1"]);
    document.getElementById("path901").style.setProperty('stroke', course_info[next_course]["color1"]);
    document.getElementById("course-current-card").getElementsByTagName("p")[0].style.setProperty('color', course_info[next_course]["color1"]);
    var course_upper_card = document.querySelector(".courses-box .course-upper-card");
    course_upper_card.style.setProperty('background-image', 'linear-gradient(to left, '+course_info[next_course]["color2"]+' 50%, '+course_info[current_course_name]["color2"]+' 50%)');
    course_upper_card.style.setProperty('transition','background-position 0.5s ease-out');
    course_upper_card.style.setProperty('background-position-x', (dir*100).toString()+'%');
    next_course_interval_id = setInterval(function(){
        document.getElementById("course-card-right-button").click();
    }, 4000);
}

function showScrollTop() {
    const currentScrollPosition = window.pageYOffset; 
    const elementOffsetTop = document.getElementById('quote').offsetTop;

    if ( currentScrollPosition > (elementOffsetTop - 180)){
        document.getElementsByClassName('website-header')[0].style.opacity = 100;
    } else {
        document.getElementsByClassName('website-header')[0].style.opacity = 0; 
    }
}

window.addEventListener('scroll', showScrollTop);

function setNegativeMargin(){
    if (window.innerWidth > 550){
        let school_svg_height = document.getElementById('school-svg').clientHeight;
        document.getElementsByClassName('school-svg-box')[0].style.marginBottom = (school_svg_height*-0.43) + "px";
    }
    else{
        document.getElementsByClassName('school-svg-box')[0].style.marginBottom = "0px";
    }
}

window.addEventListener("resize", setNegativeMargin);

