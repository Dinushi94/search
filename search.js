function redirect() {
    // As of now Replace D:/Sanjog/Projects/search with your custom path.
    document.location.href = 'D:/Sanjog/Projects/search/' + document.getElementById('search').value;
    return false;
}