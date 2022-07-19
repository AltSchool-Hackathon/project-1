// let phoneNumber = prompt()
let mtn = ['0803', '0806', '0703', '0706', '0813', '0816', '0810', '0814', '0903'];
let glo = ['0805', '0807', '0705', '0815', '0811', '0905'];
let airtel = ['0802', '0808', '0812', '0701', '0902', '0702'];
let etisalat = ['0809', '0818', '0817', '0909'];
let smile = ['0804', '0702']


function firstFourDigits(number) {
    let digits = /^\d{4}/.exec(number);
    return digits
}

console.log(firstFourDigits('08076771953'))