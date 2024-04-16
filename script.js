const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function checkIfPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/\s/g, "");
    const reversedStr = str.split("").reverse().join("");
    return cleanedStr === reversedStr;
}

checkBtn.addEventListener("click", () => {
    const inputString = textInput.value.trim();

      if (inputString === "") {
            alert("Please input a value");
    } else {
        const isPalindrome = checkIfPalindrome(inputString);
        result.textContent = isPalindrome
        ? `${inputString} is a palindrome!`
        : `${inputString} is not a palindrome!`;
    }
});