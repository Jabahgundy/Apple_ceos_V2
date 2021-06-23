const db = require('./conn');


class AppleCeos {
    constructor(id, name, slug, first_year_active) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.first_year_active = first_year_active;
    }

    static async getAllAppleData() {
        try {
            const response = await db.any(
                `SELECT * FROM ceos`
            )
            console.log(response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = AppleCeos;