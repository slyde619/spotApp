
export const useProfile = () => {

    const updateProfile = (title, description, image="/Avatar.png") => {
        localStorage.setItem("profile", JSON.stringify({title, description, image}));
    }
    
    const getProfile = () => {
        return JSON.parse(localStorage.getItem("profile"));
    }

    return {
        updateProfile,
        getProfile
    }
}
