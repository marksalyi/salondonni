import React from 'react';
import styled from 'styled-components'
import OnlineFoglalas from './onlineFoglalas';
import Top from './top';
import Bottom from './bottom';
import elso from './elso.jpg';
import ketto from './ketto.jpg'
import harom from './harom.jpg'
import negy from './negy.jpg'
import ot from './ot.jpg'
import hat from './hat.jpg'
import SzemoldoktetovalasImg from './SzemoldoktetovalasImg';
import ProgressSteps from './ProgressSteps';

const Container = styled.div`
    display:flex;
    flex-direction: column;
   
`

const RowContainer = styled.div`
    display:flex;
    flex-direction:column;

`

const SzemoldokTetovalas:React.FC = () => {
    return (
        <Container>
            <Top IsSecond={false} header="Szemöldöktetoválás"
             text="A szemoldok meghatàrozò szerepet játszik az arc hangulatában, fontos, hogy megfelelő helyen és ívben helyezkedjen el a szemöldökcsonton. Ha jól van tervezve, nyitottabbá teszi a tekintetet, vidámabbá és fiatalabbá teszi a viselőjét."
            text1="Így fontos szerepet játszik az arcunk hangulatában. 2 fajta tetoválást különböztetünk meg, a szálas és a soft powder technikát."
            text2="A szálas vagyis microbalding tetoválást egy kézieszköz segítségével készítjük,teljesen realisztikus hatású szálakat húzunk a bőrbe, a saját szalirannyal azonosan es a szor színnel megegyező színű pigmenttel, így teljesen realisztikus hatást kelt, ami a hiányos vagy kopott szemoldokot teszi dusabba, szebb ívűvé. A normál vagy kicsit szárazba hajló borben a legideálisabb es legtartósabb, zsiros borben nem ajanlott elkészíteni."
            text3="A powderes technika hasonlít leginkább a sminkelt hatáshoz,az eleje és a teteje lágy, mint egy porral készült szemoldoknel."
            img={elso}/>
            <Bottom  IsSecond={false} img={ketto} 
            text="Lágyabban vagy erősebben is elkészíthető, attól függően, hogy a te szemelyisegedhez mi áll a legközelebb. Itt tetováló gép segítségével juttatjuk be a bőrbe a pigmentet."
            text1="Ennek a két technikának a kombinált változata a hibrid tetovalas, ahol a szemoldok elején szálakat készítünk, a szemoldok vége pedig hangsúlyosabb és karakteresebb lesz."
            text2="A szemoldok elkészítése 2- 2 és fel óra, előtte érzéstelenítünk és pontos elorajzolas és tervezés után készítjük el a tetoválást. Fontos, hogy menet közben is végig erzestelenitot használunk, így minimális kellemetlenséggel jár csak a beavatkozás."
            text3="Minden új tetovalas 2 alkalom, az első alkalom után legalább 4 hétnek kell elteni, legfeljebb 3 hónapon belül meg kell, hogy történjen a korrekció, ebben az esetben ingyenes. Mindig két alkalom kell ahhoz, hogy tökéletes, egyénre szabott szemoldokot tudjunk készíteni."/>
            <RowContainer>
            <Top  IsSecond={true} header="Szemhéjtetoválás"
            text="A szemhej tetovalas keretet ad a szemnek, dúsabbá teszi a Szempillakat és nem kell többe a szemhejtus megrajzolasaval foglalkoznod."
            text1="Ha érzékeny a szemed a kozmetikumokra, amivel a sminket keszited, vagy csak szeretnéd hangsúlyosabbá tenni a szemedet, akkor ez kiváló megoldás lehet számodra."
            text2="A legvisszafogottabb megoldás a Szempilla surites, ami a szempillak tövében egy vékony vonal, általában fekete vagy sötét barna színnel készítjük. Felül és alul is egyaránt elkészíthető."
            img={harom}/>
           <Bottom IsSecond={true} img={negy}
           text="A szemhej elkészítése felul 1-másfél orat vesz igénybe, alul és felül 2-2es fel óra."
           text1="előtte érzéstelenítünk és pontos elorajzolas és tervezés után készítjük el a tetoválást. Fontos, hogy menet közben is végig erzestelenitot használunk, így minimális kellemetlenséggel jár csak a beavatkozás."
           text2="Minden új tetovalas 2 alkalom, az első alkalom után legalább 4 hétnek kell elteni, legfeljebb 3 hónapon belül meg kell, hogy történjen a korrekció, ebben az esetben ingyenes."
           text3="Mindig két alkalom kell ahhoz, hogy tökéletes, egyénre szabott szemhejat tudjunk készíteni."
           text4="Fontos, hogy muszempilla és kontakt lencse a tetovalas ideje alatt nem lehet a szempillan, illetve a szemben."/>
           </RowContainer>
            <Top IsSecond={false} header="Szájtetoválás"
            text="Mindenkinek elkészíthető, legyen vékonyabb, vagy teltebb az ajkad, egy megfelelően kiválasztott szín, dusabba, hangsúlyosabbá teszi az ajkakat.A természetes hatástol, a ruzsozott, sminkelt határáig bármi elkészíthető.Optikailag nagyit egy szín, de fontos, hogy nem helyettesíti a töltést, bár 1-2mm-t lehet nagyitani, korrigálni az asszimetrián."
            text1="Ha töltésen és tetovlason is gondolkozol, akkor először a tetoválást javasolt elkészíteni, utána a töltést."
            text2="<Bold>Teljes satir:</Bold> Itt az egész ajak területet egy választott színnel tetovaljuk, élesebb kontúrral vagy kontur nélkül is elkészíthető."
            text3="<Bold>Fel satir:</Bold> ez leginkább teltebb ajkakon látványos,az ajak felet tetovaljuk, fontos tudni, hogy ez akkor ideális választás, ha a saját ajakszinedhez hasonló szint szeretnél, akkor a legtermészetesebb."
            img={ot}/>
           <Bottom IsSecond={false} img={hat}
           text="<Bold>3D:</Bold> Itt több szint használunk az ajak területen, a kontur és kontur körüli rész picit sötétebb, belül világosabb és a középső részt a legvilagosabb színnel tetovaljuk, így színátmenetet készítünk az ajak külső részétől a belső fele. Optikailag ezzel lehet a legtöbbet ‘nagyitani’."
           text1="A szaj elkészítése <Bold>3 órát vesz igénybe,</Bold> előtte érzéstelenítünk és pontos elorajzolas és tervezés után készítjük el a tetoválást. Fontos, hogy menet közben is végig erzestelenitot használunk, így probaljuk elérni, hogy minimális kellemetlenséggel járjon csak a beavatkozás."
           text2="Minden új tetovalas 2 alkalom, az első alkalom után legalább 4 hétnek kell elteni, legfeljebb 3 hónapon belül meg kell, hogy történjen a korrekció, ebben az esetben tartalmazza az ár, a korrekciót."
           text3="Mindig két alkalom kell ahhoz, hogy tökéletes, egyénre szabott szájat tudjunk készíteni."/>
           <OnlineFoglalas/>
        </Container>
    )
}

export default SzemoldokTetovalas;