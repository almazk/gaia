// Отношение подмножества
// Асимптотическое время выполнения: O(|setA| * |setB|)
const IsSubsetOf = (setA, setB) => {
   return Object.keys(setA).every(element => element in setB);
};

export default IsSubsetOf;
