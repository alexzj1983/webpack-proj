import _ from 'lodash';
import moment from 'moment';
import '../css/index.css';
import 'bootstrap/dist/css/bootstrap.css';

console.log(moment().format());

function component(){
    var ele = document.createElement('div');
    ele.setAttribute('id','root');
    ele.innerHTML = _.join(['Hello','webpack'],' ');

    $('body').append('<div class="jdiv">jdiv</div>');

    return ele;
}

document.body.appendChild(component());