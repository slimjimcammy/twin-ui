import Form from "../components/ui/Form"
import TextField from "../components/ui/TextInput"
import FileInput from "../components/ui/FileInput"
import { Grid } from "../components/layout/Grid";
import { Text } from "../components/ui/Text";
import HorizontalNav from "../components/app/horizontal-nav/HorizontalNav";
import Button from "../components/ui/Button";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Container } from "../components/layout/Container";
export default function Record() {
    return (
        <Container className="mt-10" width='default'>
            
        
        <Grid cols='two'>
            <Grid cols='one' spacing='sm' justify='center' align='center'>
            <Text font="heading">1. Fill Out Form <Text variant='pSm'>(Fill all required fields)</Text></Text>
            <Text font="heading">2. Connect MIDI device <Text variant='pSm'> (Await confirmpation pop-up) </Text> </Text>
            <Text font="heading">3. Hit record on Cerato  <Text variant='pSm'> (Button on X deck, on the Y)</Text> </Text>
            <Text font="heading">4. Press capture here <Text variant='pSm'> (and start DJ-ing!)</Text></Text>
            <Button shape="circle" size="sm" variant="secondary">Connect MIDI</Button>
        </Grid>
            <Text> </Text>
            <TextField width='md' label="Transition name"/>
            <FileInput label="Audio" width="md" /> 
            <TextField label="Song 1" placeholder="KYOTO" helperText="Help"/>
            <TextField label="Song 2" placeholder="JACKIE CHAN" helperText="HelpterText"/>
            <Widget
                    className="w-full aspect-square relative overflow-hidden"
                    padding="sm"
                    >
                    <Image
                        src="/beyonce.jpg"
                        alt="Album Cover"
                        className="absolute inset-0 w-full h-full object-cover opacity-25"
                    />
                    <Widget
                        padding="sm"
                        className="absolute bottom-sm left-sm w-fit h-fit bg-[#05070A] z-10"
                        glow="light"
                    >
                    <Text
                        variant="pSm"
                        color="default"
                        font="heading"
                        align="left"
                        width="fit"
                    >
                        Beyonce Song
                    </Text>
                </Widget>
            </Widget>
            <Widget
                className="w-full aspect-square relative overflow-hidden"
                padding="sm"
            >
            <Image
                src="/dragons.jpg"
                alt="Album Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <Widget
                padding="sm"
                className="absolute bottom-sm left-sm w-fit h-fit bg-[#05070A] z-10"
                glow="light"
            >
            <Text
                variant="pSm"
                color="default"
                font="heading"
                align="left"
                width="fit"
            >
                Bad Liar
                </Text>
                </Widget>
            </Widget>
        </Grid>
      <HorizontalNav 
            slotLeft={<TextField label="Transition name"/>}
            slotRight={<Grid cols='one' spacing='sm' justify='center' align='center'>
            <Text font="heading">1. Fill Out Form <Text variant='pSm'>(Fill all required fields)</Text></Text>
            <Text font="heading">2. Connect MIDI device <Text variant='pSm'> (Await confirmpation pop-up) </Text> </Text>
            <Text font="heading">3. Hit record on Cerato  <Text variant='pSm'> (Button on X deck, on the Y)</Text> </Text>
            <Text font="heading">4. Press capture here <Text variant='pSm'> (and start DJ-ing!)</Text></Text>
            <Button shape="circle" size="sm" variant="secondary">Connect MIDI</Button>
        </Grid>}
            slotCenter={<FileInput label="Audio" width="md" /> }>
        </HorizontalNav>
        <HorizontalNav
            slotLeft={<TextField label="Song 1" placeholder="KYOTO" helperText="Help"/>}
            slotCenter={<Text> </Text>}
            slotRight={ <TextField label="Song 2" placeholder="JACKIE CHAN" helperText="HelpterText"/>}>
        </HorizontalNav>
        <HorizontalNav
            slotLeft={<Widget
                          className="w-full aspect-square relative overflow-hidden"
                          padding="sm"
                        >
                          <Image
                            src="/beyonce.jpg"
                            alt="Album Cover"
                            className="absolute inset-0 w-full h-full object-cover opacity-25"
                          />
                          <Widget
                            padding="sm"
                            className="absolute bottom-sm left-sm w-fit h-fit bg-[#05070A] z-10"
                            glow="light"
                          >
                            <Text
                              variant="pSm"
                              color="default"
                              font="heading"
                              align="left"
                              width="fit"
                            >
                              Beyonce Song
                            </Text>
                          </Widget>
                        </Widget>}
            slotCenter={<Text> </Text>}
            slotRight={<Widget
                          className="w-full aspect-square relative overflow-hidden"
                          padding="sm"
                        >
                          <Image
                            src="/dragons.jpg"
                            alt="Album Cover"
                            className="absolute inset-0 w-full h-full object-cover opacity-10"
                          />
                          <Widget
                            padding="sm"
                            className="absolute bottom-sm left-sm w-fit h-fit bg-[#05070A] z-10"
                            glow="light"
                          >
                            <Text
                              variant="pSm"
                              color="default"
                              font="heading"
                              align="left"
                              width="fit"
                            >
                              Bad Liar
                            </Text>
                          </Widget>
                        </Widget>}>
        </HorizontalNav>
        <Button size="md" variant="secondary">POST</Button>
        </Container>
         );

}