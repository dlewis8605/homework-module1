$(document).ready(function() {
    // Add hand cursor to selectable activity cells
    $('tbody td:not(:first-child)').each(function() {
        if ($(this).text() !== "Not Available") { // check if content does not contain a particular string
            $(this).css('cursor', 'pointer'); // show hand indicating selectable
        }
    });

    // User interaction with table cells
    $('tbody td:not(:first-child)').click(function() { // user selects a table data cell
        var content = $(this).text(); // get content of cell
        
        // Find column index to get matching cliff site name
        var colIndex = $(this).index(); // get the column index of the clicked cell
        var cliffName = $("thead th").eq(colIndex).text(); // extract the cliff site name from the top heading row

        if (content !== "Not Available") { // check if content is a valid activity
            $(this).toggleClass("tdhighlight"); // add or remove class when cell is selected
            $('#displaySelected').modal('show'); // pop up Bootstrap Modal unconditionally on selection toggle

            if ($(this).hasClass("tdhighlight")) { // check if selected cell has class
                $('#result').append("<p>" + content + " at " + cliffName + "</p>"); // add child element with content and cliff name
            } else { // if selected cell doesn't have class
                $('#result p:contains("' + content + '")').remove(); // remove child element from display box
            }
        }
    });
});
