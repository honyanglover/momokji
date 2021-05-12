class Food {
    constructor({ name, country, ingredients }) {
        this._name = name;
        this._country = country;
        this._ingredients = [];
        this._tags = new Map();

        if (Array.isArray(ingredients)) {
            for (const ingredient of ingredients) {
                if (ingredient.constructor !== Ingredient) continue;
                this._ingredients.push(ingredient);
            }
        }
    }

    tag(name, _values) {
        if (typeof name !== "string" || !name.length) return this;
        if (!Array.isArray(_values)) return this;

        const values = [];

        for (const value of _values) {
            if (typeof value !== "string") continue;
            values.push(value);
        }

        this._tags.set(name, values);
    }

    get name() {
        return this._name;
    }

    get country() {
        return this._country;
    }

    get ingredients() {
        return [...this._ingredients];
    }

    get tags() {
        return [...this._tags];
    }
}