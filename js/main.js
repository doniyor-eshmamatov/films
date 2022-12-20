let elRow = document.querySelector('.row1');
let elInput = document.querySelector('input');
let elSelect = document.querySelector('.js-select')


function log(array) {
    array.forEach((el) => {
        let elCard = document.createElement('div');
        elCard.setAttribute('class', 'card col-md-3 p-0 justify-content-between')
        elRow.appendChild(elCard);

        let elCardBody = document.createElement('div');
        elCardBody.setAttribute('class', 'card-body p-0');
        elCard.appendChild(elCardBody);

        let elTitle = document.createElement('h6');
        elTitle.textContent = el.title;
        elTitle.setAttribute('class', 'card-title');
        elCardBody.appendChild(elTitle);

        let elGanre = document.createElement('p');
        elGanre.textContent = el.genres;
        elGanre.setAttribute('class', 'card-text');
        elCardBody.appendChild(elGanre);

        let elImg = document.createElement('img');
        elImg.setAttribute('src', el.poster);
        elImg.setAttribute('class', 'card-img');
        elCard.appendChild(elImg);
    });
}
log(films);

let searchArr = [];
elInput.addEventListener('input', (evt) => {
    evt.preventDefault();
    elRow.innerHTML = '';

    let elInputVal = elInput.value.toLowerCase();

    films.forEach((el) => {
        if (el.title.toLowerCase().includes(elInputVal)) {
            searchArr.push(el);
        }
    })
    log(searchArr);
    searchArr = [];
})


elSelect.addEventListener('change', () => {
    elRow.innerHTML = '';
    films.sort((a, b) => {
        let aVal = a.title.toLowerCase();
        let bVal = b.title.toLowerCase();

        if (elSelect.value == 'all') {
            log(films);
        }
        else if (elSelect.value == 'a-z') {
            return aVal.charCodeAt(0) - bVal.charCodeAt(0);
        }
        else if (elSelect.value == 'z-a') {
            return bVal.charCodeAt(0) - aVal.charCodeAt(0);
        }
    })
    log(films);
})