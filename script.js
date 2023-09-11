// Your JavaScript code for copying text goes here
document.getElementById("copyButton").addEventListener("click", function() {
    var copyText = document.getElementById("invitationLink");
    copyText.select();
    document.execCommand("copy");
    alert("Copied: " + copyText.value);
});

document.getElementById("copyReferCodeButton").addEventListener("click", function() {
    var copyText = document.getElementById("referCode");
    copyText.select();
    document.execCommand("copy");
    alert("Copied: " + copyText.value);
});
