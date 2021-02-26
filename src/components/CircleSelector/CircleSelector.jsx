import React from 'react';


class CircleSelector extends React.Component {

   

    state = {
        circleChoice: 'SELECT CIRCLE 1'
        

    };

    
        
        updateChoice(circleChoice) {
            this.setState({circleChoice
            
            });
          

    }

    

    render() {
        return (
            <>
                <div>
                    <h1>Current Selection: {this.state.circleChoice}</h1>
                    <div>
                        <button 
                            className="CircleSelector"
                            onClick={() => this.updateChoice("CIRCLE 1: SELECTED")}>SELECT CIRCLE 1</button>

                    </div>
                    
                    <div>
                        <button 
                            className="CircleSelector"
                            onClick={() => this.updateChoice("CIRCLE 2: SELECTED")}>SELECT CIRCLE 2</button>
                    </div>

                    <div>
                        <button 
                            className="CircleSelector"
                            onClick={() => this.updateChoice("CIRCLE 3: SELECTED")}>SELECT CIRCLE 3</button>
                    </div>
                    
                    <div>
                    <button 
                            className="CircleSelector"
                            onClick={() => this.updateChoice("CIRCLE 4: SELECTED")}>
                            SELECT CIRCLE 4
                    </button>
                    </div>

                </div>
                
            </>
        );
    }
}

export default CircleSelector;