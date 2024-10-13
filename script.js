fetch('navbar.html')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(data => {
                document.getElementById('navbar').innerHTML = data;
                // You can add the script for menu toggle here if needed
                document.querySelector('.menu-toggle').addEventListener('click', function() {
                    document.querySelector('.navbar').classList.toggle('active');
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

            const fileInput = document.getElementById('pdf');
            const fileChosen = document.getElementById('file-chosen');
          
            fileInput.addEventListener('change', function(){
              fileChosen.textContent = this.files[0].name;
            });