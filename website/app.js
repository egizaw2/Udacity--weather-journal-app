let proxy = "https://cors-anywhere.herokuapp.com/";
let apiKey = "&us&units=metric&appid=74c9bbd083d4540a7eedccb3df9535cd";

let mainURL = "https://api.openweathermap.org/data/2.5/weather?zip=";

const btn = document.getElementById('generate')
const date = document.getElementById('date');
    const temp = document.getElementById('temp');
    const content = document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date()
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear()
const feelings = document.getElementById('feelings');

const zip = document.getElementById('zip');  

    const getWeather = async (mainURL, zip, apiKey) => {
    
        try {
            const req = await fetch(mainURL + zip + apiKey)
            const data = await req.json()
            const { main: { temp },
            } = data
            return temp
        
            //console.log(data)
        } catch (error) {
            console.log("error", error);
        }
    }

    const postData = async (mainURL, data) => {
        try {
            await fetch(mainURL, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
        } catch (error) {
            throw error
            console.log("error", error);
        }
    }
btn.addEventListener('click', () => {
    getWeather(mainURL, zip.value, apiKey)
        .then(temp => {
            return { date: newDate, temp, content: feelings.value }
        })
        .then(function (data) {
            console.log(data)
            postData('/addZip', data);
            return data
        })
                .then(({ temp, date, content }) =>
                    updateAppUI(temp, date, content))
                .catch(error => {
                    console.error(error)
       
        });

    //updateUI
    const updateAppUI = async (temperature, newDate, feelings) => {
        //const req = await fetch('/all')
        //try {
            //const data = await request.json()
            date.innerText = newDate
            temp.innerText = `${temperature} °C`
            content.innerText = feelings
            console.log(allData);
            console.log("error", error)
    }
})

