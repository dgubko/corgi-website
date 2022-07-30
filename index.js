var form = document.getElementById("form-id");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  var elements = event.target.elements;
  var name = elements.name.value
  var email = elements.email.value
//   var message = "Thank you, " +name+ "("+email+") for subscription."
  var altMessage = `Thank you, ${name}(${email})for your subscription.`
  document.getElementById("message").innerText=altMessage
});
