document.querySelector('#add-time').addEventListener('click', cloneField)

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('imput')

    fields.forEach(function() {
        fields.value = "";
    })

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}