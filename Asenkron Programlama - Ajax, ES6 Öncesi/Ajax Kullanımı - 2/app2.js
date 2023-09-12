
document.getElementById("ajax").addEventListener("click", getAllEmployees);


function getAllEmployees(){
    // adim 1
    const xhr = new XMLHttpRequest();
    // adim 2
    xhr.open("GET", "employees.json", true);
        xhr.onload = function(){
            let list = document.getElementById("employees");

            if (this.status === 200) {
                console.log(this.responseText);             // employees
                console.log(typeof this.responseText);      // string
                console.log(JSON.parse(this.responseText)); // [{…}, {…}, {…}]
                const employee = JSON.parse(this.responseText);
                employee.forEach(function(employee) {
                    list.innerHTML += `
                    <tr>
                        <td> ${employee.name} </td>
                        <td> ${employee.department} </td>
                        <td> ${employee.salary} </td>
                    </tr>
                    `
                });

            }
        }



    // adim 3
    xhr.send();

}








