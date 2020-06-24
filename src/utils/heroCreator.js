import heroList from '../data/heroData';
import {shallowCopy} from './index';

const heroCreator = (num) => {
    let arr = new Array(heroList.length).fill(0).map((item, index) => index);
    let heroes = [];
    for (let i = 0; i < num; i++) {
        let rIndex = ~~(Math.random() * arr.length);
        let heroIndex = arr.splice(rIndex, 1);
        heroes.push(shallowCopy(heroList[heroIndex]));
    }
    return heroes;
};

export default heroCreator;