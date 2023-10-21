const Button = () => {
    return (
        <button className="btn" onClick={url}>Download</button>
    );
};

const url = () => {
    var a = document.getElementsByClassName("urlArea").item(0).value;
    if(a == 0){
        alert("Please Enter a Url")
    }else {
     return(alert(a));
    }
}

export default Button;