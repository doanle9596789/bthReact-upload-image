import ReactDOM from "react-dom/client";
import './index.css';
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="container">
        <div className="card">
            <div className="card--header" />
            <img
                className="avatar"
                src="/z4291424577201_2e3e721a4df70fe202564484b5b9bfdb.jpg"
                alt="avatar"
            />

            <div className="card--body"><br/>
                <div>
                    <p className="text-header">Vợ iu</p>
                    <p className="text-sub">
                        Bệnh tật có thể cướp đi sinh mạng của anh nhưng nó không thể giết chết tình yêu anh dành cho em. Dù có thế nào trái tim anh vẫn mãi mãi trao cho em như lúc đầu. Anh yêu em
                    </p>
                    <button className="btn third">FOLLOW</button>
                </div>
            </div>
        </div>
    </div>
)
