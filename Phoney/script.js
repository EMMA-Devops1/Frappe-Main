let tc = document.getElementById("telecoms");
let p = tc.value;
tc.addEventListener("input", () => {
  if (tc.value.length > 3) {
    if (tc.value == "0803" || tc.value == "0806" || tc.value == "0703" || tc.value == "0704" || tc.value == "0706" ||tc.value =="08104"|| tc.value == "0816"|| tc.value == "0813"|| tc.value == "0906"|| tc.value == "0903"|| tc.value == "0814") {
      document.getElementById("bro_emma").innerHTML = `<img src="MTN logo.png" class="image-fit">`;
    }
    else if (tc.value == "0802" || tc.value == "0808" || tc.value == "07018" || tc.value == "0702" || tc.value == "0708"|| tc.value == "0818"|| tc.value == "0812"|| tc.value == "0902"|| tc.value == "0908"|| tc.value == "0907"|| tc.value == "0904") {
      document.getElementById("bro_emma").innerHTML = `<img src="airtel logo.png" class="image-fit">`;
    }
    else if (tc.value == "0805" || tc.value == "0807" || tc.value == "0705" || tc.value == "0705" || tc.value == "0905"|| tc.value == "0915") {
      document.getElementById("bro_emma").innerHTML = `<img src="GLO logo.jpeg" class="image-fit">`;
    }
    else if (tc.value == "0709" || tc.value == "0809" || tc.value == "0907"|| tc.value == "0909") {
      document.getElementById("bro_emma").innerHTML = `<img src="9mobile logo.png" class="image-fit">`;
    }
  }
  else if (tc.value.length < 4) {
    document.getElementById("bro_emma").innerHTML = "";
  }
}, false);


