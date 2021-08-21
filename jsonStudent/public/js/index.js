//Adding Sports
function addSport()
{
    let sports = 
    {
        "id":2,
        "sportsname":"Hockey",
        "price":100
    }

    fetch('http://localhost:3000/sports/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(sports)
        }).then((res)=>
        {
            alert("New sports added successfully");
            console.log(res);
        })
}

//Retrieving Sports
function getSport()
{
    fetch('http://localhost:3000/sports/').then((res)=>
        {
            return res.json();
        }).then((sports)=>
        {
          console.log(sports);
        })
}

//Edit Sports
function editSport()
{
    let sports = 
    {
        "id":2,
        "sportsname":"Hockey",
        "price":"$600"
    }

    fetch('http://localhost:3000/sports/2',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(sports)
        }).then((res)=>
        {
            alert("Sports details updated successfully");
            console.log(res);
        })
}

//Delete Sports
function deleteSport()
{
    fetch('http://localhost:3000/sports/2',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        }).then((res)=>
        {
            alert("Sports deleted successfully");
            console.log(res);
        })
}
