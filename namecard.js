var profileArray = [
{
 avatar_url:"https://avatars.githubusercontent.com/u/115030?v=2",
 name:"Calvin Webster",
 followers:64,
 following:96,
 repos:37
},
{
 avatar_url:"https://avatars.githubusercontent.com/u/8238273?v=2",
 name:"Andrew Levy",
 followers:4,
 following:0,
 repos:8
},
{
 avatar_url:"https://avatars.githubusercontent.com/u/8241756?v=2",
 name:"Margaret Godowns",
 followers:5,
 following:14,
 repos:8
},
{
 avatar_url:"https://avatars.githubusercontent.com/u/6947446?v=2",
 name:"Brendan Quinn",
 followers:6,
 following:4,
 repos:8
},
{
 avatar_url:"https://avatars.githubusercontent.com/u/8247044?v=2",
 name:"Ansley Jones",
 followers:9,
 following:9,
 repos:6
 }
]

$(document).ready(function(){

  var fragment="";
  var nameCard= function(array,$target){
     for(var i = 0; i<array.length; i++){
      fragment += "<div class=\"profiles\">"
       + "<img src=\"" + array[i].avatar_url + "\">"
       + "<h2>" + array[i].name + "</h2>"
       + "<ul><li>Followers:"
       + array[i].followers
       + "</li>"
       + "<li>Following:" + array[i].following + "</li>"
       + "<li>Repositories:" + array[i].repos + "</li>"
       + "</ul>"
       + "</div>"

     }
     $target.append(fragment);

  };


  nameCard(profileArray, $(".container"));

});
