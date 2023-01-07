const ListToTree = ($List, $Options = {}) => {
   const {
      children = '_children',                   //аттрибут для складирования детей
      parentID = 'parentID',                    //аттрибут для ссылки на родителя,
      idKey = 'id',
      // emptyArrayFields = null,               //поля по которым можно сделать пустые массивы
      reserved = null,                          //зарезервированные поля
      transform = null                          //трансформация
   } = $Options;
   let map = new Map(), item, roots = [];

   for (let Index in $List) {
      let id = (idKey) ? $List[Index][idKey] : Index;
      map.set(id, Index);//
      $List[Index][children] = undefined;
   }

   for (let Index in $List) {
      item = $List[Index];

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
                  item[IndexTransform] = transform[IndexTransform](item[IndexTransform]);                               //Отдаем входящим значеним себя
               }
            }
         }
      }

      if (item[parentID] === undefined) {
         roots.push(item);
      } else {
         let tmpMapValue = map.get(item[parentID]);

         if ($List[tmpMapValue] === undefined) {
            console.warn('Error@ListToTree:', parentID, item, item[parentID], tmpMapValue);
         }

         if ($List[tmpMapValue][children] === undefined) {
            $List[tmpMapValue][children] = [];
         }

         $List[tmpMapValue][children].push(item);
      }
   }
   return roots;
};

export default ListToTree;
