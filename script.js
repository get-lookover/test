let button = document.querySelector("button");

button.addEventListener("click", function () {
  
  let div = document.querySelector("div");
  div.innerHTML = "";
  
  let input = document.querySelector("textarea").value;
  let qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff"
  });
  
  qrcode.makeCode(input);
});