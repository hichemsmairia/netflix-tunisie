import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
const [imgLink,setImgLink] = useState('https://isarta.com/infos/wp-content/uploads/2015/10/chargement-vitesse.png')
const [text,setText] = useState('')

useEffect(()=>{
    let x= Math.floor(Math.random()*10)
axios.get('https://www.omdbapi.com/?s=man&apikey=4a3b711b')
.then(result=>{
    setImgLink(result.data.Search[x].Poster);
    setText(result.data.Search[x].Title);
})
.catch(()=>{
    alert('il y a  un probleme')
})


},[])
 
    return (
        <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={imgLink} alt="Card image cap" />
  <div class="card-body">
    
    <a href="#" class="btn btn-primary">{text}</a>
  </div>
</div>
    )
}

export default Movie ; 

// 