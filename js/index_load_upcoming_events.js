function dateCompareForSort(a, b){
    var a_date = a["date"].split("-");
    var a_date_int = parseInt(a_date[1])*100 + parseInt(a_date[0]);

    var b_date = b["date"].split("-");
    var b_date_int = parseInt(b_date[1])*100 + parseInt(b_date[0]);

    return a_date_int - b_date_int;
}

var today = new Date();
today = (today.getMonth()+1)*100+today.getDate();

event_list.sort(dateCompareForSort);

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
                    <h4>`+element["name"]+`</h4>
                    <p>`+event_date_str+` | `+duration_str+`<br>
                    `+element["description"]+`</p>
                </div>
            </div>
        </div>
        `;
    }
});
document.getElementsByClassName("timeline-box")[0].innerHTML = upcoming_events_html;