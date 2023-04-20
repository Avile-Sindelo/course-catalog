function courseCost(courseCode, startDateStr){

    const startDate = new Date(startDateStr);  

    const courses = {
        "p1" : {
            courseName : "Python",
            cost : 7850.00
        },
        "p2" : {
            courseName : "Intro to PHP course",
            cost : 8990.00
        }, 
        "r1" : {
            courseName : "Ruby on Rails intro",
            cost : 5675.00
        }
    }

    const course = courses[courseCode];
    if (!course) {
        return {
            status : "Invalid code"
        }
    }

    const day = Number(startDate.getDate());
  	
    if (isNaN(day)) {
      return {
        status : "Invalid day"
      }
    }
  
    let discountRate = 0;
    let courseCost = course.cost;
    let discount = 0;

    if ( day >=20 && day <=25) {
        discountRate = 0.4      
    } else if ( day >=10 && day <=15) {
        discountRate = 0.2;
    }

    if (discountRate > 0) {
        discount = courseCost * discountRate;
      	courseCost = course.cost - discount;
    }
  
    return {
        status : "success",
        code: "r1",
	    description : course.courseName,
	    cost : course.cost,
	    discount, 
	    amountDue : courseCost
    }
}