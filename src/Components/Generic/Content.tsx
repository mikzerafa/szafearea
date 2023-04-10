import '../../Assets/content.css'

const content = (text:string) =>{
    return (
        <div className="contentDiv">
            <span className="content">{text}</span>
        </div>
    );
}

export default{
    content
}