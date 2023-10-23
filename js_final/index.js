let suEmailVal = '';
let suPwVal = '';
let siEmailVal = '';
let siPwVal = '';

const suEmailInp = document.querySelector('#su_email')
const suPwInp = document.querySelector('#su_pw')
const siEmailInp = document.querySelector('#si_email')
const siPwInp = document.querySelector('#si_pw')

suEmailInp.addEventListener('change', (e) => {
    let val = e.currentTarget.value;
    suEmailVal = val;
})
suPwInp.addEventListener('change', (e) => {
    let val = e.currentTarget.value;
    suPwVal = val;
})
siEmailInp.addEventListener('change', (e) => {
    let val = e.currentTarget.value;
    siEmailVal = val;
})
siPwInp.addEventListener('change', (e) => {
    let val = e.currentTarget.value;
    siPwVal = val;
})

const signupBtn = document.querySelector('.signup_btn');
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let userInfo = { email: suEmailVal, pw: suPwVal };
    window.localStorage.setItem('userInfo', JSON.stringify(userInfo));

    alert("회원가입에 성공했습니다.")
})

const signinBtn = document.querySelector('.signin_btn');
signinBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let savedData = JSON.parse(window.localStorage.getItem('userInfo'))
    let { email, pw } = savedData;

    if (email === siEmailVal && pw === siPwVal) {
        alert("로그인에 성공했습니다.")
    } else {
        alert('이메일이나 비밀번호를 확인해주세요.')
    }
})