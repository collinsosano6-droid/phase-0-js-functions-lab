function calculateTax(amount){
     if (typeof amount !== 'number' || isNaN(amount)) {
        return 0;}
    return amount * 0.1; //10% tax value
}
function convertToUpperCase(text){
    // Caution: if text is null or undefined, return it as-is or handle it
    if (text === null || text === undefined) {
        return text; 
    }
    return text.toUpperCase();
}
function findMaximum(num1, num2){
    let maximum;
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }

}
function isPalindrome(word){
     // If the input is null or undefined, it's not a palindrome
    if (word === null || word === undefined) {
        return false;
    }
    
    // Convert to lowercase so casing doesn't break the check
    const cleanWord = word.toLowerCase();
    
    // Reverse the string and compare it to the original
    const reversed = cleanWord.split('').reverse().join('');
    return cleanWord === reversed;

}
function calculateDiscountedPrice(originalPrice, discountPercentage ){
let discount;
discount = originalPrice - (originalPrice * discountPercentage/100);
return discount;
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };