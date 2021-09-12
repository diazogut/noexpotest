//обработка JSON 


//возвращает рандомный элемент из JSON
export const Random_EL_ALL= (json) => 
{
    function arrayRandElement(arr) 
    {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    const random = (arrayRandElement(json));
    const body = random.body
    return body;

}