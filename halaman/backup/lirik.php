
<div id="demo"></div>

<script>
var request = new XMLHttpRequest();
var artis = "kangen band";
var judul = "doy";
request.open('GET', 'https://api.lyrics.ovh/v1/'+artis+'/'+ judul);

request.onreadystatechange = function () {
    if (this.readyState === 4) {
        console.log('Status:', this.status);
        console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
        document.getElementById("demo").innerHTML = this.responseText;
    }
};

request.send();
</script>