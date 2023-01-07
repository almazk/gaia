// Объединение множеств setA и setB
// Асимптотическое время выполнения: O(|setA| + |setB|)
const Union = (setA, setB) => {
   return new Set([...setA, ...setB]);
};

export default Union;
