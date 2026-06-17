document.querySelector('.form-btn').addEventListener('click', function(event) {
        event.preventDefault();
        
        let firstName = document.querySelector('input[name="fname"]').value;
        let lastName = document.querySelector('input[name="lname"]').value;
        let email = document.querySelector('#email').value;
        let message = document.querySelector('#message').value;
        
        if(firstName === "" || lastName === "" || email === "" || message === "") {
            alert("Please fill all fields before sending.");
        } else {
            alert("Thank you " + firstName + "! Your message has been sent.");
            document.querySelector('input[name="fname"]').value = "";
            document.querySelector('input[name="lname"]').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#message').value = "";
        }
    });

// document.querySelector('.form-btn')?.addEventListener('click', (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! I will get back to you soon.');
// });

// let preventDefault=()=>{
//     let sendButton=document.querySelector('.form-btn')
//     sendButton.addEventListener('click',function(event){
//         e.preventDefault();
//         alert('Thanks for your message! I will get back to you soon.');
//     })
// }