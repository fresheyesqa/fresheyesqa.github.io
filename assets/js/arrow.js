var lastPath = window.location.pathname.split('/').slice(-1)[0];
var lastPathNoType = lastPath.replace('\.html','');
var findLi = 'li.'+lastPathNoType;
$(findLi).addClass('current');
