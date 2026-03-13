function openLetter() {
            document.getElementById('letterPopup').classList.add('active');
            document.getElementById('overlay').classList.add('active');
            document.getElementById('envelopeWrapper').classList.add('opened');
        }

        function closeLetter() {
            document.getElementById('letterPopup').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
            document.getElementById('envelopeWrapper').classList.remove('opened');
        }