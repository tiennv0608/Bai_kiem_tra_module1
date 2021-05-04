function checkNumberInArray(number,arr) {
    let result;
    for (let i=0;i<arr.length;i++) {
        if (arr[i] == number) {
            result = i;
            break;
        } else {
            result = "Số cần tìm không ở trong mảng"
        }
    }
    return result;
}