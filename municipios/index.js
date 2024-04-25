document.addEventListener("DOMContentLoaded", async () => {
    try {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const uf = urlParams.get('uf');
        const pageH1 = document.getElementById('page-h1');
        pageH1.innerHTML = `Município de ${uf}`

        let municipios = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
        municipios = await municipios.json();
        const cityList = document.getElementById('city-list');

        let i = 0;
        municipios.forEach((el) => {
            const li = document.createElement('li');
            li.classList.add('muni-and-btn');
            const p = document.createElement('p');
            p.textContent = el.nome;
            const btn = document.createElement('button');
            btn.textContent = 'Favoritar';
            btn.classList.add('btn');
            li.appendChild(p);
            li.appendChild(btn);

            btn.addEventListener('click', async () => {
                let local = [];
                local = await JSON.parse(window.localStorage.getItem('favoritos'));
                if (local == null) {
                    window.localStorage.setItem('favoritos', JSON.stringify([el]));
                } else {
                    let exists = false
                    local.forEach((loc) => {
                        if (loc.id == el.id) {
                            exists = true;
                        }
                    })

                    if (!exists) {
                        local.push(el)
                        window.localStorage.setItem('favoritos', JSON.stringify(local));
                    }
                }
            });

            cityList.appendChild(li)
        })
    
    } catch (error) {
        console.log(error);
    }

})