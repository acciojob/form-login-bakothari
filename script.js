let fm = document.querySelector("#form1")
function getFormvalue(e) {
    const formdata = {
        fName: fm["fname"].value,
        lName: fm["lname"].value,

    }
 let fullName = formdata["fName"] +" " + formdata["lName"]
 alert(fullName)
}
fm.addEventListener("submit",getFormvalue)
fm.removeEventListener("submit", getFormvalue); 
