document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const savedData = JSON.parse(localStorage.getItem('selectedImages')) || [];

    // Marca las casillas que fueron guardadas
    checkboxes.forEach(checkbox => {
        const id = checkbox.id;
        if (savedData.includes(id)) {
            checkbox.checked = true;
        }

        // Guardar el estado al cambiar
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                savedData.push(this.id);
            } else {
                const index = savedData.indexOf(this.id);
                if (index > -1) {
                    savedData.splice(index, 1);
                }
            }
            localStorage.setItem('selectedImages', JSON.stringify(savedData));
        });
    });

    // Auto guardar cada 30 segundos
    setInterval(function () {
        localStorage.setItem('selectedImages', JSON.stringify(savedData));
        console.log('Guardado automáticamente');
    }, 30000); // 30 segundos
});
