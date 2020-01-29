import React, { useReducer } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColourCounter from '../Components/ColourCounter';

const COLOUR_INCREMENT = 15;

const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    // action === {colourToCHange: 'red' || 'green' || 'blue'}
    switch(action.colourToChange) {
        case 'red':
            return (state.red + action.amout > 255) || (state.red + action.amount <0 )
            ? state : {...state, red: state.red + action.amount };
        case 'green':
            return (state.green + action.amout > 255) || (state.green + action.amount <0 )
            ? state : {...state, green: state.green + action.amount };
        case 'blue':
            return (state.blue + action.amout > 255) || (state.blue + action.amount <0 )
            ? state : {...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;
    
    return (
        <View>
            <ColourCounter
              onIncrease={() => dispatch({ colourToChange: 'red', amount: COLOUR_INCREMENT }) }
              onDecrease={() => dispatch({ colourToChange: 'red', amount: -1 * COLOUR_INCREMENT }) }
              colour="Red"/>
            <ColourCounter
              onIncrease={() => dispatch({ colourToChange: 'blue', amount: COLOUR_INCREMENT }) }
              onDecrease={() => dispatch({ colourToChange: 'blue', amount: -1 * COLOUR_INCREMENT })}
              colour="Blue"/>
            <ColourCounter
              onIncrease={() => dispatch({ colourToChange: 'green', amount: COLOUR_INCREMENT })}
              onDecrease={() => dispatch({ colourToChange: 'green', amount: -1 * COLOUR_INCREMENT})}
              colour="Green"/>
              <View style={{
                  height: 150,
                  width: 150,
                  backgroundColor: `rgb(${red}, ${green}, ${blue})`}} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;