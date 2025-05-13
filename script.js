function verify(){
    const mi = document.getElementById('id');
    const pc = document.getElementById('pcode');
    const bl = document.getElementById('ball')
    const show = document.getElementById('con')
    const mId = mi.value.trim();
    const pCode = pc.value.trim();

    if (mId === '' && pCode === ''){
        mi.classList.add('warn');
        pc.classList.add('warn');
        alert('The Meeting ID & Pass code can not be left empty');
    } else {
        
        localStorage.setItem('meetingID', mId);
        localStorage.setItem('passcode', pCode);

        bl.classList.add('ball')
        alert('Join the meeting with id: ' +mId+ ' with pass code: ' +pCode+'');
        show.style.display = 'flex';
    }
};

function showStoredInfo (){
    const storedMeetingID = localStorage.getItem('meetingID');
    const storedPasscode = localStorage.getItem('passcode');

    console.log('Stored Meeting ID:', storedMeetingID);
    console.log('Stored Passcode:', storedPasscode);
}