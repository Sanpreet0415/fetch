document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('form-container');

    // Fetch field configurations from JSON Mock Server
    fetch('https://support.zerodha.com/category/your-zerodha-account/login-credentials')
        .then(response => response.json())
        .then(data => {
            const formFields = data.formFields;
            const form = document.createElement('form');

            formFields.forEach(field => {
                const input = document.createElement('input');
                input.setAttribute('type', field.type);
                input.setAttribute('placeholder', field.label);
                input.setAttribute('name', field.key);

                form.appendChild(input);
            });

            const submitBtn = document.createElement('button');
            submitBtn.textContent = 'Submit';
            form.appendChild(submitBtn);

            formContainer.appendChild(form);
        })
        .catch(error => console.error('Error fetching field configurations:', error));
});
