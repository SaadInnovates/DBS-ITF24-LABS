function whatsapp() {
    var name = document.getElementById('name').value;
    var rollno = document.getElementById('rollno').value;
    var labno = document.getElementById('labno').value;
    var filelink = document.getElementById('filelink').value;
    var select = document.getElementById('opt');
    var opt = select.options[select.selectedIndex].value;
    var TA = " ";
    if (opt == "OS") {
        TA = "923054554262";
    }
    else if (opt == "UJ") {
        TA = "923134949512";
    }
    else if (opt == "SI") {
        TA = "923124060848";
    }
    else if (opt == "AC") {
        TA = "923045560381";
    }
    var url = "https://wa.me/"+TA+"?text="
    +"Name: *"+name+"* %0a"
    +"Roll Number: *"+rollno+"* %0a"
    +"Lab Number / Project: *"+labno+"* %0a"
    +"File Link: *"+filelink+"* %0a%0a%0a"
    +"*This is an auto generated report for online file submissions. Make sure your link must be a valid link.* %0a"
    +"if you have any query contact your TA. %0aThank you.";
    window.open(url, '_blank').focus();
}