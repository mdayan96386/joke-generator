

const generate_btn = document.querySelector('button')
const generate_content = document.querySelector('p')

generate_btn.addEventListener('click', generateJoke)

async function generateJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        if(response.ok){
            const data = await response.json();
            if(data.joke){
                generate_content.textContent = data.joke;
            }else{
                generate_content.textContent = "Sorry, no joke found!";
            }
        }else{
            generate_content.textContent = 'Failed to fetch joke, please try again!';
        }
    } catch (error) {
        generate_content.textContent = 'Error occurred!Please try again later.';
        console.log(error);
    }
}