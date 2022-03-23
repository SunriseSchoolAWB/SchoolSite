const courses = ['UKG', 'LKG', '1', '2', '3', '4'];
const course_info = {
    'UKG': {'age': 5, 'color1': '#4C6D93', 'color2':'#C8DEE5'},
    'LKG': {'age': 6, 'color1': '#574C9A', 'color2':'#E0DBFF'},
    '1': {'age': 7, 'color1': '#4A8069', 'color2':'#CEE8E3'},
    '2': {'age': 8, 'color1': '#7C447D', 'color2':'#EBD5EC'},
    '3': {'age': 9, 'color1': '#79413E', 'color2':'#E9D2D0'},
    '4': {'age': 10, 'color1': '#846446', 'color2':'#E7D6C7'}
};
var month_list = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

window.onload = beginLoading;

async function beginLoading(){
    document.getElementById("course-card-left-svg").style.setProperty("display", "none");
    document.getElementById("course-card-left-button").disabled = true;

    var today = new Date();
    today = (today.getMonth()+1)*100+today.getDate();

    var upcoming_events_html = ``;
    event_list.forEach(element => {

        var event_date = element["date"].split("-");
        var event_date_int = parseInt(event_date[1])*100 + parseInt(event_date[0]);

        if (event_date_int > today && event_date_int < today+100){

            var event_date_str = event_date[0] +' '+ month_list[parseInt(event_date[1])-1];

            if (element["duration"]<1){
                var duration_str = "No duration";
            }
            else if (element["duration"]==1){
                var duration_str = element["duration"].toString() + " day";
            }
            else{
                var duration_str = element["duration"].toString() + " days";
            }   
            upcoming_events_html += `
            <div class="event-wrapper-box">
                <div class="event-box">
                    <div class="event-details-box">
                        <h4>`+event_date_str+` | `+element["name"]+` | `+duration_str+`</h4>
                        <p>`+element["description"]+`</p>
                    </div>
                </div>
            </div>
            `;
        }
    });
    document.getElementsByClassName("timeline-box")[0].innerHTML = upcoming_events_html;

    var course_upper_card = document.querySelector(".courses-box .course-upper-card");
    course_upper_card.addEventListener('transitionend', function() {
        var current_course = document.getElementById("course-current-card");
        var current_course_name = current_course.getAttribute('name');
        course_upper_card.setAttribute('style', 'height: 45%; width: 100%; background-size: 200% 100%; border-radius: 20px 20px 0px 0px; display: inline-flex; justify-content: space-around; align-items: center; font-family: section-body-font; transition: none; background-color: '+course_info[current_course_name]["color2"]+';');
      });
}


function selectCourse(dir){
    var current_course = document.getElementById("course-current-card");
    var current_course_name = current_course.getAttribute('name');
    var current_course_index = courses.indexOf(current_course_name);
    if (current_course_index+dir >= 0 && current_course_index+dir < courses.length){
        console.log(current_course_index);
        if (current_course_index+dir > 0){
            document.getElementById("course-card-left-svg").style.setProperty("display", "inline-flex");
            document.getElementById("course-card-left-button").disabled = false;
        }
        else{
            document.getElementById("course-card-left-svg").style.setProperty("display", "none");
            document.getElementById("course-card-left-button").disabled = true;
        }
        if (current_course_index+dir < courses.length-1){
            document.getElementById("course-card-right-svg").style.setProperty("display", "inline-flex");
            document.getElementById("course-card-right-button").disabled = false;
        }
        else{
            document.getElementById("course-card-right-svg").style.setProperty("display", "none");
            document.getElementById("course-card-right-button").disabled = true;
        }
        
        var next_course = courses[current_course_index+dir];
        current_course.setAttribute('name', next_course);
        current_course.innerHTML = '<p>'+next_course+'</p>';
        document.getElementById("course-current-class").innerText = next_course;
        document.getElementById("course-current-age").innerText = course_info[next_course]["age"];
        document.getElementById("course-current-subjects").innerText = "A, B, C";
        document.getElementById("course-current-activities").innerText = "A1, A2, A3";
        document.getElementById("course-current-card").style.setProperty('border-color', course_info[next_course]["color1"]);
        document.getElementById("path902").style.setProperty('stroke', course_info[next_course]["color1"]);
        document.getElementById("path901").style.setProperty('stroke', course_info[next_course]["color1"]);
        document.getElementById("course-current-card").getElementsByTagName("p")[0].style.setProperty('color', course_info[next_course]["color1"]);
        var course_upper_card = document.querySelector(".courses-box .course-upper-card");
        course_upper_card.style.setProperty('background-image', 'linear-gradient(to left, '+course_info[next_course]["color2"]+' 50%, '+course_info[current_course_name]["color2"]+' 50%)');
        course_upper_card.style.setProperty('transition','background-position 0.5s ease-out');
        course_upper_card.style.setProperty('background-position-x', (dir*100).toString()+'%');
    }
}