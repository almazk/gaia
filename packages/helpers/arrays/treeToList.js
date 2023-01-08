const TreeToList = ($Tree, $Options = {}) => {
    const {
        children = '_children',
        parentID = '_parentID',
        idKey = 'id',
        reserved = null,                          //зарезервированные поля
        transform = null,                         //трансформация
        excludedNames = []
    } = $Options;

    let _uids = [];
    let items = [];

    const Flat = ($internalDatas, $ParentID = null) => {
        if ($internalDatas && typeof $internalDatas === 'object') {
            for (let index in $internalDatas) {
                let item = $internalDatas[index];
                if (item && typeof item === 'object') {
                    let {uid = Math.random().toString()} = item;
                    // если такой ид уже есть в смете то генерируем новый
                    // if (_uids.includes(uid)) {
                    //    uid = Math.random().toString();
                    //    item.uid = uid;
                    // }

                    // Удаление
                    if (excludedNames && Array.isArray(excludedNames) && excludedNames.length) {
                        for (let excludedName of excludedNames) {
                            if (item[excludedName] !== undefined) {
                                Reflect.deleteProperty(item, excludedName);
                            }
                        }
                    }

                    if (reserved && typeof reserved === 'object') {
                        for (let IndexReserved in reserved) {
                            if (item[IndexReserved] === undefined) {
                                item[IndexReserved] = (typeof reserved[IndexReserved] === 'function')                                    //если функция
                                    ? reserved[IndexReserved](item)                                                                       //то входным данными полное значение
                                    : reserved[IndexReserved];                                                                            //нет просто зарезервированное значение
                            }
                        }
                    }

                    if (transform && typeof transform === 'object') {
                        for (let IndexTransform in transform) {
                            if (transform[IndexTransform] && typeof transform[IndexTransform] === 'function') {
                                if (item[IndexTransform] !== undefined) {
                                    item[IndexTransform] = transform[IndexTransform](item[IndexTransform]);
                                }
                            }
                        }
                    }

                    _uids.push(uid);
                    item[parentID] = $ParentID;
                    let subItems = item[children] || [];

                    if (item[children] !== undefined) {
                        Reflect.deleteProperty(item, children);
                    }
                    items.push(item);
                    if (subItems.length) {
                        Flat(subItems, uid);
                    }
                }
            }
        }
        else {
            items.push(typeof $internalDatas);
        }
    };

    Flat($Tree);

    return items;
};

export default TreeToList;
