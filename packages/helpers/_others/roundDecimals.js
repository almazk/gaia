const RoundDecimals = (n, d) => Number(Math.round(n + 'e' + d) + 'e-' + d);

export default RoundDecimals;
