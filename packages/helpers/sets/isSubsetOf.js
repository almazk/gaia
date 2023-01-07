// Отношение подмножества
// Асимптотическое время выполнения: O(|setA|)
const IsSubsetOf = (setA, setB) => {
   return [...setA].every(element => setB.has(element));
};

export default IsSubsetOf;
