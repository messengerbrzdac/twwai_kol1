class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const users = [{
        id: 1,
        name: 'Michal',
        email: 'temp1.email@gmail.com',
        password: 'haslo123'
    },
    {
        id: 2,
        name: 'Patryk',
        email: 'temp2.email@gmail.com',
        password: 'haslo123'
    },
    {
        id: 3,
        name: 'Mateusz',
        email: 'temp3.email@gmail.com',
        password: 'haslo123'
    }];

const chart2 = [{
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
    }, {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false}, {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
    }, {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
    }, {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
    }
    ]
}

];

const dataEndpoint = (router) => {
    router.get('/', async (request, response, next) => {
        response.render(__dirname + '/index.html', {})
    });

    router.get('/continents', async (request, response, next) => {
        response.render(__dirname + '/continents.html', { chart2: chart2})
    });

    router.get('/api/users', async (request, response, next) => {
        response.status(200).send({users: users});
    });

    router.get('/api/users/:id', async (request, response, next) => {
        response.status(200).send({user: users[request.params.id - 1]});
    });
    router.post('/api/user', async (request, response, next) => {
        users.push(request.body.newUser);

        response.status(200).send({user: users[users.length - 1]});
    });
};

export default dataEndpoint;

