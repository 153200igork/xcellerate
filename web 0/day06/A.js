var africa = {
    countries: {
        Rwanda: {
            Kigali: {
                population: 12.6
            }
        },
        Ghana: {
            Accra: {
                population: 30.4
            },
            "Nairobi/Kenya": {
                population: 49.7
            },
        }
    }
}

var familyBankValues = {
    familyMembers: {
        Mother: {
           "account number": 8096291,
           accountBalance: 10000000 
        },
        Father: {
            "account number": 8096293,
            accountBalance: 9999999
        },
        Sister: {
            "account number": 8096292,
            accountBalance: 10000
        },
        "Step Brother": {
            "account number": 8096292,
            accountBalance: 15000
        }
    }
}

//1)
console.log("Population of Kenya: " + africa.countries.Ghana["Nairobi/Kenya"].population)