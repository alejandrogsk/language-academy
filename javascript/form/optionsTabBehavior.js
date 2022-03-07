/**
 * This function recives a container than has inside multiples div (with an id) and inputs (with a value).
 * Then add a listerer for each div. If the if value match with some input.value, the input is now checked
 */
function clickeableInputDiv(container){
    const plansContainer = document.getElementById(container);
    const allTheInputOptionsForPlans = plansContainer.getElementsByTagName('input');
    const allTheDivOptionsForPlans = plansContainer.getElementsByTagName('div');
    Array.from(allTheDivOptionsForPlans).forEach(oneDiv => {
        oneDiv.addEventListener('click', function(){
            const res = Array.from(allTheInputOptionsForPlans).find(planInput => {
                return planInput.value == oneDiv.id
            })
            if(res!== undefined)res.checked = true;
        })
    });
}
clickeableInputDiv('languages-options-div');
clickeableInputDiv('plans-options-div');