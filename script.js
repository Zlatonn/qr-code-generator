let textBox = document.getElementById("text-box");
let qrCode = document.getElementById("qr-code");
let downloadBtn = document.getElementById("download-btn");
let downloadLink = document.getElementById("download-link");
let formatDropDown = document.getElementById("format-dropdown");
let themeDropDown = document.getElementById("theme-dropdown");

function generateCode(){
    if(textBox.value !== ""){
        qrCode.innerHTML = "";
        new QRCode(qrCode, {
            text: textBox.value,
            width: 200,
            height: 200,
            colorDark : "#fff",
            colorLight : "rgba(0,0,0,0)",
        });
    }
    else{
        qrCode.innerHTML = "";
        new QRCode(qrCode, {
            text: "https://github.com/Zlatonn",
            width: 200,
            height: 200,
            colorDark : "#fff",
            colorLight : "rgba(0,0,0,0)",
        });
    }
}

function changeTheme(){
    let selected = themeDropDown.value;
    document.body.className = selected;
}

function downloadQRCode() {
    const canvas = qrCode.querySelector("canvas");
    
    if (canvas) {
        const format =  formatDropDown.value;
        const imgSrc = canvas.toDataURL(format);
        downloadLink.setAttribute("href", imgSrc);
        downloadLink.setAttribute("download", `qr_code.${formatDropDown.value}`);
    } else {
        alert("QR Code not generated yet.");
    }
}

// Add eventlistener
textBox.addEventListener("keyup", generateCode);
themeDropDown.addEventListener("change", changeTheme);
downloadBtn.addEventListener("click",downloadQRCode)

// Initial call
generateCode();
changeTheme();