// Отношение подмножества
// Асимптотическое время выполнения: O(|Array1| * |Array2|)
const IsSubsetOf = (Array1, Array2) => {
    return Array1.every(element => Array2.includes(element));
};

export default IsSubsetOf;
