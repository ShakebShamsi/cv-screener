console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Shakeb Hassan Shamsi',
        age: 20,
        city: 'Muzaffarpur',
        language: 'JavaScript',
        framework: 'React.js',
        image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },

    {
        name: 'Tazheeb Hassan Shamsi',
        age: 24,
        city: 'Durgapur',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/19.jpg'
    },

    {
        name: 'Tahzeeb Hassan Danish',
        age: 32,
        city: 'Bangalore',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },

    {
        name: 'Aishwariya Rajput',
        age: 45,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/57.jpg'
    },

    {
        name: 'Shahnaz Anjum',
        age: 25,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/87.jpg'
    },

    {
        name: 'Anjali Sinha',
        age: 30,
        city: 'Chennai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/27.jpg'
    },

    {
        name: 'Sadaf Khan',
        age: 25,
        city: 'Hyderabad',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/women/17.jpg'
    },

    {
        name: 'Sachin Arora',
        age: 32,
        city: 'Delhi',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/42.jpg'
    },

    {
        name: 'Ranveer Jha',
        age: 33,
        city: 'Pune',
        language: 'React.js',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    
    {
        name: ' Md Arbaz',
        age: 28,
        city: 'Patna',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/men/35.jpg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}
