function submitForm() {
    let pswd = document.getElementById('password').value;
    if (pswd === "")
        return alert("password can't be empty");
    let cnfPswd = document.getElementById('conf-password').value;
    if (pswd !== cnfPswd)
        return alert('Incorrect password');
    let name = document.getElementById('name').value.trim();
    let number = document.getElementById('number').value.trim();
    let email = document.getElementById('email').value.trim();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let designerElement = document.querySelector('input[name="designer"]');
    let developerElement = document.querySelector('input[name="developer"]');
    let otherElement = document.querySelector('input[name="other"]');
    let expArr = [];
    if (designerElement.checked)
        expArr.push(designerElement.value);
    if (developerElement.checked)
        expArr.push(developerElement.value);
    if (otherElement.checked)
        expArr.push(otherElement.value);
    const formObj = {
        name,
        email,
        phnNum: number,
        sex: gender,
        exp: expArr 
    } 
    console.log(formObj);
}