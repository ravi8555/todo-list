    var romanToInt = function(s) {
        const myMap = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000  
        }
        let result = 0;
        
        for(let i = 0; i < s.length ; i++){
            const curr = myMap[s[i]];            
            const next = myMap[s[i + 1]];
            console.log(myMap[s]);
            if(curr < next){
                result += next - curr;
                i++
            }else{
                result += curr
            }
            // console.log(result);
        }  
        return result
        

    };
    romanToInt("M")

    // var twoSum = function(nums, target){
    //   let result = [3, 2, 4];
    //   result = nums[1] + nums[2]  

    // }
    // // twoSum(1, 2);
    // console.log(result);