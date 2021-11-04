
function Profile(props){
return(
    <>
    {props.handleName(`Name: ${props.fullname} `)}
    <h2 >Fullname:{props.fullname}</h2>
    <h3>Bio:{props.bio}</h3>
    <h4>Profession:{props.profession}</h4>
    <div>{props.children}</div>
    <div>Default Props:{props.version}</div>
    </>
    );
}
//defaut props
Profile.defaultProps = {
    version: "16"
};



export default Profile;