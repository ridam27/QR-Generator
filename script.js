let qr;

document.getElementById('generateBtn').addEventListener('click', () => {
    const teamName = document.getElementById('teamName').value.trim();
    const teamMembers = document.getElementById('teamMembers').value.trim();

    if (!teamName || !teamMembers) {
        alert("Please fill in both fields.");
        return;
    }

    // ✅ Format team name for scanner (spaces to underscores)
    const formattedTeamName = teamName.replace(/\s+/g, "_");

    // ✅ Final QR content
    const qrData = `${formattedTeamName}\n${teamMembers}`;

    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ""; // Clear previous QR

    qr = new QRCode(qrContainer, {
        text: qrData,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

document.getElementById('downloadBtn').addEventListener('click', () => {
    if (!qr) {
        alert("Please generate a QR code first.");
        return;
    }

    const canvas = document.querySelector("#qrcode canvas");
    if (canvas) {
        const link = document.createElement('a');
        const teamName = document.getElementById('teamName').value.trim();
        const fileName = teamName.replace(/\s+/g, '_') + ".png";

        link.href = canvas.toDataURL("image/png");
        link.download = fileName;
        link.click();
    } else {
        alert("QR code not found.");
    }
});