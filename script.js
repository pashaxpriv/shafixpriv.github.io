        function pindahTombol() {
            const btnNo = document.getElementById('btn-no');
            const container = document.querySelector('.container');
            
            // Memindahkan elemen tombol keluar dari wrapper-nya ke kontainer utama saat pertama kali disentuh
            if (btnNo.parentElement.classList.contains('btn-no-wrapper')) {
                container.appendChild(btnNo);
            }
            
            // Menghitung batas area aman di dalam kotak putih
            const maxX = container.clientWidth - btnNo.clientWidth - 30;
            const maxY = container.clientHeight - btnNo.clientHeight - 30;
            
            const randomX = Math.max(10, Math.floor(Math.random() * maxX));
            const randomY = Math.max(10, Math.floor(Math.random() * maxY));
            
            btnNo.style.left = randomX + 'px';
            btnNo.style.top = randomY + 'px';
        }
