import { useRef , useState } from "react";
function RandomGift() {
    const Gift = [
        "Điện thoại",
        "Máy tính bảng",
        "Máy tính xách tay",
        "Laptop",
        "Điện thoại di động",
        "Tivi"
    ];
    const [result, setResult] = useState("");
    const counterRef = useRef(0);

    const handleRandom = () => {
        if(counterRef.current < 3){
            const random = Math.floor(Math.random() * Gift.length); //Lấy số ngẫu nhiên từ 0 -> 1 : nên nhân thêm "Gift.length" để lấy đc số phần tử trong "mảng" và làm tròn lên băng "Floor"
            setResult(Gift[random]);
            counterRef.current++;
        }else{
            alert("BAN DA HET LUOT QUAY");
        }
    };

    console.log(counterRef.current);

    return (
        <>
            <button onClick={handleRandom}>Random</button>
            <div>Ban da trung thuong : {result}</div>
        </>
    );
}
export default RandomGift