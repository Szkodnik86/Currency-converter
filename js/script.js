{
    const welcome = () => {
        console.log("Witam wszystkich odwiedzających DEV", "strona dodana do GIT.");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const exchangeElement = document.querySelector(".js-converter__exchange");
        const currencyElement = document.querySelector(".js-converter__currency");
        const resultElement = document.querySelector(".js-result");
        const result = calculateResult(currencyElement, exchangeElement);

        updateResultText(result, resultElement);
    };
    
    const calculateResult = (currencyElement, exchangeElement) => {
        return currencyElement.value * exchangeElement.value;
    };
    
    const updateResultText = (result, resultElement) => {
        resultElement.innerText = result.toFixed(2);
    };

    const init = () => {
        const formElement = document.querySelector(".js-converter");

        formElement.addEventListener("submit", onFormSubmit);

        welcome();
    };

    init();
}
