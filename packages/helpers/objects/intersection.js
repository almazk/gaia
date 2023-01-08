// Пересечение множеств setA и setB.
// Асимптотическое время выполнения: O(|setA| * |setB|)
const Intersection = (setA, setB) => {
    let intersectionSet = {};
    Object.keys(setA)
        .filter(element => element in setB)
        .forEach(element =>
            intersectionSet[element] = true
        );
    return intersectionSet;
};

export default Intersection;
