describe('Testing the Course Cost function', function(){
    it('it should ensure that invalid dates return a status of "Invalid day" ', function(){
        let courseCodeOne = 'p1';
        let invalidDate = 'Monday';

        assert.deepEqual(courseCost(courseCodeOne,invalidDate), {status : 'Invalid day'});
    });

    it('it should ensure that valid codes are handled correctly ', function(){
        let validDate = '2023-05-21';
        let courseCodeTwo = 'p2';

        let resultOne = {
            status: 'success',
            code: 'r1',
            cost: 8990,
            description: 'Intro to PHP course',
            discount: 3596,
            amountDue: 5394
        }

        assert.deepEqual(courseCost(courseCodeTwo,validDate), resultOne);
    });

    it('it should ensure that the courses get different prices across discount windows', function(){
        let courseCodeThree = 'r1';
        let dateTwo = '2020-06-09';
        let dateThree = '2019-04-20';
        let resultTwo = {
            status: 'success',
            code: 'r1',
            cost: 5675,
            description: 'Ruby on Rails intro',
            discount: 0,
            amountDue: 5675
        }

        let resultThree = {
            status: 'success',
            code: 'r1',
            cost: 5675,
            description: 'Ruby on Rails intro',
            discount: 2270,
            amountDue: 3405
        }
        assert.deepEqual(courseCost(courseCodeThree,dateTwo), resultTwo);
        assert.deepEqual(courseCost(courseCodeThree,dateThree), resultThree);
    });

    it('it should ensure that different courses have different prices', function(){
        let validDate = '2023-05-21';
        let courseCodeFour = 'p2';
        let courseCodeFive = 'p1';

        let resultFour = {
            status: 'success',
            code: 'r1',
            cost: 8990,
            description: 'Intro to PHP course',
            discount: 3596,
            amountDue: 5394
        }
        
        let resultFive = {
            status: 'success',
            code: 'r1',
            cost: 7850,
            description: 'Python',
            discount: 3140,
            amountDue: 4710
        }

        assert.deepEqual(courseCost(courseCodeFour,validDate), resultFour);
        assert.deepEqual(courseCost(courseCodeFive, validDate), resultFive)
    });
});