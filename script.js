const btnGoodMood = document.querySelector('.btn-good-mood');
const btnBadMood = document.querySelector('.btn-bad-mood');

let goodMoodInfo = Number(localStorage.getItem('moodGood'));
let badMoodInfo = Number(localStorage.getItem('moodBad'));

document.querySelector('.counter-good-mood').innerText = goodMoodInfo.toString();
document.querySelector('.counter-bad-mood').innerText = badMoodInfo.toString();

if (goodMoodInfo === null || badMoodInfo === null) {
    const person = {
        moodGood: 0,
        moodBad: 0,
    };

    localStorage.setItem('moodGood', JSON.stringify(person.moodGood));
    localStorage.setItem('moodBad', JSON.stringify(person.moodBad));
}

btnGoodMood.addEventListener('click', () => {
    localStorage.setItem('moodGood', JSON.stringify(++goodMoodInfo));
    document.querySelector('.counter-good-mood').innerText = goodMoodInfo;
});

btnBadMood.addEventListener('click', () => {
    localStorage.setItem('moodBad', JSON.stringify(++badMoodInfo))
    document.querySelector('.counter-bad-mood').innerText = badMoodInfo;
});