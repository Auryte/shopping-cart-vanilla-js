class LocalStorageService {
    static get(name) {
        const valueStr = localStorage.getItem(name);
        if (valueStr === null) {
            return null;
        }
        const value = JSON.parse(valueStr);

        return value;
    }

    static set(name, value) {
        const valueStr = JSON.stringify(value);
        localStorage.setItem(name, valueStr);
    }

    static remove(name) {
        localStorage.removeItem(name);
    }
}
export default LocalStorageService;