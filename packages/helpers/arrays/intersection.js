// Пересечение множеств setA и setB
// Асимптотическое время выполнения: O(|Array1| * |Array2|)

const Intersection = (Array1, Array2) => {
    return Array1.filter(element => Array2.includes(element));
};

export default Intersection;
