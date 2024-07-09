function Menu() {
    const arrayMenu = [
        "Trang chu",
        "San pham",
        "Lien he",
        "Tin Tuc",
        "Gioi thieu",
    ];
    return (
        <>
            <ul>
                {arrayMenu.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default Menu;