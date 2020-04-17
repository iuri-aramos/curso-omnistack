const connection = require('../database/connection');

module.exports = {

    async getAll(req, resp) {
        const ong_id = req.headers.id_ong;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return resp.json(incidents);
    }
}