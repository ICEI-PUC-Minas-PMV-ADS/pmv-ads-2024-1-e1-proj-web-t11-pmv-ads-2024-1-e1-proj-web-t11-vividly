
    function filterTable() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("dateInput");
        filter = input.value;
        table = document.getElementById("dataTable");
        tr = table.getElementsByTagName("tr");
        
        for (i = 1; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0]; // Coluna da data
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } 
                else {      
                    tr[i].style.display = "none";
                }
            }       
        }
    }

