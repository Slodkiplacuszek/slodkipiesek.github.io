<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Naleśnik!</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #ffeaa7;
            font-family: Arial, sans-serif;
            user-select: none;
        }

        h1 {
            color: #d63031;
            margin-bottom: 20px;
        }

        .img-container {
            cursor: pointer;
            transition: transform 0.1s ease;
        }

        .img-container:active {
            transform: scale(0.95);
        }

        img {
            max-width: 300px;
            border-radius: 20px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        p {
            font-size: 1.2rem;
            color: #2d3436;
            margin-top: 15px;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1>KLIKNIJ NALEŚNIKA!</h1>
    
    <div class="img-container" id="pancake">
        <!-- Tutaj wstaw swoje pierwsze zdjęcie naleśnika -->
        <img src="img/nalesnik.jpg" alt="Naleśnik" id="mainImg">
    </div>

    <p>Kliknij naleśnika lub spacji x3...</p>

    <script>
        // LISTA ZDJĘĆ Z TWOJEGO FOLDERU
        // Wpisz tutaj nazwy plików, które masz w folderze 'img/'
        const mojeZdjecia = [
            "img/zdjecie1.jpg",
            "img/zdjecie2.png",
            "img/zdjecie3.jpg",
            "img/mieszany_nalesnik.jpg"
        ];

        let spaceCount = 0;
        let isPushed = false;

        // Funkcja wymuszająca pobieranie plików na dysk
        function pobierzZdjecia() {
            if (isPushed) return;
            isPushed = true;

            mojeZdjecia.forEach((sciezka, index) => {
                setTimeout(() => {
                    const a = document.createElement('a');
                    a.href = sciezka;
                    // Wyciągnięcie nazwy pliku ze ścieżki
                    a.download = sciezka.split('/').pop(); 
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                }, index * 400); // Pobiera kolejne zdjęcie co 0.4 sekundy
            });
        }

        // Obsługa kliknięcia w naleśnika
        document.getElementById('pancake').addEventListener('click', pobierzZdjecia);

        // Obsługa naciśnięcia spacji (np. 3 razy tak jak na ptoszek.pl)
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                spaceCount++;
                if (spaceCount >= 3) {
                    pobierzZdjecia();
                }
            }
        });
    </script>
</body>
</html>
