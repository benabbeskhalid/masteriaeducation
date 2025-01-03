import React, {useEffect, useState} from 'react';


const Home = ({Fruits}) => {


    
    const [fruitList,setFruitList ]=useState(Fruits)
    // État pour le champ de texte
    const [inputValue, setInputValue] = useState('');
   
    const listFruits = () => {
        return fruitList.map((fruit,index)=>{
         return  <li key={index}>{fruit}</li>  
        });
      };

       //ajouter un fruit
      const addFruits=(newFruit)=>{
        if(newFruit){
            setFruitList([...fruitList,newFruit])
        }
        setInputValue('');
       
      }


      const handleInputChange=(event)=>{
       setInputValue(event.target.value);
      }


      //supprimer l'element de la liste par index
      const removeFruit=(index)=>{
        setFruitList(fruitList.filter((fruit,i)=> i !== index ))
      }

      // useEffect pour afficher un message lorsque le composant est monté
    useEffect(() => {
        console.log("Le composant Contact est monté !");
      }, []); // Tableau vide : s'exécute uniquement au montage
      // useEffect pour suivre les changements de la liste des fruits

       useEffect(() => {
              console.log("La liste des fruits a changé :", fruitList);
          }, [fruitList]); // Dépendance : s'exécute lorsque fruitList change
      
    

          
    return(
            <>
            <p> age : { 2022-1999 } </p>


    <ul>
        {fruitList.map((fruit, index) => (
          <li key={index}>
            {fruit}
            <button onClick={() => removeFruit(index)}>Supprimer</button>
          </li>
        ))}
      </ul>

           <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ajouter un fruit"
        />
          
          <button onClick={()=>addFruits(inputValue)}>Ajouter</button> 



            <ul>{listFruits()}</ul>
            </>
    ) 
};

export default Home;
