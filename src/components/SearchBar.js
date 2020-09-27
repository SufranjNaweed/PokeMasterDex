import React, {useState} from 'react'
import { TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';

const SearchBar = ({fetchPresetPokemon}) => {
    const [value, setValue] = useState('');

    const searchPokemon = () => {
        console.log("search for a this pokemon " + value)
        fetchPresetPokemon()
    }

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={searchPokemon}>
          <Icon {...props} name='search-outline'/>
        </TouchableWithoutFeedback>
    );

    return (
        <>
            <View>
                <Input 
                    value={value}
                    placeholder="Search A Pokemon"
                    accessoryRight={renderIcon} 
                    onChangeText={nextValue => setValue(nextValue)}
                />
            </View>
        </>
    )
}

export default SearchBar