import TV from '../images/tv.png'


const Profit = () => {
    return (

<section class="Section">

<div class="Container">

    <div class='Grid'>

        <div class="Section-Text">
            <h1> Profitez sur votre téléviseur. </h1>
            
            <p>
              Regardez sur Smart TV, Playstation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et plus encore.

            </p>

        </div>

        <div class="Image-tv">
            <img src={TV} alt="TV" />
        

            <div class="Video-tv"> 
                <video  autoplay playsinline muted loop>

                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />

                </video>
            </div>
        </div>
        <div>
            <p class="more_text" >Les supports compatibles avec Netflix ne manquent pas :
                 version navigateur, application Windows, Android ou iOS, depuis votre 
                 TV Connectée ou console de jeux,, et même votre lecteur Blu-ray… Netflix
                  se décline sur tous les supports (ou presque). Mais quelles sont les astuces et 
                différents moyens d'en profiter confortablement sur votre téléviseur ? 
                Là aussi, plusieurs possibilités s'offrent à vous. Pour les avoir en tête, suivez le guide. </p>
        </div>
        

    </div>

</div>

</section>


    )
}



export default Profit