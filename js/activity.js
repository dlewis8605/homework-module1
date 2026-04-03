$(document).ready(function() {
    // Add hand cursor to selectable activity cells
    $('tbody td:not(:first-child)').each(function() {
        if ($(this).text() !== "Not Available") {
            $(this).css('cursor', 'pointer');
        }
    });

    // Toggle highlight on click for selectable cells
    $('tbody td:not(:first-child)').click(function() {
        if ($(this).text() !== "Not Available") {
            $(this).toggleClass("tdhighlight");
        }
    });
});
