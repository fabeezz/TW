document.addEventListener('DOMContentLoaded', function() {
    let tasta_apasata = false;
    let interval = null;

    const info_paragraf = document.getElementById('info');
    const dim_salvata = localStorage.getItem('fontSize');
    if (dim_salvata) {
        info_paragraf.style.fontSize = dim_salvata;
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'a') {
            if (!tasta_apasata) {
                const data_ora_acum = new Date();
                info_paragraf.textContent = `Data / Ora: ${data_ora_acum.toLocaleString()}`;
                tasta_apasata = true;

                interval = setInterval(() => {
                    const dim_random = Math.floor(Math.random() * 21) + 10;
                    info_paragraf.style.fontSize = `${dim_random}px`;
                }, 3000);

            } 
            else {
                clearInterval(interval);
                localStorage.setItem('fontSize', info_paragraf.style.fontSize);
                tasta_apasata = false;
            }
        }
    });
});
