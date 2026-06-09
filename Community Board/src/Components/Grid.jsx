import Card from "./Card";
import player from "../player.jpg";
const Grid = () => {
    return(
        <div className = "Grid">
           <Card imgLink = {player} songName ="Promises" artist="Maverick City Music"/>
           <Card imgLink = {player} songName ="Jireh" artist="Maverick City Music"/>
           <Card imgLink = {player} songName ="No One" artist="Elevation Worship"/>
           <Card imgLink = {player} songName ="Jesus is Alive" artist="Forrst Frank"/>
           <Card imgLink = {player} songName ="Washed" artist="Elevation Rhythm"/>
           <Card imgLink = {player} songName ="Stand still" artist="Maverick City Music"/>
           <Card imgLink = {player} songName ="Your way's better" artist="Forrst Frank"/>
           <Card imgLink = {player} songName ="Omemma" artist="Chandler Moore"/>
           <Card imgLink = {player} songName ="Big God" artist="Terrian"/>
           <Card imgLink = {player} songName ="You say" artist="Lauren Diagle"/>
           <Card imgLink = {player} songName ="Alleluia" artist="Elevation Worship"/>
           <Card imgLink = {player} songName ="Amioluwa" artist="Sunmisola Agbebi"/>

        </div>
    )
}

export default Grid;
