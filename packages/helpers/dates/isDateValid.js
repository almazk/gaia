const IsDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());

export default IsDateValid;
