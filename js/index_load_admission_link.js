var today = new Date();
today = (today.getMonth()+1)*100+today.getDate();

var admission_date = admission_period["start_date"].split("-");
var admission_start_date = parseInt(admission_date[1])*100 + parseInt(admission_date[0]);
admission_date = admission_period["end_date"].split("-");
var admission_end_date = parseInt(admission_date[1])*100 + parseInt(admission_date[0]);

if (today < admission_end_date && today > admission_start_date){
    document.getElementsByClassName("admission-enquiry-box")[0].style.display = "flex";
}