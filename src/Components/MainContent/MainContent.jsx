import React, { useState, useEffect } from 'react'
import './mainContent.css'
import SearchIcon from '../../assets/images/icon-search.svg'
import PlayIcon from '../../assets/images/icon-play.svg'
const MainContent = (props) => {

    const [word, setWord] = useState("");
    const [data, setData] = useState([]);
    const partSpeechArray=[];
let uniquePartSpeech=[];

    /*data.map(item=>item.meanings.map(data=>partSpeechArray.push(data.partOfSpeech)))*/
    console.log(partSpeechArray)
    uniquePartSpeech=[...new Set(partSpeechArray)]
    console.log(uniquePartSpeech)

    const handleInputChange = (event) => {
        setWord(event.target.value);


    }
    console.log("from main" + word)

    const fetchData = () => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])


   //console.log("data[0]" + JSON.stringify(data)) ;
    return (
        <section className={`container mainContent__wrapper ${props.themeChange} ${props.font}  `}>
            <div className='search__wrapper'>
                <input type="text" onChange={handleInputChange} />
                <button onClick={fetchData}><img src={SearchIcon} alt="Search"></img></button>
            </div>
      {/*
            <div className='word__wrapper'>
                <div> 
                  {data.length>0?<p className='word'>{data[0].word}</p>:null}
                  {data.length>0?<p className='phonetic'>{data[0].phonetic}</p>:null}
             
                </div>
                <img src={PlayIcon} onClick={() => data.phonetics.map(data => data.audio && new Audio(data.audio).play())}></img>
            </div>
    */}
      
            <div className='mainContent__results'>
                {data.length > 0 ?
                    data.map(data =>
                        <div>
                        
                            <div className='word__wrapper'>
                                <div>

                                    <p className='word'>{data.word}</p>
                                    <p className='phonetic'>{data.phonetic}</p>
                                  
                                </div>
                                <img src={PlayIcon} onClick={() => data.phonetics.map(data => data.audio && new Audio(data.audio).play())}></img>
                            </div>
                    
                    
                            {data.meanings.map(item =>
                                <div className='meanings__wrapper'>
                                    
                                    <div className='partOfSpeech__wrapper'>
                                        <h1 className='partOfSpeech'>{item.partOfSpeech}</h1>
                                        <div style={{ width: "100%", display: "flex", alignItems: "center" }} >
                                            <div style={{ border: "0.3px solid gray", width: "100%" }}></div>
                                        </div>


                                    </div>
                                    <p className='meaning__text'>Meaning</p>
                                    {item.definitions.map(data => <><li className='definitions'>{data.definition}</li>

                                        {data.example ? <p className='word__example'>{`"${data.example}"`}</p> : null}</>)}
                                    <div className='synonyms__wrapper'>
                                        {item.synonyms.length > 0 ? <p className='synonyms__text'>Synonyms</p> : null}
                                        <div>{item.synonyms.map(data => <span className='synonyms'> {data}</span>)}</div>
                                    </div>
                                    <div className='antonyms__wrapper'>
                                        {item.antonyms.length > 0 ? <p className='antonyms__text'>Antonyms</p> : null}
                                        <div>{item.antonyms.map(data => <p className='antonyms'> {data}</p>)}</div>
                                    </div>
                                </div>
                            )}

                            {/*
                            <h1>{data.meanings[0].partOfSpeech}</h1>
                            <p>{data.meanings[0].definitions[0].definition}</p>
                    */}
                            <hr></hr>
                            <p className='sourceUrl'>{data.sourceUrls}</p>

                        </div>





                    ) : <div className='error'><p>Sorry! No result was found. Pease try another word!</p></div>}
            </div>


        </section>
    )
}

export default MainContent