class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let participant = this.listOfParticipants.find(p => p.name == name);

        if (participant) {
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        let newParticipant = {
            name: name,
            condition: condition,
            power: 100,
            wins: 0,
        }

        this.listOfParticipants.push(newParticipant);
        return `The ${newParticipant.name} was successfully registered.`;

    }

    unregisterParticipant(name) {
        let participant = this.listOfParticipants.find(p => p.name == name);

        if (!participant) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(p => p.name != name);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, player1, player2) {
        let game;

        if (this.timeToPlay.length == 2) {
            game = typeOfGame;
        } else {
            game = typeOfGame;
        }

        if (game == 'Battleship') {
            let participant1 = this.listOfParticipants.find(p => p.name == player1);

            if (!participant1) {
                throw new Error('Invalid entered name/s.');
            }

            participant1.power += 20;
            return `The ${participant1.name} successfully completed the game ${game}.`;

        } else if (game == 'WaterBalloonFights') {
            let participant1 = this.listOfParticipants.find(p => p.name == player1);
            let participant2 = this.listOfParticipants.find(p => p.name == player2);

            if (!participant1 || !participant2) {
                throw new Error('Invalid entered name/s.');
            }

            if (participant1.condition != participant2.condition) {
                throw new Error('Choose players with equal condition.');
            }

            if (participant1.power > participant2.power) {
                participant1.wins++;
                return `The ${participant1.name} is winner in the game ${game}.`;
            } else if (participant2.power > participant1.power) {
                participant2.wins++;
                return `The ${participant2.name} is winner in the game ${game}.`;
            }

            return 'There is no winner.';
        }
    }

    toString() {
        let resut = [`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`];

        this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        this.listOfParticipants.forEach(player => {
            resut.push(`${player.name} - ${player.condition} - ${player.power} - ${player.wins}`);
        });

        return resut.join('\n');
    }
}
