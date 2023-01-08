// Объединение множеств setA и setB
// Асимптотическое время выполнения: O(|setB| * max(|setA|, |setB|))
import Intersection from './intersection';

const Union = (setA, setB) => {
    let intersectionSet = Intersection(setA, setB);
    return [
        ...setA,
        ...setB.filter(element => !intersectionSet.includes(element))
    ];
};

export default Union;
