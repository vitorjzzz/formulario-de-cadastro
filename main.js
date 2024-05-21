      document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o envio do formulário

            // Obtém os valores dos campos do formulário
            var nome = document.getElementById('nome').value;
            var telefone = document.getElementById('telefone').value;

            // Cria uma nova linha na tabela
            var table = document.getElementById('contactTableBody');
            var newRow = table.insertRow();

            // Cria as novas células para nome e telefone
            var cellNome = newRow.insertCell(0);
            var cellTelefone = newRow.insertCell(1);

            // Adiciona os valores às células
            cellNome.textContent = nome;
            cellTelefone.textContent = telefone;

            // Limpa os campos do formulário
            document.getElementById('contactForm').reset();
        });