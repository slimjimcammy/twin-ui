import Form from "../components/ui/Form"
import TextField from "../components/ui/TextInput"
import FileInput from "../components/ui/FileInput"
import { VerticalNav } from "../components/app/vertical-nav/VerticalNav";
import { Text } from "../components/ui/Text";
import HorizontalNav from "../components/app/horizontal-nav/HorizontalNav";
import Button from "../components/ui/Button";
export default function Record() {
    // gotta be a better way of doing this, just putting these for reference
    return (
        <VerticalNav variant="fit">
            <Text font="heading">Fill Out Form</Text>
            <Text>Fill all required fields</Text>
            <Text font="heading">Connect MIDI device</Text>
            <Text>Await confirmpation pop-up</Text>
            <Text font="heading">Hit record on Cerato</Text>
            <Text>Button on X deck, on the Y</Text>
            <Text font="heading">Press capture here</Text>
            <Text>and start DJ-ing!</Text>
      <HorizontalNav 
            slotLeft={<TextField label="Transition name"/>}
            slotCenter={<Text>Your transition</Text>}
            slotRight={<FileInput width="sm" helperText="only mp3 or audio"/> }>
        </HorizontalNav>
        <HorizontalNav
            slotLeft={<TextField label="Song 1" placeholder="KYOTO" helperText="Help"/>}
            slotCenter={<Text>a</Text>}
            slotRight={ <TextField label="Song 2" placeholder="JACKIE CHAN" helperText="HelpterText"/>}>
        </HorizontalNav>
            <Button shape="circle" size="sm" variant="secondary">Connect MIDI</Button>
              <Button size="md" variant="secondary">POST</Button>
        </VerticalNav>
        
         );

}