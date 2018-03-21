$(document).ready(function () {
    // write your code here
    $.getJSON('data.json', function (data) {
        console.log(data);

        data.forEach(function (spot) {
            console.log(spot);

            var name = spot.name;
            var description = spot.description;
            var location = spot.location;

            //create a row and column
            var row = document.createElement('tr');
            var column = document.createElement('td');

            //set the first column to name of topspot
            column.innerText = name;


            //create two columns
            var columndescription = document.createElement('td');
            var columnlocation = document.createElement('td');
            columndescription.innerText = description;

            var button = document.createElement('button');
            button.innerHTML = '<a href="https://google.com/maps/@' + location[0] + ',' + location[1] + 'z" target="_blank">Link</a>';

            columnlocation.appendChild(button);
            //set the column data to the spot data

            //append columns to row
            row.appendChild(column);
            row.appendChild(columndescription);
            row.appendChild(columnlocation);
            var tbl = document.getElementById('my-table');

            //append table row to table
            tbl.appendChild(row);

        })

        // var node = document.createTextElement();
        // column.appendChild(node);
        // row.appendChild(column);

        //     console.log(data[0].name)
        //     console.log(data[0].description)
        //     console.log(data[0].location)


    });

});

//create row for table

//create column for row

//create text node with name

//append text node to column

//append columnn to row

//append row to the HTML table

//insert table cells to the new row

//add text to button

//build link

// Link ="http://maps.google.com";