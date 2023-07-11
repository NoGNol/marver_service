import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErronBoundary from "../errorBoundary/ErronBoundary";

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) =>{
        this.setState({
            selectedChar: id
        })
    }
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    <ErronBoundary>
                      <RandomChar/>

                    </ErronBoundary>
                    <div className="char__content">
                        <ErronBoundary>
                         <CharList onCharSelected={this.onCharSelected}/> 
                        </ErronBoundary>
                        
                        <ErronBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErronBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/>
                </main>
            </div>
        )
    }
    
}

export default App;