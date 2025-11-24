document.addEventListener('DOMContentLoaded', function() {
    const subjudulElements = document.querySelectorAll('h3');
    const contentElements = document.querySelectorAll('.content');
    const toggleButton = document.getElementById('toggle-mode');
    const modeStatus = document.getElementById('mode-status');
    const body = document.body;

    contentElements.forEach(content => {
        content.style.maxHeight = '0';
        content.style.padding = '0 10px';
    });

    subjudulElements.forEach((h3, index) => {
        h3.addEventListener('click', function() {
            const content = contentElements[index];

            const isActive = h3.classList.contains('active');

            if (!isActive) {
                const konfirmasi = confirm(`Anda akan melihat jawaban untuk ${h3.textContent}. Apakah Anda yakin?`);

                if (konfirmasi) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.padding = '15px 10px';
                    h3.classList.add('active');
                } else {
                    content.style.maxHeight = '0';
                    content.style.padding = '0 10px';
                    h3.classList.remove('active');
                }
            } else {
                 content.style.maxHeight = '0';
                 content.style.padding = '0 10px';
                 h3.classList.remove('active');
            }
        });
    });

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('berantakan');

        if (body.classList.contains('berantakan')) {
            modeStatus.textContent = 'Berantakan';
            toggleButton.textContent = 'Kembali ke Mode Rapi';
        } else {
            modeStatus.textContent = 'Rapi';
            toggleButton.textContent = 'Ganti Mode Tampilan';
        }
    });

});