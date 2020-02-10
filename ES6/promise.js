function applyForVisa(documents){
    console.log('Обработка заявления...');
    let promise = new Promise((resolve, reject) => {    
        setTimeout( () => {
            Math.random() > 0 ? resolve({}) : reject('В визе отказано нехватка документов');
        }, 2000);
    });

    return promise;
}

const getVisa = (visa) =>{
    console.info('Виза получана');
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(visa), 2000);
    });
}

const bookHotel = (visa) => {
    console.log(visa);
    console.log('Бронируем отель');
    return Promise.resolve(visa);
}

const buyTickets = (booking) => {
    console.log('Покупаем билет');
    console.log(`Бронь ${booking}`);
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .catch(error => console.error(error));