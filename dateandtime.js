function getTimeAnddate(weekdays)
{
    const d = new Date();
    let day = d.getDay();

for (let i = 0; i < weekdays.length; i++) {
    if(day === i)
    {
        console.log("Today is ",weekdays[i]);
    }
}
let hour = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let time =(hour>=12)? "PM" : "AM";
hour = (hour>=12)? hour-12 : hour;
console.log("Current Time is ",hour,time,':',minutes,':',seconds);

}

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "ThurseDay", "Friday", "SaturDay"];
getTimeAnddate(weekdays);



// print current page content
function print_current_window_page() {
    window.print();
}
print_current_window_page();


function stringwork() {
    let myString = "w3resource";
    let popstring = myString.Pop();
}