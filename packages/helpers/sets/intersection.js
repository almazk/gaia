// Пересечение множеств setA и setB
// Асимптотическое время выполнения: O(min(|setA|, |setB|))
const Intersection = (setA, setB) => {
    let smallerSet = setA.size > setB.size ? setB : setA;
    let largerSet = setA.size > setB.size ? setA : setB;
    return new Set([...smallerSet].filter(element => largerSet.has(element)));
};

export default Intersection;
