let qrCodes = {};

function domReady(fn) { 
  if (document.readyState === "complete" || document.readyState === "interactive") { 
    setTimeout(fn, 1000); 
  } else { 
    document.addEventListener("DOMContentLoaded", fn); 
  } 
} 

domReady(function () { 
  function onScanSuccess(decodeText, decodeResult) { 
    if(qrCodes[decodeText]) {
      qrCodes[decodeText]++;
    } else {
      qrCodes[decodeText] = 1;
    }

    let qrDataElement = document.getElementById("qr-data");
    qrDataElement.innerHTML = JSON.stringify(qrCodes, null, 2);

    alert("Your QR code is: " + decodeText + "\nScan Count: " + qrCodes[decodeText]); 
  } 

  let htmlscanner = new Html5QrcodeScanner("my-qr-reader", { fps: 10, qrbos: 250 }); 
  htmlscanner.render(onScanSuccess); 
});
