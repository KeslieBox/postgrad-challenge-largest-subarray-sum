function largestSubarraySum(arr){
    let arrTotal = arr.reduce((a,b) => a + b, 0)
    let total = 0
    // create a sliding window that can grow to accomodate numbers if they increase the total
    // create multiple pointers and if the sum of the numbers is bigger than eith number alone, move to the next
    let left = 0
    let right = 2
    let window = []
    // let i=0
    // while (i < 3){
    // for (let i = 0; i < 3; i++) {
    //     if (arr[i] > 0 && arr[i] + arr[i+1] > 0){
    //         total += arr[i]
    //     }
    // }
    // let newTotal = total
    // for (let i = 3; i < arr.length; i++){
    //     if (i !== arr.length - 1 || arr[i] > 0){
    //         newTotal += arr[i]
    //     }
    //     total = Math.max(total, newTotal, arrTotal, 0)
    // }

    // return total

    for (let i = arr.length - 1; i > arr.length - 5; i--) {
        if (arr[i] > 0 && arr[i] + arr[i-1] > 0){
            total += arr[i]
        }
    }
    let newTotal = total
    for (let i = arr.length - 5; i >= 0; i--){
        // if (newTotal < arr[i - 1] + arr[i - 2] + arr[i - 3] + newTotal || newTotal < arr[i] + arr[i - 1] + arr[i-2] + newTotal){
            newTotal += arr[i]
        // }
        total = Math.max(total, newTotal, arrTotal, 0)
    }

    return total
    


}