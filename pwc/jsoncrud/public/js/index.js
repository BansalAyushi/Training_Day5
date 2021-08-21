//Adding Department
function addDept()
{
    let dept = 
    {
        "id":2,
        "deptname":"Computer",
        "loc":"Pune"
    }

    fetch('http://localhost:3000/dept/',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dept)
        }).then((res)=>
        {
            console.log(res);
        })
}

//Retrieving Department
function getDept()
{
    fetch('http://localhost:3000/dept/').then((res)=>
        {
            return res.json();
        }).then((dept)=>
        {
            console.log(dept);
        })
}

//Edit department
function editDept()
{
    let dept = 
    {
        "id":2,
        "deptname":"Computer",
        "loc":"Kolkata"
    }

    fetch('http://localhost:3000/dept/2',{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(dept)
        }).then((res)=>
        {
            console.log(res);
        })
}

//Delete department
function deleteDept()
{
    fetch('http://localhost:3000/dept/2',{
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        },
        }).then((res)=>
        {
            console.log(res);
        })
}
