function submitReservation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var guests = document.getElementById("guests").value;
  

    if (!name || !email || !phone || !date || !time || !guests) {
      alert("Please fill in all fields.");
      return;
    }
  
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var reservationCode = this.responseText;
        alert("Your reservation has been confirmed. Your reservation code is: " + reservationCode);
      }
    };
    xhr.open("POST", "/reserve");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("name=" + name + "&email=" + email + "&phone=" + phone + "&date=" + date + "&time=" + time + "&guests=" + guests);
  }
  