document.addEventListener("DOMContentLoaded", async () => {
    try {
        const statesApi = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
        let states = await fetch(statesApi);
        states = await states.json();
        const stateList = document.getElementById("states-list")
    
        states.forEach((el) => {
            let a = document.createElement('a');
            a.href = `./municipios/index.html?uf=${el.sigla}`
            a.text = el.nome
            stateList.appendChild(a)
        })
    } catch(error) {
        console.error(error)
    }
})