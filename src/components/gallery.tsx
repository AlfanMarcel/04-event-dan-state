import {sculptureList} from "@/data/article";
import { useState } from "react";

export default function Gallery() {
    //let index =  0;
    const [index, setIndex] = useState(0);

    function handleClick() {
        //index = index +1;
        setIndex(index + 1);
        if ((index + 1)== sculptureList.length){
            setIndex(index);
        }
    }
    function downClick() {
        //index = index +1;
        setIndex(index - 1);
        if ((index) == 0){
            setIndex(index);
        }
    }
    let sculpture = sculptureList[index];

    return (
        <>  
            <button
            onClick={downClick}
            className="bg-red-500 hover:bg-red-700 p-2 m-2 rounded"> Artikel Sebelumnya</button>
            <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 p-2 m-2 rounded"> Artikel Selanjutnya</button>
            <h2><i>{sculpture.name}</i> oleh {sculpture.artist}</h2>
            <h3>({index+1} dari {sculptureList.length})</h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}