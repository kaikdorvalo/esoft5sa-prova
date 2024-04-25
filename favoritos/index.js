document.addEventListener('DOMContentLoaded', async () => {
    const cityList = document.getElementById('city-list');
    let local = [];
    local = await JSON.parse(window.localStorage.getItem('favoritos'));

    if (local == null) {
        cityList.innerHTML = `<p><strong>Nenhum item nos favoritos</strong></p>`
    } else {
        local.forEach((el) => {
            const li = document.createElement('li');;
            const p = document.createElement('p');
            p.classList.add('strong')
            p.textContent = el.nome;

            li.appendChild(p);
            cityList.appendChild(li);
        });
    }
});