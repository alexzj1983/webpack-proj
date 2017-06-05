import _ from 'lodash';
import '../css/main.css';

function component(){
    var ele = document.createElement('div');
    ele.setAttribute('id','root');
    ele.innerHTML = _.join(['Hello','webpack'],' ');
    return ele;
}

document.body.appendChild(component());