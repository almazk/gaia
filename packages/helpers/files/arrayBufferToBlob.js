const ArrayBufferToBlob = (buffer, type) => {
    return new Blob([buffer], {type: type});
};

export default ArrayBufferToBlob;
