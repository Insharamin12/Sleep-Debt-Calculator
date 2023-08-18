const getSleepHours = day => {
    switch(day){
    case 'Monday':
    return 6;
    case 'Tuesday':
    return 6;
    case 'Wednesday':
    return 7;
    case 'Thursday':
    return 5;
    case 'Friday':
    return 6;
    case 'Saturday':
    return 7;
    case 'Sunday':
    return 8;
    }
    };
    
    const getActualSleepHours = () =>{
    return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday');
    }
    
    const getIdealSleepHours = () =>{
    let idealHours = 8;
    return idealHours*7;
    }
    //calculating sleep debt
    const calculateSleepDebt = () =>{
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
    console.log('You have got ' + actualSleepHours + ' hours of sleep this week, it is a perfect amount.');
    }
    if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
    }
    if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
    }
    }
    
    calculateSleepDebt();