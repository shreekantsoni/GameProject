
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });

 
//-------------------------------------------------------
   document.getElementById("form1").onsubmit=function() {
       q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
       q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
       q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
       q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
       q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
       
       result = q1 + q2 + q3 + q4 + q5;
       
    document.getElementById("grade").innerHTML = result;
       
 if (result == 0) {result2 = "Study . <br /><img src='https://media0.giphy.com/media/9zXsgQON96klHxWiTR/200w.webp?cid=ecf05e47yoqo40ejl5yj55ze0hmcgxx7w479dht3dkr05svt&rid=200w.webp' width='300' />"};
    if (result == 20) {result2 = "You need to spend more time.<br /><img src='https://media3.giphy.com/media/9g0jJHe6VFLQA/200w.webp?cid=ecf05e47nvr70cuufdq3jft6l8levshfk25oh3wkeydy328z&rid=200w.webp' width='300' />"};
    if (result == 40) {result2 = "I think you could do better.<br /><img src='https://media1.giphy.com/media/lP3bHT3sFhSa0QWCBs/200w.webp?cid=ecf05e47nvr70cuufdq3jft6l8levshfk25oh3wkeydy328z&rid=200w.webp' width='300' />"};
    if (result == 60) {result2 = "So close.<br /><img src='https://media1.giphy.com/media/26FL0kXeJG1UShgje/200w.webp?cid=ecf05e47261q6h14bq4h75e7i623qmxmel513h7hmyvotfzk&rid=200w.webp' width='300' />"};
    if (result == 80) {result2 = "very Good.<br /><img src='https://media2.giphy.com/media/WQgVRRhqDd15k0cQZg/200w.webp?cid=ecf05e47eh5ie6jwt6wv8khaj40kxmps9mtqe14ll4j23eie&rid=200w.webp' width='300' />"};
    if (result == 100) {result2 = "You're a JavaScript pro!<br /><img src='https://media2.giphy.com/media/cl72XB7TqPdjq7uQ3S/giphy.webp?cid=ecf05e47u5v2bbw8ckjnwp9jsj7u3uy2vjd8ehi01ubd5g4i&rid=giphy.webp' width='300' />"};
document.getElementById("grade2").innerHTML = result2;


return false; // required to not refresh the page; just leave this here
} //this ends the submit function
  