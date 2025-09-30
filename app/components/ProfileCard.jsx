export default function ProfileCard({img, h2, h3}) {
    return (
        <div className="pc">
        {img && <img src={img} alt="profile" className="cardimg"/>}
        {h2 && <h2>{h2}</h2>}
        {h3 && <h3>{h3}</h3>}
        </div>
    );
}