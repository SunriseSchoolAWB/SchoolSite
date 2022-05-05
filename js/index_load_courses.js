var today = new Date();
today = (today.getMonth()+1)*100+today.getDate();

var next_course_interval_id = setInterval(function(){
    document.getElementById("course-card-right-button").click();
}, 4000);

var course_upper_card = document.querySelector(".courses-box .course-upper-card");
course_upper_card.addEventListener('transitionend', function() {
    var current_course = document.getElementById("course-current-card");
    var current_course_name = current_course.getAttribute('name');
    course_upper_card.setAttribute('style', 'height: 60%; width: 100%; background-size: 200% 100%; border-radius: 20px 20px 0px 0px; display: inline-flex; justify-content: space-around; align-items: center; font-family: section-body-font; transition: none; background-color: '+course_info[current_course_name]["color2"]+';');
    });

