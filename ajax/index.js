function sendGreeting() {
    const name = document.getElementById("nameInput").value;
    const messageElement = document.getElementById("greetingMessage");

    // Cek jika input kosong
    if (!name) {
        messageElement.textContent = "Nama tidak boleh kosong!";
        messageElement.style.color = "red";
        return;
    }

    // Membaca file ajax_info.txt
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ajax_info.txt", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Mengganti placeholder {name} dengan input pengguna
            const template = xhr.responseText;
            const personalizedMessage = template.replace("{name}", name);

            // Menampilkan pesan
            messageElement.textContent = personalizedMessage;
            messageElement.style.color = "green";
        } else {
            messageElement.textContent = "Gagal memuat pesan sapaan.";
            messageElement.style.color = "red";
        }
    };

    xhr.onerror = function () {
        messageElement.textContent = "Terjadi kesalahan saat mengakses file.";
        messageElement.style.color = "red";
    };

    xhr.send();
}