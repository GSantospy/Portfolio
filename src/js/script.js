document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.php-email-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        
        const formData = new FormData(form);
        
        fetch('forms/contact.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Exibe o modal de sucesso
                var successModal = new bootstrap.Modal(document.getElementById('successModal'));
                successModal.show();
            } else {
                // Exibe o modal de erro
                var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
                errorModal.show();
            }
        })
        .catch(error => {
            // Em caso de erro na requisição, mostra o modal de erro
            var errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
            errorModal.show();
        });
    });
});