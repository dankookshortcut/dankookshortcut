const ElearningURL = "https://nlms.dankook.ac.kr/";
const Library_seatURL = "https://lib.dankook.ac.kr/";
const Application_for_classesURL = "https://sugang.dankook.ac.kr/logon.do";
const Web_informationURL = "https://webinfo.dankook.ac.kr/main.do";
const NoticeURL = "https://portal.dankook.ac.kr/web/portal/-1";
const Web_mailURL = "https://mail.google.com/mail/u/1/#inbox";

function openURLInNewTab(url) {
    whale.tabs.create({ url });
}

document.getElementById('clickDanE').addEventListener('click', () => { openURLInNewTab(ElearningURL) }, false);
document.getElementById('clickDanLS').addEventListener('click', () => { openURLInNewTab(Library_seatURL) }, false);
document.getElementById('clickDanA').addEventListener('click', () => { openURLInNewTab(Application_for_classesURL) }, false);
document.getElementById('clickDanW').addEventListener('click', () => { openURLInNewTab(Web_informationURL) }, false);
document.getElementById('clickDanB').addEventListener('click', () => { openURLInNewTab(NoticeURL) }, false);
document.getElementById('clickDanM').addEventListener('click', () => { openURLInNewTab(Web_mailURL) }, false);

let easterEggId = document.getElementById('clickEasterEgg');
easterEggId.addEventListener('mouseover', hoverNoonsong, false);
easterEggId.addEventListener('mouseout', unhoverNoonsong, false);

function hoverNoonsong() {
    easterEggId.setAttribute('src', '../icon/대표이미지.png');
}

function unhoverNoonsong() {
    easterEggId.setAttribute('src', '../icon/대표이미지.png');
}