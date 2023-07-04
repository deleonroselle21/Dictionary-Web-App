import React, { useState, useEffect } from 'react'
import './mainContent.css'
import SearchIcon from '../../assets/images/icon-search.svg'
import PlayIcon from '../../assets/images/icon-play.svg'
import SourceIcon from '../../assets/images/icon-new-window.svg'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
const MainContent = (props) => {

    const [word, setWord] = useState("keyboard");
    const [data, setData] = useState([]);
    const [ArrayDe, setArray] = useState([]);
    const [sound, setSound] = ("");
    let errorMessage = "";


    const handleInputChange = (event) => {
        setWord(event.target.value);


    }

    const ArrayDefinition = {
        noun: [],
        verb: [],
        adjective: [],
        adverb: [],
        preposition: [],
        interjection: [],
        conjunction: []
    }
    const SynonymsArray = {
        noun: [],
        verb: [],
        adjective: [],
        adverb: [],
        preposition: [],
        interjection: [],
        conjunction: []
    }
    const AntonymsArray = {
        noun: [],
        verb: [],
        adjective: [],
        adverb: [],
        preposition: [],
        interjection: [],
        conjunction: []
    }
    /*
    const handleSound=()=>{
        (data[0].phonetics[1].audio)
            setSound(data[0].phonetics[1].audio);
             new Audio(data[0].phonetics[1].audio).play()
        (data[0].phonetics[2].audio)
       new Audio(data[0].phonetics[2].audio).play()
           (data[0].phonetics[3].audio)
            setSound(data[0].phonetics[3].audio);
        
    }
*/



    /*
            data.map(x => {
                if (x.partOfSpeech === "verb") {
                    x.definitions.map(x => ArrayDefinition.verb.push(x))
                   // x.synonyms.map(x => wordsSynonyms.verb.push(x))
                } else if (x.partOfSpeech === "noun") {
    
                    x.definitions.map(x => ArrayDefinition.noun.push(x))
                   // x.synonyms.map(x => wordsSynonyms.noun.push(x))
                } else if (x.partOfSpeech === "adjective") {
                    x.definitions.map(x => ArrayDefinition.adjective.push(x))
                  //  x.synonyms.map(x => wordsSynonyms.adjective.push(x))
                } else if (x.partOfSpeech === "adverb") {
                    x.definitions.map(x => ArrayDefinition.adverb.push(x))
                   // x.synonyms.map(x => wordsSynonyms.adverb.push(x))
                } else if (x.partOfSpeech === "preposition") {
                    x.definitions.map(x => ArrayDefinition.preposition.push(x))
                   // x.synonyms.map(x => wordsSynonyms.preposition.push(x))
                } else if (x.partOfSpeech === "interjection") {
                    x.definitions.map(x => ArrayDefinition.interjection.push(x))
                  //  x.synonyms.map(x => wordsSynonyms.interjection.push(x))
                } else {
                    x.definitions.map(x =>ArrayDefinition.conjunction.push(x))
                //    x.synonyms.map(x => wordsSynonyms.conjunction.push(x))
                }
            })
        
    */

    if (data.length > 0) {

        data.map(key => {

            key.meanings.forEach(item => {
                if (item.partOfSpeech === "verb") {
                    item.definitions.map(item => ArrayDefinition.verb.push(item))
                    item.synonyms.map(item => SynonymsArray.verb.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                } else if (item.partOfSpeech === "noun") {

                    item.definitions.map(item => ArrayDefinition.noun.push(item))
                    item.synonyms.map(item => SynonymsArray.noun.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                } else if (item.partOfSpeech === "adjective") {
                    item.definitions.map(item => ArrayDefinition.adjective.push(item))
                    item.synonyms.map(item => SynonymsArray.adjective.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                } else if (item.partOfSpeech === "adverb") {
                    item.definitions.map(item => ArrayDefinition.adverb.push(item))
                    item.synonyms.map(item => SynonymsArray.adverb.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                } else if (item.partOfSpeech === "preposition") {
                    item.definitions.map(item => ArrayDefinition.preposition.push(item))
                    item.synonyms.map(item => SynonymsArray.preposition.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                } else if (item.partOfSpeech === "interjection") {
                    item.definitions.map(item => ArrayDefinition.interjection.push(item))
                    item.synonyms.map(item => SynonymsArray.interjection.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                } else {
                    item.definitions.map(item => ArrayDefinition.conjunction.push(item))
                    item.synonyms.map(item => SynonymsArray.conjunction.push(item))
                    item.antonyms.map(item => AntonymsArray.verb.push(item))
                }
            })
        })

    }
    else {
        errorMessage = "Sorry no data was found"

    }




    /*
        const content = (
            Object.values(ArrayDefinition).map((data,index) =>
                data.length !== 0 ?
                    <li className='section'>
                        <div className="word-class">
                            <h2 
                            >{Object.keys(ArrayDefinition)[index]}</h2>
                        </div>
                        <h3 className="meaning">Meaning</h3>
                        <ul className='definition'>
                            {data.map((data, index) =>
                                <li
                                    key={index}
                                >
                                    <span >{data.definition}</span>
                                    <span>{data.example}</span>
                                </li>
                            )}
                        </ul>
    
                        {Object.values(wordsSynonyms)[index].length !== 0 ? <h3 className="synonyms">Synonyms
                            {
                                Object.values(wordsSynonyms)[index].map((y, index) => {
                                    return <span key={index}>{(index ? ', ' : '') + y}</span>
                                })
                            }
                        </h3> : null}
                    </li>
                    :
                    <div className='error'><p>Sorry! No result was found. Pease try another word!</p></div>
            )
    
    
                        )
*/

    console.log("from main" + word)
    console.log(ArrayDefinition)

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
        fetchData();

    }, [])



    //console.log("data[0]" + JSON.stringify(data)) ;
    return (
        <section className={`container mainContent__wrapper ${props.themeChange} ${props.font}  `}>
            <div className='search__wrapper'>
                <input type="text" onChange={handleInputChange} placeholder="Search for any word..." value={word} />
                <button onClick={fetchData}><img src={SearchIcon} alt="Search"></img></button>
            </div>
            {data.length > 0 ?
                <>
                    <div className='word__wrapper'>
                        <div>
                            {data.length > 0 ? <p className='word'>{data[0].word}</p> : null}
                            {data.length > 0 ? <p className='phonetic'>{data[0].phonetic ? data[0].phonetic : data[0].phonetics[1].text}</p> : null}

                        </div>
                        {/*   <img src={PlayIcon} onClick={() => data[0].phonetics.map(data => data.audio[0] && new Audio(data.audio).play())}></img>*/}
                        <img src={PlayIcon} onClick={() => {
                            data[0].phonetics[0].audio ?
                                new Audio(data[0].phonetics[0].audio).play() :
                                data[0].phonetics[1].audio ?
                                    new Audio(data[0].phonetics[1].audio).play() :
                                    data[0].phonetics[2].audio ?
                                        new Audio(data[0].phonetics[2].audio).play() :
                                        data[0].phonetics[3].audio &&
                                        new Audio(data[0].phonetics[3].audio).play()






                        }}></img>
                    </div>


                    <div className='mainContent__results'>

                        {data.length !== 0 ?


                            Object.values(ArrayDefinition).map((data, index_1) =>
                                data.length !== 0 ?
                                    <div style={{ paddingBottom: "2rem" }}>
                                        <div className='partOfSpeech__wrapper'>
                                            <h1 className='partOfSpeech'>{Object.keys(ArrayDefinition)[index_1]}</h1>
                                            <div style={{ width: "100%", display: "flex", alignItems: "center" }} >
                                                <div style={{ border: "0.3px solid gray", width: "100%" }}></div>
                                            </div>
                                        </div>
                                        <ul>
                                            {data.map((data, index) =>
                                                <li
                                                    key={index}
                                                >
                                                    <span className='definitions'>{data.definition}</span>
                                                    {data.example ? <p className='word__example'>{data.example}</p> : null}
                                                </li>
                                            )}
                                        </ul>

                                        {Object.values(SynonymsArray).map((data_1, index) =>


                                            data.length !== 0 ?
                                                Object.keys(ArrayDefinition)[index] === Object.keys(SynonymsArray)[index_1] &&
                                                <div className='synonyms__wrapper'>
                                                    {data_1.length > 0 && <p className='synonyms__text'>Synonyms</p>}
                                                    <div >
                                                        {data_1.map((data, index) =>



                                                            <span className='synonyms' key={index}  >{data}{data_1.length > 1 ? index <= data.length - 1 ? ", " : null : null}</span>


                                                        )}
                                                    </div>

                                                </div>


                                                : null
                                        )}
                                        {Object.values(AntonymsArray).map((data_1, index) =>


                                            data.length !== 0 ?
                                                Object.keys(ArrayDefinition)[index] === Object.keys(AntonymsArray)[index_1] &&
                                                <div className='antonyms__wrapper'>
                                                    {data_1.length > 0 && <p className='antonyms__text'>Antonyms</p>}
                                                    <div>
                                                    {data_1.map((data, index) =>



                                                        <span className='antonyms' key={index}  >{data}{data_1.length > 1 ? index <= data.length - 1 ? ", " : null : null}</span>



                                                    )}
                                                    </div>
                                                </div>
                                                : null
                                        )}

                                        {/*  <p className='sourceUrl'>{data.sourceUrls}</p>*/}
                                    </div>
                                    : null) : <p>Sorry no results found</p>}


                    </div></>
                : <div className='error__wrapper' style={{ display: "grid" }}>
                    <p className='error_description'>No Definitions found</p>
                    <p className='error'>Sorry pal, we couldn't find definitions for the word you were looking for.You can try the search again at a later time or head to the web instead.</p></div>}
            {/*
            <div className='synonyms__wrapper'>

                {data.length > 0 && data.map(data => data.meanings.map(data => data.synonyms.length > 0 ? <p className='synonyms__text'>Synoyms</p> : null))}
                <div>{data.length > 0 && data.map(data => data.meanings.map(data => data.synonyms.map(data => <span className='synonyms'> {data}</span>)))}</div>
            </div>
            <div className='antonyms__wrapper'>
                {data.length > 0 && data.map(data => data.meanings.map(data => data.synonyms.length > 0 ? <p className='synonyms__text'>Antonyms</p> : null))}
                <div>{data.length > 0 && data.map(data => data.meanings.map(data => data.antonyms.map(data => <span className='antonyms'> {data}</span>)))}</div>
            </div>
                            */}

            {data.length > 0 ?
                <>
                    <hr></hr>
                    <div className='source__wrapper'>
                        <p className='source__text'>Source</p>
                        <div>

                            {data.length > 0 && data.map(data => data.sourceUrls.map(data => <div className="source" ><a href={data} target="_blank" className='source__text'>{data}</a>    <a href={data} target="_blank"> <img style={{ cursor: "pointer" }} src={SourceIcon} alt="" /></a></div>))}

                        </div>

                    </div>
                </> : null}


        </section>
    )
}

export default MainContent