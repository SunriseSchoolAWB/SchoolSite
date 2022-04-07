function dateCompareForSort(a, b){
    var a_date = a["date"].split("-");
    if (a_date.length == 1){
        var a_date_int = parseInt(a_date[0])*100;
    }
    if (a_date.length == 1 && a_date[0] == ""){
        var a_date_int = 0;
    }
    else{
        var a_date_int = parseInt(a_date[1])*100 + parseInt(a_date[0]);
    }

    var b_date = b["date"].split("-");
    if (b_date.length == 1){
        var b_date_int = parseInt(b_date[0])*100;
    }
    if (b_date.length == 1 && b_date[0] == ""){
        var b_date_int = 0;
    }
    else{
        var b_date_int = parseInt(b_date[1])*100 + parseInt(b_date[0]);
    }

    return a_date_int - b_date_int;
}

var today = new Date();
today = (today.getMonth()+1)*100+today.getDate();

event_list.sort(dateCompareForSort);

var upcoming_events_limiter = 5;
var upcoming_events_counter = 0;

var upcoming_events_html = ``;
event_list.forEach(element => {
    var event_date = element["date"].split("-");
    if (event_date.length == 2){
        var event_date_int = parseInt(event_date[1])*100 + parseInt(event_date[0]);
    }
    if (event_date.length == 1 && event_date[0] != ""){
        var event_date_int = parseInt(event_date[0])*100 + today%100;
        event_date[1] = event_date[0];
        event_date[0] = "Tentative in";
    }
    if ((event_date.length == 1 && event_date[0] == "") || (upcoming_events_counter > upcoming_events_limiter)) return;

    if ((today <= event_date_int && event_date_int < today+110) || (-1119 < (event_date_int-today) && (event_date_int-today) < -1089)){

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
        upcoming_events_counter += 1;
    }
});
document.getElementsByClassName("timeline-box")[0].innerHTML = upcoming_events_html;