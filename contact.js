// function sendMail(){
//     let parms = {
//         name :document.getElementById("name").value,
//         email :document.getElementById("email").value,
//         subject :document.getElementById("Subject").value,
//         message :document.getElementById("message").value,
//     }
//     emailjs.send("service_tdwzgjm","template_ft1jx0m",parms).then(alert("Email Sent!!.."))
// }



function data(){


    const Name = document.getElementById('name').value;
    const Email = document.getElementById("email").value;
    const subject = document.getElementById("Subject").value;
    const    message = document.getElementById("message").value;

    console.log(Name)
    console.log(Email)
    console.log(subject)
    console.log(message)
}