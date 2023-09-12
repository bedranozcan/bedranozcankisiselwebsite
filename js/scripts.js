
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Formun otomatik olarak gönderilmesini engelle

        // Formdan değerleri al
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Formu oluştur
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("message", message);

        // XMLHttpRequest ile veriyi gönder
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "sendmail.php");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Başarıyla gönderildiğinde burası çalışır
                    document.getElementById("submitSuccessMessage").classList.remove("d-none");
                    contactForm.reset(); // Formu sıfırla
                } else {
                    // Hata oluştuğunda burası çalışır
                    document.getElementById("submitErrorMessage").classList.remove("d-none");
                }
                document.getElementById("submitButton").classList.remove("disabled");
            }
        };
        xhr.send(formData);

        document.getElementById("submitButton").classList.add("disabled");
    });
});