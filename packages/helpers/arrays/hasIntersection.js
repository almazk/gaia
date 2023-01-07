const HasIntersection = (Array1, Array2) => {
    return !!Array1.filter(element => Array2.includes(element)).length;
};

export default HasIntersection;
