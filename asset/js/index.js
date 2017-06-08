import _ from 'lodash';
import '../css/index.css';
import '';
import moment from 'moment';

console.log(moment().format());

function component(){
    var ele = document.createElement('div');
    ele.setAttribute('id','root');
    ele.innerHTML = _.join(['Hello','webpack'],' ');
    return ele;
}

document.body.appendChild(component());