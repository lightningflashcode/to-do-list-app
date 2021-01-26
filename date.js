exports.getDate = function () {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     
    return today.toLocaleDateString('en-EN',options);
}

    // var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // variable day = array dari variable days dimana fungsi / method getday === hari dari 0-6
    // see mdn doc or w3s tentang metod getday / new date() jadi saturday = 7 jika dimulai dari 1
    // var day=days[today.getDay()]; we will make a better function it is toLocaleDateString
    // const day = today.toLocaleDateString('id-ID',options); untuk bahasa indonesia
    
    