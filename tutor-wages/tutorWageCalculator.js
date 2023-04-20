/** ********************* PSUEDOCODE ***********************
 * 
 * Create a function called tutorWageCalculator and receive 'timesheet' and 'level' parameters
 *     Make sure the passed parameters are valid
 *     Make a list of hours worked from the timesheet entered
 *     Declare a wages variable to hold the tutor wages
 *     Loop through the list
 *         IF level is 1, 
 *             each list item multiplied by 75
 *             add that product to the wages variable
 *          ELSE IF level 2,
 *             each list item multiplied by 90
 *             add that product to the wages variable
 *          ELSE IF level 3,
 *              each list item multiplied by 105
 *             add that product to the wages variable
 *      Looping end
 *      
 *       return the wages variable
 *      
 *     ********************* END OF PSUEDOCODE ********************* 
 */

function tutorWageCalculator(timesheet, level){
    if(typeof timesheet != 'string' || timesheet == ''){
        return 0;
    }

    if(level < 1 || level > 3){
        return 0;
    }
    
    const hoursList = timesheet.split('-');
    if(hoursList.length < 5 || hoursList.length > 7){
        return 0;
    } 

    let tutorWages = 0;

    for(let i = 0; i < hoursList.length; i++){
        var hoursItem = parseFloat(hoursList[i]);
        if(level == 1){
            tutorWages += hoursItem * 75;
        } else if(level == 2){
            tutorWages += hoursItem * 90;
        } else if(level == 3){
            tutorWages += hoursItem * 105;
        }
    }

    return tutorWages;
}