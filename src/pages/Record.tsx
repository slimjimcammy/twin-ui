import Form from "../components/ui/Form";
import TextField from "../components/ui/TextInput"
import FileInput from "../components/ui/FileInput"
import { Grid } from "../components/layout/Grid";
import { Text } from "../components/ui/Text";
import Button from "../components/ui/Button";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Container } from "../components/layout/Container";
export default function Record() {
    return (
        <Container className="mt-10" width='default'>
        <Text variant="h1" weight='bold' className="pb-4">
            RECORD
        </Text>
        <Grid cols='two' spacing='xl' className="border rounded-sm p-5 border-white">
        <Grid cols='one'>
        <Form variant='inline' className="w-full">
            <TextField label="Transition name" className="w-full"/>
            <FileInput label="Audio" className="w-full"/> 
        </Form>
        <Form variant='inline' className="w-full">
            <TextField label="Song 1" placeholder="KYOTO" helperText="Help" className="w-full"/>
            <TextField label="Song 2" placeholder="JACKIE CHAN" helperText="HelpterText"className="w-full" />
        </Form>
        <Form variant='inline'>
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
        </Form>
        </Grid>
            <Grid cols='two' spacing='sm' justify='center' align='start'>
            <Text variant='h4' font="heading">1. Fill Out Form <Text variant='pSm'>(Fill all required fields)</Text></Text>
            <Text variant='h4' font="heading">2. Connect MIDI device <Text variant='pSm'> (Await confirmpation pop-up) </Text> </Text>
            <Text variant='h4' font="heading">3. Hit record on Cerato  <Text variant='pSm'> (Button on X deck, on the Y)</Text> </Text>
            <Text variant='h4' font="heading">4. Press capture here <Text variant='pSm'> (and start DJ-ing!)</Text></Text>
            <Form variant='inline'>
                <Button shape="circle" size="sm" variant="secondary">Connect MIDI</Button>
            </Form>
            <Form variant='inline' className="p-0">
                <Button size="md" variant="secondary">POST</Button>
            </Form>
           
        </Grid>
        </Grid>
        </Container>
        
         );

}