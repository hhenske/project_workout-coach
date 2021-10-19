const CardioWorkout = () => {
    const easyCardio = [
        {
        id: '101',
        act: 'run',
        type: 'interval',
        intervals: '3 min / 2 min',
        intensity: 'easy'
        },
        {
        id: '102',
        act: 'run',
        type: '20-40 min',
        intervals: 'none',
        intensity: 'easy'
        },
        {
        id: '103',
        act: 'cycling',
        type: '45-75 min',
        intervals: 'none',
        intensity: 'easy'
        },
        {
        id: '104',
        act: 'hike',
        type: '30-75 min',
        intervals: 'none',
        intensity: 'easy'
        },
        {
        id: '105',
        act: 'walk',
        type: '30-75 min',
        intervals: 'none',
        intensity: 'easy',
        },
        {
        id: '106',
        act: 'swim',
        type: '30-60 min',
        intervals: 'none',
        intensity: 'easy'
        }


    ]

    const medCardio = [
        {
            id: '201',
            act: 'run',
            type: 'interval',
            intervals: '5-7 min / 2 min',
            intensity: 'medium'
            },
            {
            id: '202',
            act: 'run',
            type: '30-55 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '203',
            act: 'cycling',
            type: '50-90 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '204',
            act: 'hike',
            type: '50-90 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '205',
            act: 'cycling',
            type: 'interval',
            intervals: 'hills or 4-6 min.',
            intensity: 'medium',
            },
            {
            id: '206',
            act: 'swim',
            type: '40-60 min',
            intervals: 'easy, med-easy, med-hard',
            intensity: 'medium',
            }

    ]

    const hardCardio = [
        {
            id: '301',
            act: 'run',
            type: 'interval',
            intervals: 'timed quarters at race pace',
            intensity: 'hard'
            },
            {
            id: '302',
            act: 'run',
            type: '45-77 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '303',
            act: 'cycling',
            type: '70+ min',
            intervals: 'none',
            intensity: 'medium-hard'
            },
            {
            id: '304',
            act: 'hike',
            type: '60-120 min',
            intervals: 'none',
            intensity: 'hilly'
            },
            {
            id: '306',
            act: 'cycling',
            type: 'interval',
            intervals: 'hills or 4-6 min.',
            intensity: 'hard',
            },
            {
            id: '307',
            act: 'swim',
            type: '50-75 min',
            intervals: 'med-easy, medium, med-hard',
            intensity: 'hard',
            }
    ]

    // yoga API https://github.com/Stuwert/yoga-builder
    // strength exercise database: https://mtntactical.com/category/exercises/ (list of exercise links with videos attached)
    // https://www.programmableweb.com/api/exercisedb
         // API Endpoint https://exercisedb.p.rapidapi.com/exercises
        // API Portal / Home Page ** https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb


    return <p>Cardio Workout</p>
}

export default CardioWorkout;