const categories = [
  {label: 'Mais Assistidos', active: true, link: '/Mais-Assistidos'},
  {label: 'Mais Votados', active: true, link: '/Mais-Votados'},  
  {label: 'Novidades', active: true, link: '/Novidades'}, 
  {label: 'Top 10', active: true, link: '/Top 10'},
  {label: 'Gêneros', active: true, link: '/generos'},   
];


export function navbar() {
    return (
        <nav className="categories container">

            <ol>
                <li><a href="#" className="active">Mais assistidos</a></li>
                <li><a href="#">Mais Votados</a> </li>
                <li><a href="#">Novidades</a> </li>
                <li><a href="#"> Generos</a></li>
            </ol>
        </nav>
    )
}