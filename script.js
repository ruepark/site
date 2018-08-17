/* Shows the modals for the projects page */
function run(modalName, btnName) {
    var modal = document.getElementById(modalName);
    var btn = document.getElementById(btnName);
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
        modal.style.display = "block";
    }
}
run('dfaModal', "dfaBtn");
run('edModal', "edBtn");
run('roomModal', "roomBtn");
run('medModal', "medBtn");

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    document.getElementById('dfaModal').style.display = "none";
    document.getElementById('edModal').style.display = "none";
    document.getElementById('medModal').style.display = "none";
    document.getElementById('roomModal').style.display = "none";
}
window.onclick = function(event) {
    var dfa = document.getElementById('dfaModal');
    var ed = document.getElementById('edModal')
    var med = document.getElementById('medModal')
    var room = document.getElementById('roomModal')
   if (event.target === dfa || event.target === ed || event.target === med || event.target === room) {
        ed.style.display = "none";
        room.style.display = "none";
        dfa.style.display = "none";
        med.style.display = "none";
   }
}

/* Showing text for the interests page */
function showText(id) {
    hideall();
    var x = document.getElementById(id);
    x.style.display = "block";
}
function hideall() {
    var all = ['ed','design','climbing','photography','singing','humans'];
    all.forEach(function(id) {document.getElementById(id).style.display = "none"} );
}