//###########################
// redirect matches the entered filename and returns the contents of that
// file only if the pattern exactly matches. For default enter without any filename within the search area
// it returns all contents inside the documentlocation path provided
//###########################
function redirect() {
    
    // As of now Replace D:/Sanjog/Projects/search with your custom path.
    var keyword= document.getElementById('search').value;
    document.location.href = 'D:/Sanjog/Projects/search/' + keyword; 
    return false;
}

function regCheck(){
    var pattern = /is/g;
    var reg = document.getElementById('reg').value;
    var result= reg.match(pattern);
    document.getElementById("result").innerHTML= result;

}

