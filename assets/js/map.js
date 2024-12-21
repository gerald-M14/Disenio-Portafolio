document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => { 
    document.querySelector("#load-iframe-map").innerHTML=`
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidht="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.8720279289537!2d-79.52973435871037!3d8.97476089684788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8e822c55c7d%3A0x6cdccd8f374c497d!2sBella%20Vista%2C%20Panam%C3%A1%2C%20Provincia%20de%20Panam%C3%A1!5e1!3m2!1ses!2spa!4v1734749762889!5m2!1ses!2spa"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    `;
    }, 1000);

});