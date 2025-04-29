<form id="feedbackform" onsubmit "return" >

<label for="name" >Name: </label>
<input type="text" id="name" name="name"
    required minlength = "3"    Maxlength = "50"

<span class "error" id= "nameError" > </span>

<label for="email" > Email : </label>
<input type="email" id="email"  name="email"    required>
<label for="message"    >Message:</label>
<textarea for="message" name="message" required minlength="10" .maxlength="500"

<span class="message"   id="messageError" </span>

<button type="sumbit">Submit</button>
