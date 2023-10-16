import { View,Text } from "react-native";
import { Button, Dialog, CheckBox } from "@rneui/themed"
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addSortingState } from "../features/chairSlice";

export default function ControlPanel() {
    const sortingState = useSelector(state => state.chairs.sortingState);
    const [visible, setVisible] = useState(false);
    const [checked, setChecked] = useState(0);
    const toggleDiaglog = () => {
        setVisible(!visible);
    }
    const options = ["Default","Name","Count","Price","Weight"];
    const dispatch = useDispatch();

    handleChangeSorting = () =>{
        dispatch(
        addSortingState(options[checked].toLowerCase())
       )

       
    }



    return (
    <>
        <View>
            <Button
                title="Select Sorting"
                onPress={toggleDiaglog}
                containerStyle={{height:"auto"}}

            />
        </View>
        <Dialog
      isVisible={visible}
      onBackdropPress={toggleDiaglog}
    >
      <Dialog.Title title="Select Preference type of Sorting"/>
      {options.map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          checked={checked === i }
          onPress={() => setChecked(i)}
        />
      ))}

      <Dialog.Actions>
        <Dialog.Button
          title="CONFIRM"
          onPress={() => {
          handleChangeSorting();
            toggleDiaglog();
          }}
        />
        <Dialog.Button title="CANCEL" onPress={toggleDiaglog} />
      </Dialog.Actions>
    </Dialog>
    </>
    )
}