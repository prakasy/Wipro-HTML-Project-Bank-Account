function confirmSubmitDeleteMessage()
{
    var agree=confirm("Are you sure you want to Delete this message?");
    if (agree) {        
	    return true;
    } else {
	    return false;
    }
}