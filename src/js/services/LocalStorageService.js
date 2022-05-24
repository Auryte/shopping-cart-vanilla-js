class LocalStorageService {
    get(name) {
        const valueStr = localStorage.getItem(name);
        if (valueStr === null) {
            return null;
        }
        const value = JSON.parse(valueStr);

        return value;
    }

    set(name, value) {
        console.log("value", value)
        const valueStr = JSON.stringify(value);
        localStorage.setItem(name, valueStr);
    }

    remove(name) {
        localStorage.removeItem(name);
    }
}
export default LocalStorageService;