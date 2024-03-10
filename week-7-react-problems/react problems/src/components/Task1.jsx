import './Task1.css';
import profile_pic from '../assets/react.svg';

export function Task1() {
    return (
        <div className="Profile">
            <div className="gradient"></div>
            <div className="profile-details">
                <img src={profile_pic} alt="" />
                <div className="profile_title">Rita Correia</div>
                <div className="profile_description">London</div>
                <div className='stats' style={{display: "flex"}}>
                    <div className='Followers'>Followers</div>
                    <div className='Likes'>Likes</div>
                    <div className='Photos'>Photos</div>
                </div>
            </div>
        </div>
    )
}