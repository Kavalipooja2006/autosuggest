var users = [
    {
        "name": "John Doe",
        "gender": "Male",
        "image": "/images/john.png"
    },
    {
        "name": "Jane Doe",
        "Gender": "Female",
        "image": "/images/jane.png"
    }
]

var curId=0;
function toggle(){
    curId = (curId+1)%2;

    var user = users[curId];
    document.getElementById("user-image").src=user.image;

    document.getElementById("user-Name").innerText=user.name;

    document.getElementById("user-Gender").innerText=user.gender;

}