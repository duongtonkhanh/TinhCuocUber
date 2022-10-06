var uberX = document.querySelector('#uberX');
var uberSUV = document.querySelector('#uberSUV');
var uberBlack = document.querySelector('#uberBlack');
var payment = document.querySelector('#xuatTien')
var vehicle = 0;
var distance = 0.001;
var stringDistance = '';
var timeWait = 0.001;
var toTal = 0.001;
uberX.onclick = () => {
    vehicle = 1
}
uberSUV.onclick = () => {
    vehicle = 2
}
uberBlack.onclick = () => {
    vehicle = 3
}
// Tinh tien 
document.querySelectorAll('.contact100-form-btn')[0].onclick = () => {
    distance = 0.001;
    stringDistance = '';
    timeWait = 0.001;
    toTal = 0.001;
    distance = Number(document.querySelectorAll('.input100')[0].value);
    if (distance == 1) {
        stringDistance = '1km'
    }
    else if (distance > 1 && distance <= 20) {
        stringDistance = '20km'
    }
    else {
        stringDistance = '21km'
    }
    timeWait = Number(document.querySelectorAll('.input100')[1].value);
    if (vehicle === 0) {
        alert('Vui lòng chọn loại xe');
    }
    else if (distance == 0) {
        alert('Vui lòng nhập vào số KM');
    }
    else if (timeWait == 0) {
        alert('Vui lòng nhập thời gian chờ');
    }
    else if (vehicle > 0 && distance != null && timeWait != null) {
        // Uber X
        if (vehicle === 1) {
            switch (stringDistance) {
                case '1km':
                    toTal = distance * 8.000 + timeWait * 2;
                    break;
                case '20km':
                    toTal = (distance - 1) * 12.000 + timeWait * 2 + 8.000;
                    break;
                case '21km':
                    toTal = (distance - 1) * 10.000 + timeWait * 2 + 8.000;
                    break;
            }

        }
        if (vehicle === 2) {
            switch (stringDistance) {
                case '1km':
                    toTal = distance * 9.000 + timeWait * 3;
                    break;
                case '20km':
                    toTal = (distance - 1) * 14.000 + timeWait * 3 + 9.000;
                    break;
                case '21km':
                    toTal = (distance - 1) * 12.000 + timeWait * 3 + 9.000;
                    break;
            }

        }
        if (vehicle === 3) {
            switch (stringDistance) {
                case '1km':
                    toTal = distance * 10.000 + timeWait * 4;
                    break;
                case '20km':
                    toTal = (distance - 1) * 16.000 + timeWait * 4 + 10.000;
                    break;
                case '21km':
                    toTal = (distance - 1) * 14.000 + timeWait * 4 + 10.000;
                    break;
            }

        }
    }
    document.getElementById('divThanhTien').style.display = 'block'
    document.querySelector('#xuatTien').innerHTML = toTal + '.000';
}
// in hóa đơn
document.querySelectorAll('.contact100-form-btn')[1].onclick = () => {
    distance = 0.001;
    stringDistance = '';
    timeWait = 0.001;
    toTal = 0.001;
    distance = Number(document.querySelectorAll('.input100')[0].value);
    if (distance == 1) {
        stringDistance = '1km'
    }
    else if (distance > 1 && distance <= 20) {
        stringDistance = '20km'
    }
    else {
        stringDistance = '21km'
    }
    timeWait = Number(document.querySelectorAll('.input100')[1].value);

    if (vehicle === 0) {
        alert('Vui lòng chọn loại xe');
    }
    else if (distance == 0) {
        alert('Vui lòng nhập vào số KM');
    }
    else if (timeWait == 0) {
        alert('Vui lòng nhập thời gian chờ');
    }
    else if (vehicle > 0 && distance != null && timeWait != null) {
        var nameVehicle = document.getElementsByClassName('vehicle');
        // Uber X
        if (vehicle === 1) {

            for (var index = 0; index < nameVehicle.length; index++) {
                nameVehicle[index].innerHTML = 'uberX'
            }

            document.querySelector('.unitOfDefault').innerHTML = '8.000'
            document.querySelector('.totalOfDefault').innerHTML = '8.000'
            document.querySelector('.time').innerHTML = timeWait;


            switch (stringDistance) {
                case '1km':
                    toTal = distance * 8.000 + timeWait * 2;
                    document.querySelector('.toUse').style.visibility = 'hidden'
                    document.querySelector('.unitOfTime').innerHTML = '2.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 2.000) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
                case '20km':
                    toTal = (distance - 1) * 12 + timeWait * 2 + 8;
                    document.querySelector('.toUse').style.visibility = 'visible'
                    // to Use
                    document.querySelector('.used').innerHTML = (distance - 1) + ' km'
                    document.querySelector('.unitOfUse').innerHTML = '12.000'
                    document.querySelector('.totalOfUse').innerHTML = (distance - 1) * 12 + '.000'

                    //time wait
                    document.querySelector('.unitOfTime').innerHTML = '2.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 2.000) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
                case '21km':
                    toTal = (distance - 1) * 10 + timeWait * 2 + 8;
                    document.querySelector('.toUse').style.visibility = 'visible'
                    // to Use
                    document.querySelector('.used').innerHTML = (distance - 1) + ' km'
                    document.querySelector('.unitOfUse').innerHTML = '10.000'
                    document.querySelector('.totalOfUse').innerHTML = (distance - 1) * 10 + '.000'

                    //time wait
                    document.querySelector('.unitOfTime').innerHTML = '2.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 2.000) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
            }

        }
        // uber SUV
        if (vehicle === 2) {

            for (var index = 0; index < nameVehicle.length; index++) {
                nameVehicle[index].innerHTML = 'uberSUV'
            }

            document.querySelector('.unitOfDefault').innerHTML = '9.000'
            document.querySelector('.totalOfDefault').innerHTML = '9.000'
            document.querySelector('.time').innerHTML = timeWait;


            switch (stringDistance) {
                case '1km':
                    toTal = distance * 9.000 + timeWait * 3;
                    document.querySelector('.toUse').style.visibility = 'hidden'
                    document.querySelector('.unitOfTime').innerHTML = '3.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 3) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
                case '20km':
                    toTal = (distance - 1) * 14 + timeWait * 3 + 9;
                    document.querySelector('.toUse').style.visibility = 'visible'
                    // to Use
                    document.querySelector('.used').innerHTML = (distance - 1) + ' km'
                    document.querySelector('.unitOfUse').innerHTML = '14.000'
                    document.querySelector('.totalOfUse').innerHTML = (distance - 1) * 14 + '.000'

                    //time wait
                    document.querySelector('.unitOfTime').innerHTML = '3.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 3) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
                case '21km':
                    toTal = (distance - 1) * 12 + timeWait * 3 + 9;
                    document.querySelector('.toUse').style.visibility = 'visible'
                    // to Use
                    document.querySelector('.used').innerHTML = (distance - 1) + ' km'
                    document.querySelector('.unitOfUse').innerHTML = '12.000'
                    document.querySelector('.totalOfUse').innerHTML = (distance - 1) * 12 + '.000'

                    //time wait
                    document.querySelector('.unitOfTime').innerHTML = '3.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 3) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
            }

        }
        //uber black
        if (vehicle === 3) {

            for (var index = 0; index < nameVehicle.length; index++) {
                nameVehicle[index].innerHTML = 'uberBlack'
            }

            document.querySelector('.unitOfDefault').innerHTML = '10.000'
            document.querySelector('.totalOfDefault').innerHTML = '10.000'
            document.querySelector('.time').innerHTML = timeWait;


            switch (stringDistance) {
                case '1km':
                    toTal = distance * 10 + timeWait * 4;
                    document.querySelector('.toUse').style.visibility = 'hidden'
                    document.querySelector('.unitOfTime').innerHTML = '4.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 4) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
                case '20km':
                    toTal = (distance - 1) * 16 + timeWait * 4 + 10;
                    document.querySelector('.toUse').style.visibility = 'visible'
                    // to Use
                    document.querySelector('.used').innerHTML = (distance - 1) + ' km'
                    document.querySelector('.unitOfUse').innerHTML = '16.000'
                    document.querySelector('.totalOfUse').innerHTML = (distance - 1) * 14 + '.000'

                    //time wait
                    document.querySelector('.unitOfTime').innerHTML = '4.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 4) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
                case '21km':
                    toTal = (distance - 1) * 14 + timeWait * 4 + 10;
                    document.querySelector('.toUse').style.visibility = 'visible'
                    // to Use
                    document.querySelector('.used').innerHTML = (distance - 1) + ' km'
                    document.querySelector('.unitOfUse').innerHTML = '14.000'
                    document.querySelector('.totalOfUse').innerHTML = (distance - 1) * 14 + '.000'

                    //time wait
                    document.querySelector('.unitOfTime').innerHTML = '4.000';
                    document.querySelector('.totalOfTime').innerHTML = (timeWait * 4) + '.000';
                    document.querySelector('.toTal').innerHTML = toTal + '.000';
                    break;
            }

        }
    }
}