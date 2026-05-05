import { useState, useEffect } from "react";
import { updateUser } from "../../Features/User/UserApi";
import { updateUserProfile } from "../../Features/User/UserSlice";
import { useSelector, useDispatch } from "react-redux";
import "./UserEdit.scss";

function UserEdit() {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user.token);
    const profile = useSelector((state) => state.user.profile);

    useEffect(() => {
        if (profile) {
            setFirstName(profile.firstName || "");
            setLastName(profile.lastName || "");
        }
    }, [profile]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("avant envoie:", { firstName, lastName });
            const updatedUser = await updateUser(token, firstName, lastName);
            console.log("apres envoie:", updatedUser);
            dispatch(updateUserProfile(updatedUser));
            setIsEditing(false);
        } catch (error) {
            console.error("Erreur mise à jour profil :", error);
        }
    };

    return (
        <div>
            <h1 style={{ display: isEditing ? "none" : "" }}>
                Welcome back
                <br />
                {profile ? `${profile.firstName} ${profile.lastName}` : "User"}!
            </h1>
            <button className="edit-button" onClick={() => setIsEditing(!isEditing)} style={{ display: isEditing ? "none" : "" }}>
                Edit Name
            </button>

            {isEditing && (
                <div className="editForm">
                    <h2>Edit User Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <span>
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </span>
                        <span>
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </span>
                        <span>
                            <button className="editForm__button" type="submit">
                                Save
                            </button>
                            <button className="editForm__button" type="button" onClick={() => setIsEditing(false)}>
                                Cancel
                            </button>
                        </span>
                    </form>
                </div>
            )}
        </div>
    );
}

export default UserEdit;
