/**
 *
 * @param blob
 * @returns {Promise<unknown>}
 * @constructor
 */
const BlobToArrayBuffer = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.addEventListener('loadend', (e) => {
            resolve(reader.result);
        });
        reader.addEventListener('error', reject);
        reader.readAsArrayBuffer(blob);
    });
};

export default BlobToArrayBuffer;
