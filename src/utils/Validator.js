class Validator {
    static validateName(name) {
        if (!name.trim()) return "Name is required.";
        if (name.length < 3) return "Name must be at least 3 characters long.";
        return null;
    }

    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) return "Email is required.";
        if (!emailRegex.test(email)) return "Invalid email format.";
        return null;
    }

    static validateDescription(description) {
        if (!description.trim()) return "Description is required.";
        if (description.length < 50) return "Description must be atleast 50 characters.";
        if (description.length > 1000) return "Description must be within 1000 characters.";
        return null;
    }
}

export default Validator;