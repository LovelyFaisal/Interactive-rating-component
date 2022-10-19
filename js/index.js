let rate = null;

document.querySelectorAll('#rating').forEach(item => {
    item.addEventListener('click', event => {
        event.target.classList.add('active');
        rate = event.target.innerText;
        document.querySelectorAll('#rating').forEach(item => {
            if (item !== event.target) {
                item.classList.remove('active');
            }
        });


    })
})

document.querySelector('.Submitbtn').addEventListener('click', event => {
    if (rate !== null) {
        document.querySelector('.content').classList.add('d-none');
    document.querySelector('.ty-content').classList.remove('d-none');
    document.querySelector('.rate').innerText = `You selected ${rate} out of 5`;
    }
});
