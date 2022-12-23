import React from 'react';
import styled from 'styled-components'
import OnlineFoglalas from './onlineFoglalas';

const Container = styled.div`
    display:flex;
    flex-direction: column;
   
`
const Second = styled.div`
    display:flex;
    flex-direction: column;
    background: linear-gradient(267.94deg, #DECCCD -2.57%, #FFFFFF 72.66%, #F2E5E6 101.17%);
`
const Top = styled.div`
    display:flex;
    justify-content: center;
`
const Bottom = styled.div`
    display:flex;
    justify-content: center;
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
`
const Right = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    flex-direction: center;
    align-items: center;
    width: 50%;
    `
const Header = styled.div`
    
font-family: 'DM Serif Display';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 63px;
color: #303030;
`

const Text = styled.div`
    width: 65%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #303030;
`
const Img = styled.img`
    
    width: 75%;
    height: 100%;
    border-radius: 80px 80px 80px 5px;
`
const Bold = styled.div`
font-weight: bold;
display:inline-block;
`

const SzemoldokTetovalas:React.FC = () => {
    return (
        <Container>
            <Top>
            <Left>
           <Header>Szemöldöktetoválás</Header> 
           <Text>A szemoldok meghatàrozò szerepet játszik az arc hangulatában, fontos, hogy megfelelő helyen és ívben helyezkedjen el a szemöldökcsonton. Ha jól van tervezve, nyitottabbá teszi a tekintetet, vidámabbá és fiatalabbá teszi a viselőjét.</Text>
           <Text>Így fontos szerepet játszik az arcunk hangulatában. 2 fajta tetoválást különböztetünk meg, a szálas és a soft powder technikát.</Text>
           <Text>A szálas vagyis microbalding tetoválást egy kézieszköz segítségével készítjük,teljesen realisztikus hatású szálakat húzunk a bőrbe, a saját szalirannyal azonosan es a szor színnel megegyező színű pigmenttel, így teljesen realisztikus hatást kelt, ami a hiányos vagy kopott szemoldokot teszi dusabba, szebb ívűvé. A normál vagy kicsit szárazba hajló borben a legideálisabb es legtartósabb, zsiros borben nem ajanlott elkészíteni.</Text>
           <Text>A powderes technika hasonlít leginkább a sminkelt hatáshoz,az eleje és a teteje lágy, mint egy porral készült szemoldoknel.</Text>
           </Left>
           <Right>
            <Img src={require("./elso.jpg")} alt="" /> 
           </Right>
           </Top>
           <Bottom>
           <Left>
           <Img src={require("./ketto.jpg")} alt=""/>
           </Left>
           <Right>
            <Text>Lágyabban vagy erősebben is elkészíthető, attól függően, hogy a te szemelyisegedhez mi áll a legközelebb. Itt tetováló gép segítségével juttatjuk be a bőrbe a pigmentet.</Text>
           <Text>Ennek a két technikának a kombinált változata a hibrid tetovalas, ahol a szemoldok elején szálakat készítünk, a szemoldok vége pedig hangsúlyosabb és karakteresebb lesz.</Text>
           <Text>A szemoldok elkészítése 2- 2 és fel óra, előtte érzéstelenítünk és pontos elorajzolas és tervezés után készítjük el a tetoválást. Fontos, hogy menet közben is végig erzestelenitot használunk, így minimális kellemetlenséggel jár csak a beavatkozás.</Text>
           <Text>Minden új tetovalas 2 alkalom, az első alkalom után legalább 4 hétnek kell elteni, legfeljebb 3 hónapon belül meg kell, hogy történjen a korrekció, ebben az esetben ingyenes. Mindig két alkalom kell ahhoz, hogy tökéletes, egyénre szabott szemoldokot tudjunk készíteni.</Text>
           </Right>
           </Bottom>
           <Second>
           <Top>
            <Left>
           <Header>Szemhéjtetoválás</Header> 
           <Text>A szemhej tetovalas keretet ad a szemnek, dúsabbá teszi a Szempillakat és nem kell többe a szemhejtus megrajzolasaval foglalkoznod.</Text>
           <Text>Ha érzékeny a szemed a kozmetikumokra, amivel a sminket keszited, vagy csak szeretnéd hangsúlyosabbá tenni a szemedet, akkor ez kiváló megoldás lehet számodra.</Text>
           <Text>A legvisszafogottabb megoldás a Szempilla surites, ami a szempillak tövében egy vékony vonal, általában fekete vagy sötét barna színnel készítjük. Felül és alul is egyaránt elkészíthető.</Text>
           </Left>
           <Right>
            <Img src={require("./harom.jpg")} alt="" /> 
           </Right>
           </Top>
           <Bottom>
           <Left>
           <Img src={require("./negy.jpg")} alt=""/>
           </Left>
           <Right>
            <Text>A szemhej elkészítése felul 1-másfél orat vesz igénybe, alul és felül 2-2es fel óra.</Text>
           <Text>előtte érzéstelenítünk és pontos elorajzolas és tervezés után készítjük el a tetoválást. Fontos, hogy menet közben is végig erzestelenitot használunk, így minimális kellemetlenséggel jár csak a beavatkozás.</Text>
           <Text>Minden új tetovalas 2 alkalom, az első alkalom után legalább 4 hétnek kell elteni, legfeljebb 3 hónapon belül meg kell, hogy történjen a korrekció, ebben az esetben ingyenes.</Text>
           <Text>Mindig két alkalom kell ahhoz, hogy tökéletes, egyénre szabott szemhejat tudjunk készíteni.</Text> 
           <Text>Fontos, hogy muszempilla és kontakt lencse a tetovalas ideje alatt nem lehet a szempillan, illetve a szemben.</Text>
           </Right>
           </Bottom>
           </Second>
           <Top>
            <Left>
           <Header>Szájtetoválás</Header> 
           <Text>Mindenkinek elkészíthető, legyen vékonyabb, vagy teltebb az ajkad, egy megfelelően kiválasztott szín, dusabba, hangsúlyosabbá teszi az ajkakat.A természetes hatástol, a ruzsozott, sminkelt határáig bármi elkészíthető.Optikailag nagyit egy szín, de fontos, hogy nem helyettesíti a töltést, bár 1-2mm-t lehet nagyitani, korrigálni az asszimetrián.</Text>
           <Text>Ha töltésen és tetovlason is gondolkozol, akkor először a tetoválást javasolt elkészíteni, utána a töltést.</Text>
           <Text><Bold>Teljes satir:</Bold> Itt az egész ajak területet egy választott színnel tetovaljuk, élesebb kontúrral vagy kontur nélkül is elkészíthető.</Text>
           <Text><Bold>Fel satir:</Bold> ez leginkább teltebb ajkakon látványos,az ajak felet tetovaljuk, fontos tudni, hogy ez akkor ideális választás, ha a saját ajakszinedhez hasonló szint szeretnél, akkor a legtermészetesebb.</Text>
           </Left>
           <Right>
            <Img src={require("./ot.jpg")} alt="" /> 
           </Right>
           </Top>
           <Bottom>
           <Left>
           <Img src={require("./hat.jpg")} alt=""/>
           </Left>
           <Right>
            <Text><Bold>3D:</Bold> Itt több szint használunk az ajak területen, a kontur és kontur körüli rész picit sötétebb, belül világosabb és a középső részt a legvilagosabb színnel tetovaljuk, így színátmenetet készítünk az ajak külső részétől a belső fele. Optikailag ezzel lehet a legtöbbet ‘nagyitani’.</Text>
           <Text>A szaj elkészítése <Bold>3 órát vesz igénybe,</Bold> előtte érzéstelenítünk és pontos elorajzolas és tervezés után készítjük el a tetoválást. Fontos, hogy menet közben is végig erzestelenitot használunk, így probaljuk elérni, hogy minimális kellemetlenséggel járjon csak a beavatkozás.</Text>
           <Text>Minden új tetovalas 2 alkalom, az első alkalom után legalább 4 hétnek kell elteni, legfeljebb 3 hónapon belül meg kell, hogy történjen a korrekció, ebben az esetben tartalmazza az ár, a korrekciót.</Text>
           <Text>Mindig két alkalom kell ahhoz, hogy tökéletes, egyénre szabott szájat tudjunk készíteni.</Text>
           </Right>
           </Bottom>
           <OnlineFoglalas/>
        </Container>
    )
}

export default SzemoldokTetovalas;